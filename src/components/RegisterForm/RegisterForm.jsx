import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Form, Input, Label, Button, LoggedLink } from './RegisterPage.module';
import { Notify } from 'notiflix';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} Ласкаво просимо!`);
      })
      .catch(() => {
        Notify.failure('Вибачте, щось не так');
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад: Adrian, Jacob Mercer, Oleh Prymushko"
          placeholder="Введіть ім'я ..."
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email може містити літери, цифри, апостроф та обов'язково супроводжуватися суфіксом домену '@'. Наприклад: Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          placeholder="Введіть email ..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Пароль повинен містити принаймні одну цифру, одну велику та малу літеру, а також принаймні 6 або більше символів. Наприклад, TgeV23592, 3Greioct."
          placeholder="Введіть пароль ..."
          required
        />
      </Label>
      <Button type="submit">Реєстрація</Button>
      <LoggedLink to="/login">Зареєстровані? Увійдіть</LoggedLink>
    </Form>
  );
};

export default RegisterForm;
