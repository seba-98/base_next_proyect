import '../styles/globals.css'
import type { AppProps } from 'next/app';

// import { lightTheme } from '../themes/light-theme';
// import { SWRConfig } from 'swr';
// import { Provider } from 'react-redux';
// import store from '../redux/store';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


// function MyApp({ Component, pageProps }: AppProps) {
//   <SWRConfig value={{fetcher: (resource, init)=> fetch(resource, init).then(res => res.json())}}>
//       <Provider store={store}>
//         <ThemeProvider theme={lightTheme}>
//           <CssBaseline/>
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </Provider>
//   </SWRConfig>
// }



export default MyApp
