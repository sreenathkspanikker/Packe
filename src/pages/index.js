import React from "react"
import { Layout } from "../components"
import { Carousel, Image } from 'react-bootstrap'
import LogoBlack from "../assets/images/logo_black.svg"
import LogoWhite from "../assets/images/logo_white.svg"


export default function Home() {
  return (
    <Layout className="app-home">
      <div className="box">
        <Carousel fade indicators={false} controls={false}>
          <Carousel.Item>  
            <Carousel.Caption className="black">
              <Image src={LogoBlack} className="logo" /> 
              <h1>Coming Soon</h1> 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>                
            <Carousel.Caption className="white">
              <Image src={LogoWhite} className="logo" /> 
              <h1>Coming Soon</h1> 
            </Carousel.Caption>  
          </Carousel.Item>
        </Carousel>
      </div>
    </Layout>
  )
}
