import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

import avatar from '../../../images/Avatar.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='title about-me__title'>Студент</h2>
      <hr className='about-me__line' ></hr>
      <div className='about-me__contain'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Андрей</h3>
          <p className='about-me__status'>Фронтенд-разработчик, 32 года</p>
          <p className='about-me__description'>
            Родился в&nbsp;городе Угличе Ярославской области, живу в&nbsp;Москве, закончил факультет приборостроения и информатики в МГУПИ.
            Люблю ходить в тренажерный зал, компьютеры и документальные фильмы. Год назад поступил в&nbsp;&laquo;Яндекс.Практикум&raquo; на&nbsp;курс &laquo;Веб-разработчик&raquo;.
          </p>
          <a
            className='about-me__link'
            target='_blank'
            href='https://github.com/AndreySukhov52'
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className='avatar' alt='Фотография' src={avatar} />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
