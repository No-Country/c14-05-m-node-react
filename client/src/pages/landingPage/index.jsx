import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import FavoriteEvents from './FavoriteEvents'
import FavoriteOrganizers from './FavoriteOrganizers'
import FindEvent from './FindEvent'
import NextEventYourZone from './NextEventYourZone'
import UserLocation from "./UserLocation"
import axios from 'axios';

function LandingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your server running at http://localhost:3001
    axios.get('https://localhost:3001/Eventos')
      .then((response) => {
        // Handle the data from the server's response
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  },[]);
  console.log('data de eventos',data)
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