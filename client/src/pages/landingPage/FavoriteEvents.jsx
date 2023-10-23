import Card from '../../components/Card'
import Title2 from '../../components/Title2'

function FavoriteEvents() {
  return (
    <section className='m-4 '>
        <Title2 title={"Eventos segun tu preferencia"}/>
        <div className='overflow-x-auto'>
          <div className='flex space-x-2'>
              <Card />
              <Card />
              <Card />
          </div>
        </div>
    </section>
  )
}

export default FavoriteEvents