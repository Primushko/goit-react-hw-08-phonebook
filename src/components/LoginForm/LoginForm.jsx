import { Notify } from 'notiflix';
import { Form, Input, Label, Button, LoggedLink } from './LoginForm.module';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} З поверненням!`);
      })
      .catch(() => {
        Notify.failure('Неправильний логін або пароль');
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._%+\-'`]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          title="Email може містити літери, цифри, апостроф та обов'язково супроводжуватися суфіксом домену '@'. Наприклад, Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          // required={false}
          // pattern={null}
          // title={null}
          placeholder="Введіть email ..."
        />
      </Label>
      <Label>
        Пароль
        <Input
          type="password"
          name="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="Пароль повинен містити принаймні одну цифру, одну велику та малу літеру, а також принаймні 6 або більше символів. Наприклад, TgeV23592, 3Greioct."
          required
          // required={false}
          // pattern={null}
          // title={null}
          placeholder="Введіть пароль ..."
        />
      </Label>
      <Button type="submit">Увійдіть</Button>
      <LoggedLink to="/register">
        Не маєте облікового запису? Зареєструватися
      </LoggedLink>
    </Form>
  );
};

export default LoginForm;
