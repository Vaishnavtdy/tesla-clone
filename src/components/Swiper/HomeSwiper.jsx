import React from 'react'
import { BottomItems, Button, HomeContainer, ImageContainer, TopItems } from './HomeSwiper.styled'
import { Home1, Home2, Home3 } from '../../assets'

function HomeSwiper() {
  return (
    <HomeContainer>
      <ImageContainer>
        <TopItems>
          <h1>Model 3</h1>
          <span>Leasing starting at $349/mo</span>
        </TopItems>
        <img src={Home1} alt="" />

        <BottomItems>
          <Button primary>Custom Order</Button>
          <Button>Demo Drive</Button>
        </BottomItems>
      </ImageContainer>
      <ImageContainer>
        <TopItems>
          <h1>Model 4</h1>
          <span>Leasing starting at $349/mo</span>
        </TopItems>
        <img src={Home3} alt="" />
        <BottomItems>
          <Button primary>Custom Order</Button>
          <Button>Demo Drive</Button>
        </BottomItems>
      </ImageContainer>
      <ImageContainer>
        <TopItems>
          <h1>Model 5</h1>
          <span>Leasing starting at $349/mo</span>
        </TopItems>
        <img src={Home2} alt="" />
        <BottomItems>
          <Button primary>Custom Order</Button>
          <Button>Demo Drive</Button>
        </BottomItems>
      </ImageContainer>
    </HomeContainer>
  )
}

export default HomeSwiper