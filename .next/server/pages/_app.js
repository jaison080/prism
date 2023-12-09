/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/accountContext.ts":
/*!************************************!*\
  !*** ./contexts/accountContext.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AccountContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hY2NvdW50Q29udGV4dC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsaUJBQWlCRCxvREFBYUEsQ0FBQyxDQUFDO0FBRXRDLGlFQUFlQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVzaC12aWRlby1zZGstZGVtby8uL2NvbnRleHRzL2FjY291bnRDb250ZXh0LnRzPzY3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBY2NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Q29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkFjY291bnRDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/accountContext.ts\n");

/***/ }),

/***/ "./contexts/index.ts":
/*!***************************!*\
  !*** ./contexts/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountContext: () => (/* reexport safe */ _accountContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _accountContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountContext */ \"./contexts/accountContext.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUk1QyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1c2gtdmlkZW8tc2RrLWRlbW8vLi9jb250ZXh0cy9pbmRleC50cz8xOTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi9hY2NvdW50Q29udGV4dFwiO1xuXG5leHBvcnQge1xuICBBY2NvdW50Q29udGV4dFxufTsiXSwibmFtZXMiOlsiQWNjb3VudENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts */ \"./contexts/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n// import { SpacesUIProvider } from '@pushprotocol/uiweb';\n// import { useSpaceComponents } from './../components/Spaces/useSpaceComponent';\n\nconst { chains, provider } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.sepolia\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__.infuraProvider)({\n        apiKey: \"5524d420b29f4f7a8d8d2f582a0d43f7\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)()\n]);\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.getDefaultWallets)({\n    appName: \"Connect\",\n    projectId: \"connect\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst SpacesComponentProvider = ({ children })=>{\n    // const { spaceUI } = useSpaceComponents();\n    const customtheme = {\n        statusColorError: \"red\"\n    };\n    return(// <SpacesUIProvider spaceUI={spaceUI} theme={customtheme}>\n    {\n        children\n    });\n};\nfunction MyApp({ Component, pageProps }) {\n    const [loadWagmi, setLoadWagmi] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [pgpPrivateKey, setPgpPrivateKey] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        setLoadWagmi(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadWagmi ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.RainbowKitProvider, {\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.darkTheme)(),\n                chains: chains,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts__WEBPACK_IMPORTED_MODULE_9__.AccountContext.Provider, {\n                    value: {\n                        pgpPrivateKey,\n                        setPgpPrivateKey\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/jagannath/Desktop/ethIndia/prism/pages/_app.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/jagannath/Desktop/ethIndia/prism/pages/_app.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jagannath/Desktop/ethIndia/prism/pages/_app.tsx\",\n                lineNumber: 71,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/jagannath/Desktop/ethIndia/prism/pages/_app.tsx\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, this) : null\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWdDO0FBQ21DO0FBQzVCO0FBQ2lCO0FBQ0E7QUFFYjtBQUNaO0FBQ2E7QUFDNUMsMERBQTBEO0FBQzFELGlGQUFpRjtBQUNwQztBQUU3QyxNQUFNLEVBQUVZLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdWLHNEQUFlQSxDQUMxQztJQUFDRyxpREFBT0E7Q0FBQyxFQUNUO0lBQ0VFLHNFQUFjQSxDQUFDO1FBQUVNLFFBQVE7SUFBbUM7SUFDNURQLHNFQUFjQTtDQUNmO0FBR0gsTUFBTSxFQUFFUSxVQUFVLEVBQUUsR0FBR2YseUVBQWlCQSxDQUFDO0lBQ3ZDZ0IsU0FBUztJQUNUQyxXQUFXO0lBQ1hMO0FBQ0Y7QUFFQSxNQUFNTSxjQUFjZCxtREFBWUEsQ0FBQztJQUMvQmUsYUFBYTtJQUNiSjtJQUNBRjtBQUNGO0FBTUEsTUFBTU8sMEJBQTBCLENBQUMsRUFBRUMsUUFBUSxFQUF5QjtJQUNsRSw0Q0FBNEM7SUFFNUMsTUFBTUMsY0FBYztRQUNsQkMsa0JBQWtCO0lBQ3BCO0lBRUEsT0FDRSwyREFBMkQ7SUFDM0Q7UUFBRUY7SUFBUztBQUdmO0FBRUEsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ21CLGVBQWVDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQVM7SUFFM0RELGdEQUFTQSxDQUFDO1FBQ1JtQixhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBRUdELDBCQUNDLDhEQUFDdEIsOENBQVdBO1lBQUMwQixRQUFRYjtzQkFDbkIsNEVBQUNqQixzRUFBa0JBO2dCQUFDK0IsT0FBTzlCLGlFQUFTQTtnQkFBSVUsUUFBUUE7MEJBQzlDLDRFQUFDRCxxREFBY0EsQ0FBQ3NCLFFBQVE7b0JBQ3RCQyxPQUFPO3dCQUFFTDt3QkFBZUM7b0JBQWlCOzhCQUd6Qyw0RUFBQ0w7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBSzVCOztBQUdWO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXNoLXZpZGVvLXNkay1kZW1vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWUsXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnO1xuaW1wb3J0IHsgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgc2Vwb2xpYSB9IGZyb20gJ3dhZ21pL2NoYWlucyc7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xuaW1wb3J0IHsgaW5mdXJhUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvaW5mdXJhJztcblxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IFNwYWNlc1VJUHJvdmlkZXIgfSBmcm9tICdAcHVzaHByb3RvY29sL3Vpd2ViJztcbi8vIGltcG9ydCB7IHVzZVNwYWNlQ29tcG9uZW50cyB9IGZyb20gJy4vLi4vY29tcG9uZW50cy9TcGFjZXMvdXNlU3BhY2VDb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3VudENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cyc7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbc2Vwb2xpYV0sXG4gIFtcbiAgICBpbmZ1cmFQcm92aWRlcih7IGFwaUtleTogJzU1MjRkNDIwYjI5ZjRmN2E4ZDhkMmY1ODJhMGQ0M2Y3JyB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpLFxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ0Nvbm5lY3QnLFxuICBwcm9qZWN0SWQ6ICdjb25uZWN0JyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNwYWNlc0NvbXBvbmVudFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgU3BhY2VzQ29tcG9uZW50UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBJU3BhY2VzQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgLy8gY29uc3QgeyBzcGFjZVVJIH0gPSB1c2VTcGFjZUNvbXBvbmVudHMoKTtcblxuICBjb25zdCBjdXN0b210aGVtZSA9IHtcbiAgICBzdGF0dXNDb2xvckVycm9yOiAncmVkJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxTcGFjZXNVSVByb3ZpZGVyIHNwYWNlVUk9e3NwYWNlVUl9IHRoZW1lPXtjdXN0b210aGVtZX0+XG4gICAgeyBjaGlsZHJlbiB9XG4gICAgLy8gPC9TcGFjZXNVSVByb3ZpZGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbbG9hZFdhZ21pLCBzZXRMb2FkV2FnbWldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGdwUHJpdmF0ZUtleSwgc2V0UGdwUHJpdmF0ZUtleV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRXYWdtaSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBoYWNreSBmaXggZm9yIHdhZ21pIHNzciBoeWRyYXRpb24gZXJyb3JzICovfVxuICAgICAge2xvYWRXYWdtaSA/IChcbiAgICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e2RhcmtUaGVtZSgpfSBjaGFpbnM9e2NoYWluc30+XG4gICAgICAgICAgICA8QWNjb3VudENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgICAgdmFsdWU9e3sgcGdwUHJpdmF0ZUtleSwgc2V0UGdwUHJpdmF0ZUtleSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPFNwYWNlc0NvbXBvbmVudFByb3ZpZGVyPiAqL31cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICB7LyogPC9TcGFjZXNDb21wb25lbnRQcm92aWRlcj4gKi99XG4gICAgICAgICAgICA8L0FjY291bnRDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJzZXBvbGlhIiwicHVibGljUHJvdmlkZXIiLCJpbmZ1cmFQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWNjb3VudENvbnRleHQiLCJjaGFpbnMiLCJwcm92aWRlciIsImFwaUtleSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwicHJvamVjdElkIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIlNwYWNlc0NvbXBvbmVudFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXN0b210aGVtZSIsInN0YXR1c0NvbG9yRXJyb3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRXYWdtaSIsInNldExvYWRXYWdtaSIsInBncFByaXZhdGVLZXkiLCJzZXRQZ3BQcml2YXRlS2V5IiwiY2xpZW50IiwidGhlbWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/infura");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();