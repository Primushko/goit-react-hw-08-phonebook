import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  margin-right: 114px;

  color: #f1f42e;
  > span {
    color: #0c1bed;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #0c1bed;
    > span {
      color: #f1f42e;
    }
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 22px 28px;

  color: #000000;
  background: rgba(42, 140, 252, 0.5);
  border: 1px solid #f3fa39;
  border-radius: 18px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    font-weight: 600;

    color: #ffffff;
    background-color: #0c1bed;
  }
`;
