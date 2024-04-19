import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour à tous !
        </SectionTitle>
        <SectionText>
        Je suis Erwann !
        Étudiant en BTS SIO en quête de connaissances et d'expériences pratiques dans le domaine des services informatiques, prêt à relever les défis de demain et à contribuer activement à la transformation numérique des organisations. 
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/cvTelo.pdf';
        }}>Mon CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
