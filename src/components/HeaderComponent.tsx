import styled from 'styled-components';
import { planetDataInterface } from '../interface/planetDataInterface';

export default function HeaderComponent({ planets }: planetDataInterface) {
  return (
    <Header>
      <MainTitle>The Planets</MainTitle>
      <Mainnav>
        <NavList>
          {planets.map((planet, indx) => {
            return (
              <li key={indx}>
                <NavLink as="a" href="#" $color={planet.color}>
                  {planet.name}
                </NavLink>
              </li>
            );
          })}
        </NavList>
      </Mainnav>
    </Header>
  );
}

const MainTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  border-bottom: 1px solid #ffffff22;
  padding: 0 4.1rem 0 3.2rem;
  height: 8.5rem;
`;

const Mainnav = styled.nav`
  height: 100%;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.3rem;
  list-style: none;
  height: 100%;
`;

const NavLink = styled.a<{ $color?: string }>`
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
`;
