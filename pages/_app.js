import "@/styles/globals.css";
import { PropertyProvider } from '../data/properties';

export default function App({ Component, pageProps }) {
  return (
    <PropertyProvider>
      <Component {...pageProps} />
    </PropertyProvider>
  )
}
