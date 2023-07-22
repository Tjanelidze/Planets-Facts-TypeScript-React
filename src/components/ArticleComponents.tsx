import { planetDataInterface } from '../interface/planetDataInterface';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import FourCardsComponent from './FourCardsComponent';
import { useEffect, useState } from 'react';

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  $color: string | undefined;
  active: string;
};

export default function ArticleComponents({
  planets,
  open,
  setOpen,
}: planetDataInterface) {
  const { planetName } = useParams();
  const filteredPlanet = planets.find((planet) => planet.name === planetName);

  const [planetImg, setPlanetImg] = useState('planet');
  const [planetDesc, setPlanetDesc] = useState<string | undefined>();
  const [planetLink, setPlanetLink] = useState<string | undefined>();
  const [activeButton, setActiveButton] = useState<string>('overview');
  const [geology, setGeology] = useState('');

  const handleOverviewClick = () => {
    setPlanetImg('planet');
    setGeology('');
    setPlanetDesc(filteredPlanet?.overview.content);
    setPlanetLink(filteredPlanet?.overview.source);
    setActiveButton('overview');
  };

  const handleInternalClick = () => {
    setPlanetImg('internal');
    setGeology('');
    setPlanetDesc('structure');
    setPlanetDesc(filteredPlanet?.structure.content);
    setPlanetLink(filteredPlanet?.structure.source);
    setActiveButton('internal');
  };

  const handleGeologyClick = () => {
    setGeology('geology');
    setPlanetDesc('geology');
    setPlanetDesc(filteredPlanet?.geology.content);
    setPlanetLink(filteredPlanet?.geology.source);
    setActiveButton('geology');
  };

  useEffect(() => {
    setPlanetImg('planet');
    setGeology('');
    setPlanetDesc(filteredPlanet?.overview.content);
    setPlanetLink(filteredPlanet?.overview.source);
    setActiveButton('overview');
  }, [planetName]);

  return (
    <StyledArticle open={open}>
      <Container>
        <PlanetImg $geology={filteredPlanet?.images[geology && geology]}>
          <img
            src={filteredPlanet?.images[planetImg]}
            alt={`Illustartion of ${filteredPlanet?.name}`}
          />
        </PlanetImg>
        <ArticleConcept>
          <DescriptionSection>
            <PlanetHeading>{filteredPlanet?.name}</PlanetHeading>
            <PlanetDescription>{planetDesc}</PlanetDescription>
            <PlanetSource>
              <p>Source </p>:
              <StyledLink href={`${planetLink}`} target="_blank">
                Wikipedia
              </StyledLink>
              <img src="/assets/icon-source.svg" alt="" />
            </PlanetSource>
          </DescriptionSection>
          <ConceptButtons>
            <StyledButton
              onClick={handleOverviewClick}
              $color={filteredPlanet?.color}
              active={activeButton === 'overview' ? 'true' : 'false'}
            >
              <span>01</span>
              <span> OVERVIEW</span>
            </StyledButton>
            <StyledButton
              onClick={handleInternalClick}
              $color={filteredPlanet?.color}
              active={activeButton === 'internal' ? 'true' : 'false'}
            >
              <span>02</span>
              <span> Internal Structure</span>
            </StyledButton>
            <StyledButton
              onClick={handleGeologyClick}
              $color={filteredPlanet?.color}
              active={activeButton === 'geology' ? 'true' : 'false'}
            >
              <span>03</span>
              <span>Surface Geology</span>
            </StyledButton>
          </ConceptButtons>
        </ArticleConcept>
      </Container>
      <FourCardsComponent open={open} setOpen={setOpen} planets={planets} />
    </StyledArticle>
  );
}

const StyledArticle = styled.article<{ open: boolean }>`
  padding: 10rem 0 5rem;

  @media (max-height: 59.4em) {
    padding: 3rem 0 5rem;
  }

  @media (max-height: 53em) {
    padding: 2rem 0 3rem;
  }

  @media (max-height: 50em) {
    padding: 0.5rem 0 0.5rem;
  }

  @media (max-width: 38em) {
    margin-top: ${({ open }) => (open ? '6.5rem' : '0')};
  }
`;
const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 65fr 35fr;
  gap: 3.5rem;

  @media (max-width: 55em) {
    grid-template-columns: 1fr;
  }
`;

const PlanetImg = styled.div<{ $geology: string }>`
  align-self: center;
  justify-self: center;
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    background-image: url(${(props) => props.$geology});
    background-repeat: no-repeat;
    z-index: 999;
    background-size: 90%;
    width: 150px;
    height: 165px;
    content: '';
    top: 66%;
    left: 50%;
    transform: translateX(-44%);
  }

  & img {
    width: 95%;
  }

  @media (max-width: 55em) {
    height: 309px;
  }

  @media (max-height: 59.4em) {
    & img {
      width: 65%;
    }
  }

  @media (max-height: 53em) {
    & img {
      width: 55%;
    }
  }

  @media (max-height: 50em) {
    & img {
      width: 45%;
    }
  }
`;

const ArticleConcept = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-self: end;

  @media (max-width: 55em) {
    display: grid;
    grid-template-columns: 50fr 50fr;
    gap: 69px;
  }

  @media (max-width: 78em) {
  }
`;

const DescriptionSection = styled.div`
  @media (max-width: 55em) {
    display: flex;
    flex-direction: column;
  }
`;

const PlanetHeading = styled.h1`
  color: #fff;
  font-size: 8rem;
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 78em) {
    font-size: 6.5rem;
  }

  @media (max-width: 55em) {
    font-size: 4.8rem;
  }

  @media (max-height: 50em) {
    font-size: 6.5rem;
  }
`;

const PlanetDescription = styled.p`
  color: #ffffffcc;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.5rem;
  margin: 2.3rem 0;

  @media (max-width: 78em) {
    font-size: 1.3rem;
  }

  @media (max-width: 55em) {
    font-size: 1.1rem;
  }

  @media (max-height: 50em) {
    font-size: 1.3rem;
  }
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
  line-height: 25px;
`;

const StyledLink = styled.a`
  color: #ffffff9d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const ConceptButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.9rem;
  @media (max-height: 78em) {
    margin-top: 0rem;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  background-color: ${(props) =>
    props.active === 'true' ? props.$color : '#11112b'};
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

  @media (max-width: 78em) {
    font-size: 1.1rem;
  }

  @media (max-width: 55em) {
    font-size: 1rem;
    padding: 0.8rem 2.2rem;
  }

  @media (max-height: 50em) {
    font-size: 1.1rem;
    padding: 0.8rem 2.2rem;
  }
`;
