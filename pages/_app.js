import { useRouter } from 'next/router'
import { AuthContextWrapper } from '../components/auth/authContext'
import RouteProtector from '../components/auth/RouteProtector'
import PageFormat from '../components/common/PageFormat/PageFormat'
import '../components/global.css'
import Router from 'next/router';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  const protectedRoutes = ['/dashboard']
  const router = useRouter()
  return(
  <AuthContextWrapper>  
    {/* Progess bar */}
  <NextNProgress color="#ba00f2" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
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

  Once the user logs in and is authenticated, we don't need to manually set the user - we 
  can instead redirect the user to desired page. Once  the page loads, the auth wrapper element
  will check and set the user for us.

  Setting the logout function inside the authwrapper seems to always set the user to null. 
  The above bug was squashed by intializing the auth variable inside the sign out function
*/