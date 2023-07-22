import styled from 'styled-components';

interface PROPS {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function BurgetMenu({ open, setOpen }: PROPS) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
}

const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 23px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 99;
  display: none;

  @media (max-width: 38em) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.29rem;
    background-color: ${({ open }) => (open ? '#fff' : '#fff')};

    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? '0' : '1')};
      height: 0.3rem;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
