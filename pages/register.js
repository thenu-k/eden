import Head from 'next/head'
import { useAuth } from '../components/auth/authContext'
import PageFormat from '../components/common/PageFormat/PageFormat'
import Register from '../components/Pages/Register/Register'

export default function Home() {
  //use auth is the custom hook
  const {user} = useAuth()
  return (
    <>
      <Head>
        <title>Eden | Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register/>
    </>
  )
}
