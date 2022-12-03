import { MainContainer, ImageContainer, ArrowContainer } from './styles'
import Presentation from './presentation'
import { ArrowCircle } from 'components/icons'
import Image from 'next/image'
import profileImage from '/public/images/profileImage.png'

const Main = () => {
  return (
    <MainContainer id="home">
      <div style={{ position: 'relative' }}>
        <ImageContainer>
          <Image src={profileImage} alt="Luis Cortes image" />
        </ImageContainer>
      </div>

      <Presentation />

      <ArrowContainer href="#about">
        <ArrowCircle />
      </ArrowContainer>
    </MainContainer>
  )
}
export default Main
