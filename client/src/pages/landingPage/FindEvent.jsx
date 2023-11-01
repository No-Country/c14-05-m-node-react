import LinkIconVertical from "../../components/LinkIconVertical"
import Title2 from "../../components/Title2"

function FindEvent() {
    const eventTypes = [
        {
            type: 'Music',
            icon: '/eventType/IconMusic.svg'
        },
        {
            type: 'Cultural',
            icon: '/eventType/IconCultural.svg'
        },
        {
            type: 'Bares',
            icon: '/eventType/IconPubs.svg'
        },
        {
            type: 'Comida',
            icon: '/eventType/IconFoods.svg'
        },
        {
            type: 'Tecnología',
            icon: '/eventType/IconTech.svg'
        },
        {
            type: 'Arte',
            icon: '/eventType/IconArte.svg'
        },
        {
            type: 'Infantiles',
            icon: '/eventType/IconChildren.svg'
        },
        {
            type: 'Teatro',
            icon: '/eventType/IconTheater.svg'
        },
        {
          type: 'Ver más',
          icon: '/eventType/IconAddEvent.svg',
          route: '../categorias'
        },
    ]
  return (
    <section className='m-4'>
        <Title2 title={"¡Encontrá tu evento favorito!"}/>
        <div className='overflow-x-auto'>
          <ul className="flex my-2 space-x-2">
            { eventTypes.map((eType, index) => {
                return <LinkIconVertical key={index} icon={eType.icon} type={eType.type} route={eType.route} />
              })
            }
          </ul>
        </div>
    </section>

  )
}

export default FindEvent