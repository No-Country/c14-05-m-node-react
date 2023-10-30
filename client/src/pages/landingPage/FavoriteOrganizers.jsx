import CardVertical2 from "../../components/CardVertical2"
import Title2 from "../../components/Title2"

function FavoriteOrganizers({data}) {
  return (
    <section className='m-4 '>
        <Title2 title={"Organizadores favoritos"} />
        <div className='overflow-x-auto'>
          <div className='flex space-x-2'>
            {data.map((d,index)=> {
              return <CardVertical2 img={d.image} title={d.titulo} userId={d.userId} place={d.ubicacion} date={d.fecha} hour={d.hora} key={index}/>
            })}
          </div>
        </div>
    </section>
  )
}

export default FavoriteOrganizers