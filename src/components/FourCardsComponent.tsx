import React from 'react';
import { planetDataInterface } from '../interface/planetDataInterface';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function FourCardsComponent({ planets }: planetDataInterface) {
  const { planetName } = useParams();
  const filteredPlanet = planets.find((planet) => planet.name === planetName);
  return (
    <aside>
      <Container>
        <InformationCard>
          <SecondaryHeading>ROTATION TIME</SecondaryHeading>
          <StyledParagraphs>{filteredPlanet?.rotation}</StyledParagraphs>
        </InformationCard>
        <InformationCard>
          <SecondaryHeading>REVOLUTION TIME</SecondaryHeading>
          <StyledParagraphs>{filteredPlanet?.revolution}</StyledParagraphs>
        </InformationCard>
        <InformationCard>
          <SecondaryHeading>RADIUS</SecondaryHeading>
          <StyledParagraphs>{filteredPlanet?.radius}</StyledParagraphs>
        </InformationCard>
        <InformationCard>
          <SecondaryHeading>AVERAGE TEMP.</SecondaryHeading>
          <StyledParagraphs>{filteredPlanet?.temperature}</StyledParagraphs>
        </InformationCard>
      </Container>
    </aside>
  );
}

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 8.7rem;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
`;

const InformationCard = styled.div`
  border: 1px solid #ffffff22;
  padding: 2rem 2.3rem 2.7rem;
`;

const SecondaryHeading = styled.h2`
  color: #ffffff81;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledParagraphs = styled.p`
  color: #fff;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: -1.5px;
  text-transform: uppercase;
`;
