import './Auth.css';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../utils/useFormValidation';


function Register({ onRegister }) {
  const { values, errors, isValid, handleChange, reset } = useFormValidation({});

  const handleSubmit = event => {
    event.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password
    });
  };

  return (
    <section className="auth">
      <Link to="/" className="auth__logo" alt="Логотип сайта"></Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__inputs" onSubmit={handleSubmit} isValid={isValid} reset={reset}>
        <fieldset className="auth__items">
          <label className="auth__item">
            <p className="auth__item-label">Имя</p>
            <input
              className="auth__input"
              id='name'
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
            <span className={`auth__error ${errors.name ? 'auth__error_visible' : ''}`}>{errors.name}</span>
          </label>
          <label className="auth__item">
            <p className="auth__item-label">E-mail</p>
            <input
              className={'auth__input'}
              id='email'
              name="email"
              type="email"
              placeholder="E-mail"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span className={`auth__error ${errors.email ? 'auth__error_visible' : ''}`}>{errors.email}</span>
          </label>
          <label className="auth__item">
            <p className="auth__item-label">Пароль</p>
            <input
              className={'auth__input auth__input_error'}
              name="password"
              type="password"
              minLength="2"
              maxLength="30"
              placeholder="Пароль"
              value={values.password || ''}
              onChange={handleChange}
              required
            />
            <span className={`auth__error ${errors.password ? 'auth__error_visible' : ''}`}>{errors.password}Что-то пошло не так..</span>
          </label>
        </fieldset>
        <button className='auth__button' type="submit">Зарегистрироваться</button>
      </form>
      <p className="auth__text">Уже зарегистрированы?
        <Link to="/signin" className='auth__link'>Войти</Link></p>

    </section>
  );
};

export default Register;

