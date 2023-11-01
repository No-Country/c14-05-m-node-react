import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NavbarDesktop from "../../components/NavbarDesktop";

import FavoriteEvents from "./FavoriteEvents";
import FavoriteOrganizers from "./FavoriteOrganizers";
import FindEvent from "./FindEvent";
import NextEventYourZone from "./NextEventYourZone";
import UserLocation from "./UserLocation";


function LandingPage() {
  const [data, setData] = useState([]);
  const apiUrl = "https://api-rvi6.onrender.com/Eventos";

  // Get coordinates
  const [location, setLocation] = useState(null);
  const [searchedEvent, setSearchedEvent] = useState("");

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

  const onChangeHandler = (e) => {
    setSearchedEvent(e.target.value);
  };
  const searchMatches = data.filter(function (d) {
    return d.titulo.includes(searchedEvent);
  });
  return (
    <>
      <header className="fixed left-0 right-0 top-0 w-screen border border-b-4 bg-white p-4">
        <NavbarDesktop
          namePlace={namePlace}
          searchedEvent={searchedEvent}
          onChangeHandler={onChangeHandler}
        />
        <UserLocation namePlace={namePlace} />
      </header>
      <main className={window.innerWidth <= 768 ? "my-[56px]" : "my-[104px]"}>
        <FindEvent />
        {searchMatches.length > 0 && namePlace != null ? (
          <div>
            <NextEventYourZone
              data={searchMatches}

              namePlace={namePlace != null ? namePlace.address.state : ""}
            />
            <FavoriteOrganizers data={data} />
            <FavoriteEvents data={data} />
          </div>
        ) : (
          <p>No hay eventos</p>
        )}
      </main>
      <Navbar />
    </>
  );
}

export default LandingPage;
