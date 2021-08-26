import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vadim Ghedreutan | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Vadim Ghedreutan | Portfolio" />
        <meta
          name="description"
          content="You need a website for your startup or business?"
        />
        <meta
          name="keywords"
          content="website builder, web designer, responsive web design, wordpress website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
