import Carrer from '@/components/Join/Carrer'
import Page1 from '@/components/Join/Page1'
import Volunter from '@/components/Join/Volunter'
import SplashCursor from '@/components/SplashCursor'

function page() {
  return (
    <section>
      <SplashCursor/>
      <Page1/>
      <Volunter/>
      <Carrer/>
    </section>
  )
}

export default page