// import '@/styles/globals.css'
// import Navbar from "@/components/Navbar";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} <Navbar /> />
// }

import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;