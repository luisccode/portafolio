import React from 'react'
import { Title, Paragraph } from '../typography'
import Button from '../button'
import {
  PresentationContainer,
  ButtonContainer,
  SignboardComponent,
} from './styles'

const Presentation = () => {
  return (
    <PresentationContainer>
      <SignboardComponent>
        <Paragraph lineHeight="1" fontSize="1.65rem">
          Hello, I am
        </Paragraph>
      </SignboardComponent>

      <Title
        as="h1"
        margin="2rem 0 0"
        fontSize={{ small: '4rem', medium: '4.5rem', large: '5.5rem' }}
        fontWeight="700"
      >
        Luis A. Cortes
      </Title>
      <Title
        as="h2"
        margin="1rem 0 1.5rem 0"
        fontSize={{ small: '1.65rem', medium: '1.65rem', large: '1.65rem' }}
      >
        Software Engineer
      </Title>

      <ButtonContainer>
        <Button
          as="a"
          href="/Luis Cortes CV.pdf"
          target="_blank"
          margin="2rem 0"
        >
          Download CV
        </Button>
        <Button
          as="a"
          border="1px solid #fff"
          bgcolor="tranparent"
          href="#portfolio"
          margin="2rem 0"
        >
          My Work
        </Button>
      </ButtonContainer>
    </PresentationContainer>
  )
}
export default Presentation
