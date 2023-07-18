import { planetDataInterface } from '../interface/planetDataInterface';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

export default function ArticleComponents({ planets }: planetDataInterface) {
  const { planetName } = useParams();
  const filteredPlanet = planets.find((planet) => planet.name === planetName);
  console.log(filteredPlanet);
  console.log(planetName, 'hi');
  return (
    <article>
      <Container>
        <PlanetImg $planetImg={filteredPlanet?.images.planet}></PlanetImg>
        <ArticleConcept>
          <h1>{filteredPlanet?.name}</h1>
        </ArticleConcept>
      </Container>
    </article>
  );
}
const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  margin-top: 12.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PlanetImg = styled.div<{ $planetImg?: string }>`
  background: url(${(props) => props.$planetImg});
  background-repeat: no-repeat;
`;

const ArticleConcept = styled.div`
  align-self: center;
`;
