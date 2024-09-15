import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  background-color: #F6F7F2; // Cultured as main backdrop
  padding: 2rem;
`;

const Title = styled.h2`
  color: #013222; // Dark Green for headings
`;

const ProjectItem = styled.div`
  background-color: #E9EDE4; // Alabaster for project item background
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

const ProjectTitle = styled.h3`
  color: #004D14; // Traditional Forest Green for project titles
`;

const ProjectDescription = styled.p`
  color: #046200; // X11 Dark Green for project descriptions
`;

function Projects() {
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <ProjectItem>
        <ProjectTitle>Kalin's non-profit</ProjectTitle>
        <ProjectDescription>Kalin's non-profit is a non-profit website with a self explainitory name that uses
        the vite.js framework to help direct people to better local education resources.</ProjectDescription>
      </ProjectItem>
      {/* Add more ProjectItem components as needed */}
    </ProjectsWrapper>
  );
}

export default Projects;
