import { useRouter } from 'next/router'
import { AuthContextWrapper } from '../components/auth/authContext'
import RouteProtector from '../components/auth/RouteProtector'
import '../components/global.css'

export default function App({ Component, pageProps }) {
  const protectedRoutes = ['/']
  const router = useRouter()
  return(
  <AuthContextWrapper>    {
      (protectedRoutes.includes(router.pathname))
        ? (
          <RouteProtector>
            <Component {...pageProps} />
          </RouteProtector>
        )
        : (
          <Component {...pageProps} />
        )
    }
  </AuthContextWrapper>
  )
}
