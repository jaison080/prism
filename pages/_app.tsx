import type { AppProps } from 'next/app';

import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura';
import { useAnonAadhaar, LogInWithAnonAadhaar } from 'anon-aadhaar-react';

import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
// import { SpacesUIProvider } from '@pushprotocol/uiweb';
// import { useSpaceComponents } from './../components/Spaces/useSpaceComponent';
import { AccountContext } from '../contexts';
import { ThemeProvider, createTheme } from '@mui/material';

import { AnonAadhaarProvider } from 'anon-aadhaar-react';
import { app_id } from '../utils/networks';

const { chains, provider } = configureChains(
	[sepolia],
	[
		infuraProvider({ apiKey: '5524d420b29f4f7a8d8d2f582a0d43f7' }),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: 'Connect',
	projectId: 'connect',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export interface ISpacesComponentProps {
	children: React.ReactNode;
}

const SpacesComponentProvider = ({ children }: ISpacesComponentProps) => {
	// const { spaceUI } = useSpaceComponents();

	const customtheme = {
		statusColorError: 'red',
	};

	return (
		// <SpacesUIProvider spaceUI={spaceUI} theme={customtheme}>
		{ children }
		// </SpacesUIProvider>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	const [loadWagmi, setLoadWagmi] = useState(false);
	const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');
	const { address } = useAccount();
	const [anonAadhaar] = useAnonAadhaar();

	useEffect(() => {
		console.log('Anon Aadhaar status: ', anonAadhaar.status);
	}, [anonAadhaar]);

	useEffect(() => {
		setLoadWagmi(true);
		if(window && !loadWagmi && !address && window.location.pathname !== '/' && anonAadhaar.status === 'logged-out') {
			window.location.href = '/';
		}
		else if(window && window.location.pathname === '/' && address && anonAadhaar.status === 'logged-in') {
			window.location.href = '/jobs';
		}
	}, [address, anonAadhaar]);

	const theme = createTheme({
		typography: {
			allVariants: {
				fontFamily: 'Poppins',
				textTransform: 'none',
			},
		},
	});

	return (
		<>
			{/* hacky fix for wagmi ssr hydration errors */}
			{loadWagmi ? (
				<WagmiConfig client={wagmiClient}>
					<RainbowKitProvider theme={darkTheme()} chains={chains}>
						<AccountContext.Provider
							value={{ pgpPrivateKey, setPgpPrivateKey }}
						>
							<ThemeProvider theme={theme}>
								{/* <SpacesComponentProvider> */}

								<AnonAadhaarProvider
									_appId={app_id}
									_testing={false}
								>
									<Component {...pageProps} />
								</AnonAadhaarProvider>
							</ThemeProvider>
							{/* </SpacesComponentProvider> */}
						</AccountContext.Provider>
					</RainbowKitProvider>
				</WagmiConfig>
			) : null}
		</>
	);
}

export default MyApp;
