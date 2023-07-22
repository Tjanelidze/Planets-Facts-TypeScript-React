import React from 'react';
import styled from 'styled-components';
import { planetDataInterface } from '../interface/planetDataInterface';
import { Link } from 'react-router-dom';

export default function HomeComponent({ planets }: planetDataInterface) {
  return (
    <article>
      <Container>
        {planets.map((planet, indx) => {
          return (
            <PlanetCards to={`/${planet.name}`} key={indx}>
              <img src={planet.images.planet} alt="" />
              <h2>{planet.name}</h2>
            </PlanetCards>
          );
        })}
      </Container>
    </article>
  );
}

const Container = styled.div`
  max-width: 130rem;
  margin: 10rem auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 25fr 25fr 25fr 25fr;
  row-gap: 10rem;
  column-gap: 5rem;
  text-align: center;

  img {
    width: 80%;
  }

  h2 {
    margin-top: 3rem;
    font-size: 2rem;
    color: #fff;
  }

  @media (max-width: 55em) {
    grid-template-columns: 1fr;

    img {
      width: 25%;
    }
  }
`;

const PlanetCards = styled(Link)`
  padding: 2rem;
  cursor: pointer;
  text-decoration: none;
`;
