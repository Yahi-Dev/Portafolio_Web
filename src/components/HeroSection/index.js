import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, 
  HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton 
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            
            {/* Botones de CV en fila (usando flex) */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              flexWrap: 'wrap', 
              justifyContent: 'flex-start',
              width: '100%',
              maxWidth: '300px'
            }}>
              <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
                CV en Español
              </ResumeButton>
              <ResumeButton href={Bio.resumeEnglish} target="_blank" rel="noopener noreferrer">
                CV in English
              </ResumeButton>
            </div>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;