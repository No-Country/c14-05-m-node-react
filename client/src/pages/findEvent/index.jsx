import InputSearch from "../../components/InputSearch"
import Title1 from "../../components/Title1"
import ListEvents from "./ListEvents"



function index() {
  return (
    <>
      <Title1 title={"Eventos"}/>
      <InputSearch />
      {/* <Filtro/> */}
      <ListEvents />

    </>
  )
}

export default index