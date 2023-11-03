import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputSearch from "../../components/InputSearch";
import Title1 from "../../components/Title1";
import ListEvents from "./ListEvents";

function index() {
  const [data, setData] = useState([]);
  const [searchedEvent, setSearchedEvent] = useState("");
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

  const onChangeHandler = (e) => {
    setSearchedEvent(e.target.value.toLowerCase());
  };
  const searchMatches = data.filter(function (d) {
    return d.titulo.toLowerCase().includes(searchedEvent);
  });
  console.log('searchedEvent',searchedEvent)
  console.log('searchMatches',searchMatches)
  return (
    <div className="mb-[72px]">
      <Title1 title={"Eventos"} />
      <InputSearch
        searchedEvent={searchedEvent}
        onChangeHandler={onChangeHandler}
      />
      {/* <Filtro/> */}
      {searchMatches.length > 0 ? (
        <ListEvents data={searchMatches} />
      ) : (
        <p>No se encontraron eventos</p>
      )}
    </div>
  );
}

export default index;
