import styled from 'styled-components'
import mixins from 'utils/mixins'
import Link from 'next/link'

// maincomponent styles
export const MainContainer = styled.main`
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    height: calc(100vh - 8.5rem);
  }
`
export const ArrowContainer = styled(Link)`
  margin: 0 auto;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 10;
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60vh;
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    right: 0;
    width: 60%;
    height: calc(100vh - 8.5rem);
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

// presentation styles
export const PresentationContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 40rem;
  margin-top: 10rem;
`

export const ButtonContainer = styled.div`
  ${mixins.flexEvenly}
  @media(min-width: ${(props) => props.theme.size.tablet}) {
    ${mixins.flexBetween}
  }
`

export const SignboardComponent = styled.div`
  position: relative;
  width: 15rem;
  height: 4.9rem;
  background: #ff4900;
  text-align: center;
  ${mixins.flexCenter}
  &:after {
    content: '';
    width: 2rem;
    height: 2rem;
    background: #ff4900;
    border-top: 1px solid #ff4900;
    border-right: 1px solid #ff4900;
    border-bottom: 1px solid #ff4900;
    border-left: 1px solid #ff4900;
    position: absolute;
    top: calc(4.9rem - 1rem);
    left: calc((15rem / 2) - 1rem);
    transform: rotate(45deg);
  }
`
