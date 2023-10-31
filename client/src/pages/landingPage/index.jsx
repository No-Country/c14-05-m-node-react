import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import FavoriteEvents from "./FavoriteEvents";
import FavoriteOrganizers from "./FavoriteOrganizers";
import FindEvent from "./FindEvent";
import NextEventYourZone from "./NextEventYourZone";
import UserLocation from "./UserLocation";

function LandingPage() {
  const [data, setData] = useState([]);
  const apiUrl = "https://api-rvi6.onrender.com/Eventos";
  useEffect(() => {
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

    fetchData(); // Call the async function to make the request
  }, []);
  return (
    <>
      <header>
        <UserLocation />
      </header>
      <main className="my-[76px]">
        <FindEvent />
        <NextEventYourZone data={data} />
        <FavoriteOrganizers data={data} />
        <FavoriteEvents data={data} />
      </main>
      <Navbar />
    </>
  );
}

export default LandingPage;
