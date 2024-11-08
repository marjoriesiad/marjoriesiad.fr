import React from 'react'
import Card from '../../Components/Card/Card'

const Projects = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-3 md:grid-cols-3 md:p-6 bg-background pt-5 md:pb-20 pb-20">
      <Card title="Site personnel" description="Vous êtes dessus ! Un site fait from scratch qui me permet de m'exercer et de tester/casser plein de choses ! En évolution constante, il y aura régulièrement de nouvelles choses à découvrir" stack="ReactJS - TailwindCSS - Express" />
      
    </div>
  )
}

export default Projects
