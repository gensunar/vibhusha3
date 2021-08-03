import '../styles/globals.css'
import Layout from '../components/Utils/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return <>
      <Component {...pageProps} />
  </>
}

export default MyApp
