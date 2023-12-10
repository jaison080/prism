// import type { AppProps } from 'next/app';

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
import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';
import { useSigner } from 'wagmi';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

// export interface ISpacesComponentProps {
// 	children: React.ReactNode;
// }

const SpacesComponentProvider = ({ children }) => {
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

function MyComponent({ Component, pageProps }) {
	const [anonAadhaar] = useAnonAadhaar();
	const { address } = useAccount();

	async function loginInit() {
		if (!window?.ethereum) {
			alert('Please install metamask');
			return;
		}

		const provider = new ethers.providers.Web3Provider(
			window.ethereum,
			'any'
		);
		if (!provider) {
			alert('Provider not found');
			return;
		}
		const signer = provider.getSigner();
		if (!signer) {
			alert('Signer not found');
			return;
		}
		const userAlice = await PushAPI.initialize(signer, {
			env: CONSTANTS.ENV.STAGING,
		});

		// const aliceSubscriptions = await userAlice.notification.subscriptions();

		// console.log('Alice subscriptions: ', aliceSubscriptions);

		// userAlice.stream(listen, {options?})
		// Initial setup
		const stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF], {
			filter: {
				channels: ['*'], // pass in specific channels to only listen to those
				chats: ['*'], // pass in specific chat ids to only listen to those
			},
			connection: {
				retries: 3, // number of retries in case of error
			},
			raw: false, // enable true to show all data
		});

		// Listen for notifications events
		stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
			console.log(data);

			if(data?.message?.notification?.title ) {
				toast.success(data?.message?.notification?.title);
			}
		});

		// Connect stream, Important to setup up listen events first
		stream.connect();

		// window.location.href = '/jobs';
	}

	useEffect(() => {
		console.log('Anon Aadhaar status: ', anonAadhaar.status);

		if (
			window &&
			!address &&
			window.location.pathname !== '/' &&
			anonAadhaar.status === 'logged-out'
		) {
			window.location.href = '/';
		} else if (
			window &&
			window.location.pathname === '/' &&
			address &&
			anonAadhaar.status === 'logged-in'
		) {
			loginInit();
		}
	}, [anonAadhaar]);

	return <Component {...pageProps} />;
}

function MyApp({ Component, pageProps }) {
	const [loadWagmi, setLoadWagmi] = useState(false);
	const [pgpPrivateKey, setPgpPrivateKey] = useState('');
	const { address } = useAccount();

	useEffect(() => {
		setLoadWagmi(true);
	}, [address]);

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
									<MyComponent
										Component={Component}
										{...pageProps}
									/>
									<ToastContainer />
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
