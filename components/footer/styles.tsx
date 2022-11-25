import styled from 'styled-components'

interface FooterProps {
  defaultMargin: boolean
}

export const FooterComponent = styled.footer<FooterProps>`
  margin: ${(props) => (props.defaultMargin ? `9.22rem 0 3rem 0` : `3rem 0`)};
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    margin: 3.6rem 0;
  }
`
