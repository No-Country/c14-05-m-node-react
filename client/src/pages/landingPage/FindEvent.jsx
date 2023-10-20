import LinkIconVertical from "../../components/LinkIconVertical"

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
          rute: 'mas-eventos'
        },
    ]
  return (
    <section className='m-4'>
        <h2 className='text-dark'>Encontrá tu evento favorito</h2>
        <div className='overflow-x-auto'>
          <ul className="flex my-2 space-x-2">
            { eventTypes.map((eType, index) => {
                return <LinkIconVertical key={index} icon={eType.icon} type={eType.type}/>
              })
            }
          </ul>
        </div>
    </section>

  )
}

export default FindEvent