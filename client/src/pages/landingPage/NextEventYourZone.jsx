import Card from "../../components/Card"

function NextEventYourZone() {
  return (
    <section className='m-4 '>
        <h2 className='text-dark'>Próximos eventos en tu zona</h2>
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

export default NextEventYourZone