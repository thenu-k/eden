import Head from 'next/head'
import PageFormat from '../components/common/PageFormat/PageFormat'
import Login from '../components/Pages/Login/Login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eden | Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
  </>
  )
}
