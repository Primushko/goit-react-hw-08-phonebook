import { LoggedItem, LoggedLink, LoggedList } from './Logged.module';

const LoggedNav = () => {
  return (
    <LoggedList>
      <LoggedItem>
        <LoggedLink to="login">Увійдіть</LoggedLink>
      </LoggedItem>
      <LoggedItem>
        <LoggedLink to="register">Реєстрація</LoggedLink>
      </LoggedItem>
    </LoggedList>
  );
};

export default LoggedNav;
