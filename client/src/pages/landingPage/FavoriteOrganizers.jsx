import Card from "../../components/Card"
import Title2 from "../../components/Title2"

function FavoriteOrganizers({data}) {
  return (
    <section className='m-4 '>
        <Title2 title={"Organizadores favoritos"} />
        <div className='overflow-x-auto'>
          <div className='flex space-x-2'>
            {data.map((d,index)=> {
              return <Card img={d.image} title={d.titulo} price={d.costo} place={d.ubicacion} date={d.fecha} hour={d.hora} key={index}/>
            })}
          </div>
        </div>
    </section>
  )
}

export default FavoriteOrganizers