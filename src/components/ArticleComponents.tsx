import { planetDataInterface } from '../interface/planetDataInterface';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import FourCardsComponent from './FourCardsComponent';

export default function ArticleComponents({ planets }: planetDataInterface) {
  const { planetName } = useParams();
  const filteredPlanet = planets.find((planet) => planet.name === planetName);
  return (
    <article>
      <Container>
        <PlanetImg>
          <img
            src={`${filteredPlanet?.images.planet}`}
            alt={`Illustartion of ${filteredPlanet?.name}`}
          />
        </PlanetImg>
        <ArticleConcept>
          <PlanetHeading>{filteredPlanet?.name}</PlanetHeading>
          <PlanetDescription>
            {filteredPlanet?.overview.content}
          </PlanetDescription>
          <PlanetSource>
            <p>Source </p>:<StyledLink href="#">Wikipedia</StyledLink>
            <img src="/assets/icon-source.svg" alt="" />
          </PlanetSource>
          <ConceptButtons>
            <StyledButton $color={filteredPlanet?.color}>
              <span>01</span>
              <span> OVERVIEW</span>
            </StyledButton>
            <StyledButton $color={filteredPlanet?.color}>
              <span>02</span>
              <span> Internal Structure</span>
            </StyledButton>
            <StyledButton $color={filteredPlanet?.color}>
              <span>03</span>
              <span>Surface Geology</span>
            </StyledButton>
          </ConceptButtons>
        </ArticleConcept>
      </Container>
      <FourCardsComponent planets={planets} />
    </article>
  );
}
const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  margin-top: 12.6rem;
  display: grid;
  grid-template-columns: 70fr 30fr;
  gap: 5rem;
`;

const PlanetImg = styled.div`
  align-self: center;
  justify-self: center;
`;

const ArticleConcept = styled.div`
  justify-self: end;
`;

const PlanetHeading = styled.h1`
  color: #fff;
  font-size: 8rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const PlanetDescription = styled.p`
  color: #ffffffcc;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin: 2.3rem 0;
`;

const PlanetSource = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff81;
  font-family: 'League Spartan', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
`;

const StyledLink = styled.a`
  color: #ffffff9d;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  /* margin-left: 0.3rem; */
`;

const ConceptButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.9rem;
`;

const StyledButton = styled.button<{ $color?: string }>`
  border: none;
  background-color: #11112b;
  color: #fff;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2.571px;
  text-transform: uppercase;
  display: flex;
  gap: 2.8rem;
  border: 1px solid #ffffff22;
  padding: 1.1rem 3.2rem;

  & span:first-child {
    color: #d8d8d8;
  }

  &:hover {
    background-color: #38384f;
    cursor: pointer;
  }

  &:active {
    background-color: ${(props) => props.$color};
    cursor: pointer;
  }
`;
