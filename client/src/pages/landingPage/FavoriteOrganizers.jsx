import Card from "../../components/Card"

function FavoriteOrganizers() {
  return (
    <section className='m-4 '>
        <h2 className='text-dark'>Organizadores favoritos</h2>
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

export default FavoriteOrganizers