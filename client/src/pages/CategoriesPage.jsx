import BackPage from "../components/BackPage"
import LinkIconVertical from "../components/LinkIconVertical"

function CategoriesPage() {
  const eventTypes = [
    {
        type: 'Music',
        icon: '/eventType/IconMusic.svg'
    },
    {
      type: 'Arte',
      icon: '/eventType/IconArte.svg'
    },
    {
      type: 'Educación',
      icon: '/eventType/IconEducation.svg'
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
        type: 'Cultural',
        icon: '/eventType/IconCultural.svg'
    },
    {
        type: 'Tecnología',
        icon: '/eventType/IconTech.svg'
    },
    {
      type: 'Conciertos',
      icon: '/eventType/IconConcerts.svg'
    },
    {
        type: 'Ecológico',
        icon: '/eventType/IconEcological.svg'
    },
    {
        type: 'Teatro',
        icon: '/eventType/IconTheater.svg'
    },
    {
      type: 'Deporte',
      icon: '/eventType/IconSport.svg'
  },
  {
      type: 'Stand-up',
      icon: '/eventType/IconStandUp.svg'
  },
  {
      type: 'Infantiles',
      icon: '/eventType/IconChildren.svg'
  },
  {
      type: 'Fiestas',
      icon: '/eventType/IconParties.svg'
  },
  {
      type: 'Salud',
      icon: '/eventType/IconHealth.svg'
  },
  {
      type: 'Ciencia',
      icon: '/eventType/IconScience.svg'
  }
]
  return (
    <div className="m-4">
      <BackPage WhereBack={"Categorias"}/>
      <main className="my-4">
        <ul className="grid grid-cols-3 gap-2">
          { eventTypes.map((eType, index) => {
                return <LinkIconVertical key={index} icon={eType.icon} type={eType.type} route={eType.route} />
              })
            }
        </ul>
      </main>
    </div>
  )
}

export default CategoriesPage