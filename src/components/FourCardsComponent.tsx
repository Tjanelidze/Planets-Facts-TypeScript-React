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
  gap: 3rem;

  @media (max-height: 59.4em) {
    margin-top: 6rem;
  }

  @media (max-height: 53em) {
    margin-top: 3.5rem;
  }

  @media (max-height: 46em) {
    margin-top: 2.8rem;
  }
  @media (max-height: 43em) {
    margin-top: 2.5rem;
  }

  @media (max-width: 43em) {
    grid-template-columns: 1fr;
  }
`;

const InformationCard = styled.div`
  border: 1px solid #ffffff22;
  padding: 2rem 2.3rem 2.7rem;

  @media (max-width: 55em) {
    padding: 1.2rem 1.5rem 1.2rem;
  }

  @media (max-height: 46em) {
    padding: 1.3rem 1.3rem 1.7rem;
  }

  @media (max-height: 43em) {
    padding: 1rem 1.3rem 1.7rem;
  }

  @media (max-width: 43em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SecondaryHeading = styled.h2`
  color: #ffffff81;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 78em) {
    font-size: 0.9rem;
    line-height: 15px;
  }

  @media (max-width: 55em) {
    font-size: 0.8rem;
    line-height: 12px;
  }

  @media (max-height: 46em) {
    font-size: 1rem;
    line-height: 18px;
  }
  @media (max-height: 43em) {
    font-size: 0.9rem;
    line-height: 15px;
  }

  @media (max-width: 43em) {
    font-size: 0.8rem;
  }
`;

const StyledParagraphs = styled.p`
  color: #fff;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: -1.5px;
  text-transform: uppercase;

  @media (max-width: 78em) {
    font-size: 3.2rem;
  }

  @media (max-width: 55em) {
    font-size: 2.2rem;
  }

  @media (max-height: 46em) {
    font-size: 3.2rem;
  }
  @media (max-height: 43em) {
    font-size: 2.5rem;
  }

  @media (max-width: 43em) {
    font-size: 2rem;
  }
`;
