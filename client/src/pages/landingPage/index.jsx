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
  const apiUrl = "http://localhost:3001/Eventos";

  // Get coordinates
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      setLocation({ latitude: null, longitude: null }); // Set to a default value or handle the error.
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Get name place
  const [namePlace, setNamePlace] = useState(null);

  useEffect(() => {
    if (location && location.latitude !== null && location.longitude !== null) {
      const apiKey = import.meta.env.VITE_LOCATION_IQ;
      const apiUrl = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${location.latitude}&lon=${location.longitude}&format=json`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setNamePlace(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [location]);
  console.log(namePlace)
  return (
    <>
      <header>
        <UserLocation namePlace={namePlace}/>
      </header>
      <main className='my-[56px]'>
        <FindEvent />
        {(data.length>0)&&(namePlace!=null) ? <div>
          <NextEventYourZone data={data} namePlace={namePlace!=null?namePlace.address.state:""} />
        <FavoriteOrganizers data={data}/>
        <FavoriteEvents data={data}/>
        </div>:<p>No hay eventos</p>}

      </main>
      <Navbar />
    </>

  )
}

export default LandingPage