import styled from 'styled-components';
import { planetDataInterface } from '../interface/planetDataInterface';
import { Link, Outlet } from 'react-router-dom';
import BurgetMenu from './BurgetMenu';

export default function HeaderComponent({
  planets,
  open,
  setOpen,
}: planetDataInterface) {
  return (
    <>
      <Header open={open}>
        <MainTitle to="/">The Planets</MainTitle>
        <BurgetMenu open={open} setOpen={setOpen} />
        <MainNav>
          <NavList open={open}>
            {planets.map((planet, indx) => {
              return (
                <li key={indx}>
                  <StyledLink
                    to={`/${planet.name}`}
                    $color={planet.color}
                    onClick={() => setOpen(!open)}
                  >
                    {planet.name}
                  </StyledLink>
                </li>
              );
            })}
          </NavList>
        </MainNav>
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  border-bottom: 1px solid #ffffff22;
  padding: 0 4.1rem 0 3.2rem;
  height: 8.5rem;

  @media (max-width: 55em) {
    flex-direction: column;
    padding: 1.6rem 3.2rem 0 3.2rem;
    gap: 0.5rem;
    height: 13rem;
  }

  @media (max-width: 38em) {
    flex-direction: row;
  }

  @media (max-height: 50em) {
    height: 10.5rem;
  }

  @media (max-width: 38em) {
    height: 6.5rem;
    padding: 0.6rem 2.4rem;
    position: ${({ open }) => (open ? 'fixed' : 'relative')};
    top: ${({ open }) => (open ? '0' : '')};
    background-color: #11112b;
    width: 100%;
    z-index: 1;
  }
`;

const MainTitle = styled(Link)`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  text-decoration: none;
  &:link,
  &:visited {
    color: #fff;
  }

  &:hover,
  &:active {
    color: #fff;
  }
`;

const MainNav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 3.3rem;
  list-style: none;
  height: 100%;
  @media (max-width: 38em) {
  }

  @media (max-width: 38em) {
    flex-flow: column nowrap;
    background-color: #11112b;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 64.5px;

    right: 0;
    height: 100vh;
    width: 100%;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
`;

const StyledLink = styled(Link)<{ $color?: string }>`
  color: #ffffffbe;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'League Spartan', sans-serif;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 5px;
  position: relative;
  &:link,
  &:visited {
    color: #ffffffbe;
  }

  &:hover,
  &:active {
    color: #fff;
  }

  &::after {
    position: absolute;
    content: '';
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background: ${(props) => props.$color};
    transition: all 0.3s ease-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 55em) {
    font-size: 11px;
  }

  @media (max-width: 38em) {
    font-size: 1.5rem;
    color: #fff !important;
    position: relative;
    border-bottom: 1px solid #ffffff22;
    padding-left: 3rem;
    padding-bottom: 2rem;
    &::after {
      content: '';
      background: url('assets/icon-chevron.svg');
      background-repeat: no-repeat;
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: 100%;
      color: #ffffff3e;
    }

    &::before {
      content: '';
      background-color: ${(props) => props.$color};
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      left: 0;
    }
  }
`;
