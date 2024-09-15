import React from 'react';
import styled from 'styled-components';

const WorkExperienceWrapper = styled.div`
  background-color: #F6F7F2; // Cultured as main backdrop
  padding: 2rem;
`;

const Title = styled.h2`
  color: #013222; // Dark Green for headings
`;

const JobItem = styled.div`
  background-color: #E9EDE4; // Alabaster for job item background
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

const JobTitle = styled.h3`
  color: #004D14; // Traditional Forest Green for job titles
`;

const JobDetails = styled.p`
  color: #046200; // X11 Dark Green for job details
`;

function WorkExperience() {
  return (
    <WorkExperienceWrapper>
      <Title>Work Experience</Title>
      <JobItem>
        <JobTitle>Assistant Programmer</JobTitle>
        <JobDetails>BUMC | 07/2022 - 06/2024</JobDetails>
        <p>
          Tasked with Implimenting new features and pages requested by the staff at Boston University's Medical Campus,
          Has worked with improving the accesability of a website to help those with reading/listening disabilities.
          Experienced in working with authentication.
        </p>
      </JobItem>
      {/* Add more JobItem components as needed */}
    </WorkExperienceWrapper>
  );
}

export default WorkExperience;
