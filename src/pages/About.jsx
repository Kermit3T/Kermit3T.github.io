
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

function About() {
  return ( 
    <AboutWrapper>
      <Title>About Me</Title>
      <Content>
        Hello! I'm Thang, but I like to go by John, a Computer science undergrade passionate about web developement.
        With experience in ASP.NET, Vite.js, and Next.js, I'm always eager to take on new challenges
        and create innovative solutions.
      </Content>
    </AboutWrapper>
  );
}

export default About;