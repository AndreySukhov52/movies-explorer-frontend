import SectionTitle from '../SectionTitle/SectionTitle'
import './AboutMe.css'
import studentPhoto from '../../../images/avatar.jpg'

const AboutMe = () => {
  return (
    <section className="about-me container" id="student">
      <SectionTitle>Студент</SectionTitle>
      <div className="about-me__info">
        <div className="about-me__bio">
          <h3 className="about-me__name">Андрей</h3>
          <p className="about-me__short">Фронтенд-разработчик.</p>
          <p className="about-me__description">
            Родился в&nbsp;городе Угличе Ярославской области, живу в&nbsp;Москве, закончил факультет приборостроения и информатики в МГУПИ.
            Люблю ходить в тренажерный зал, компьютеры и документальные фильмы. Год назад поступил в&nbsp;&laquo;Яндекс.Практикум&raquo; на&nbsp;курс &laquo;Веб-разработчик&raquo;.
          </p>
          <a
            href="https://github.com/AndreySukhov52"
            className="about-me__github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="about-me__photo-wrapper">
          <img
            className="about-me__photo"
            src={studentPhoto}
            alt="Фотограция студента"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
