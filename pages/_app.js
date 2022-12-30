import { useRouter } from 'next/router'
import { AuthContextWrapper } from '../components/auth/authContext'
import RouteProtector from '../components/auth/RouteProtector'
import PageFormat from '../components/common/PageFormat/PageFormat'
import '../components/global.css'

export default function App({ Component, pageProps }) {
  const protectedRoutes = ['/']
  const router = useRouter()
  return(
  <PageFormat> 
    <AuthContextWrapper>   
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
    </AuthContextWrapper>
  </PageFormat>
  )
}
