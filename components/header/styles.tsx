import styled from 'styled-components'
import Link from 'next/link'
import Container from 'components/container'

// header components styles
export const ContainerComponent = styled(Container)`
  height: 7rem;
  display: flex;
  align-items: center;
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    height: 8.5rem;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
  @media (min-width: ${(props) => props.theme.size.mobile}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    font-size: 4.5rem;
  }
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    margin-top: 2rem;
  }
  span {
    color: ${(props) => props.theme.colors.primary};
  }
`

// navigation styles
export const NavComponent = styled.nav`
  z-index: 2;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  background-color: ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translate(100%, 0);
  transition: all 0.5s ease-out;
  &.show {
    visibility: visible;
    transform: translate(0, 0);
  }
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    transform: translate(0, 0);
    height: 100%;
    width: auto;
    position: static;
    visibility: visible;
    flex-direction: row;
    background-color: transparent;
  }
`

export const LinkComponent = styled(Link)`
  margin: 2rem 0 0;
  font-size: 2.5rem;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: ${(props) => props.theme.size.laptopS}) {
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }
    &.active {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }

    & > span {
      margin-bottom: 2rem;
    }
    font-size: 1.35rem;
    margin: 0 1rem 0 0;
    height: 100%;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`
