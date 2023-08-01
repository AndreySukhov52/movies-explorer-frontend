import PortfolioItem from '../PortfolioItem/PortfolioItem'
import './PortfolioList.css'

const projects = [
  {
    title: 'Статичный сайт',
    link: 'https://andreysukhov52.github.io/how-to-learn/',
  },
  {
    title: 'Адаптивный сайт',
    link: 'https://andreysukhov52.github.io/russian-travel/',
  },
  {
    title: 'Одностраничное приложение',
    link: 'https://andreysukhov52.github.io/react-mesto-auth/',
  },
]

const PortfolioList = () => {
  return (
    <ul className="portfolio__list">
      {projects.map((project) => (
        <PortfolioItem key={project.title} projectData={project} />
      ))}
    </ul>
  )
}

export default PortfolioList
