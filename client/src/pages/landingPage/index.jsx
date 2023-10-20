import Navbar from '../../components/Navbar'
import FavoriteEvents from './FavoriteEvents'
import FavoriteOrganizers from './FavoriteOrganizers'
import FindEvent from './FindEvent'
import NextEventYourZone from './NextEventYourZone'
import UserLocation from "./UserLocation"

function LandingPage() {

  return (
    <>
      <header>
        <UserLocation />
      </header>
      <main className='my-[76px]'>
        <FindEvent />
        <NextEventYourZone />
        <FavoriteOrganizers />
        <FavoriteEvents />
      </main>
      <Navbar />
    </>

  )
}

export default LandingPage