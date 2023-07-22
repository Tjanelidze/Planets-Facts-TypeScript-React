import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string | undefined;
  active: string;
};

interface PROPS {
  color: string | undefined;
  activeOverview: string;
  activeInternal: string;
  activeGeology: string;
  handleOverviewClick: () => void;
  handleInternalClick: () => void;
  handleGeologyClick: () => void;
}

export default function MobileConceptButtons({
  color,
  activeOverview,
  activeInternal,
  activeGeology,
  handleOverviewClick,
  handleInternalClick,
  handleGeologyClick,
}: PROPS) {
  return (
    <ConceptButtons>
      <StyledButton
        color={color}
        active={activeOverview}
        onClick={handleOverviewClick}
      >
        OVERVIEW
      </StyledButton>
      <StyledButton
        color={color}
        active={activeInternal}
        onClick={handleInternalClick}
      >
        Structure
      </StyledButton>
      <StyledButton
        color={color}
        active={activeGeology}
        onClick={handleGeologyClick}
      >
        Surface
      </StyledButton>
    </ConceptButtons>
  );
}

const ConceptButtons = styled.div`
  display: none;
  visibility: hidden;
  border-bottom: 1px solid #ffffff22;
  width: 100%;

  @media (max-width: 38em) {
    display: flex;
    justify-content: space-around;
    visibility: visible;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  background-color: #11112b;
  color: ${(props) => (props.active === 'true' ? '#fff ' : '#cccccc96')};
  border-bottom: 4px solid
    ${(props) => (props.active === 'true' ? props.color : '#11112b')};
  font-family: 'League Spartan', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2.571px;
  text-transform: uppercase;
  height: 4.5rem;
  padding: 0 0.5rem;

  & span:first-child {
    color: #d8d8d8;
  }

  &:hover {
    background-color: #38384f;
    cursor: pointer;
  }
`;
