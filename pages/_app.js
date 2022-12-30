import { useRouter } from 'next/router'
import { AuthContextWrapper } from '../components/auth/authContext'
import RouteProtector from '../components/auth/RouteProtector'
import PageFormat from '../components/common/PageFormat/PageFormat'
import '../components/global.css'

export default function App({ Component, pageProps }) {
  const protectedRoutes = ['/']
  const router = useRouter()
  return(
  <AuthContextWrapper>   
    <PageFormat> 
      {
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
    </PageFormat>
  </AuthContextWrapper>
  )
}

/* Auth Summary
  The auth wrapper checks the users cookies to see whether they are loaded. If they are
  the global context 'user' will be not null. While this process occurs, a splash screen will
  be displayed. 
  The route protecter checks whether the current url is protected and then redirects the user to the login
  page if necessary. The checking mechanism is within a useEffect so there's a loading component.
*/