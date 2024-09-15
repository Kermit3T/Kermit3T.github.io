import React from 'react';
import styled from 'styled-components';

const AssignmentsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

const AssignmentCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const AssignmentTitle = styled.h2`
  color: #445566;
  margin-bottom: 1rem;
`;

const AssignmentDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const GithubLink = styled.a`
  display: inline-block;
  background-color: #004D14; // Traditional Forest Green
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
  background-color: #013222; // Dark Green
  }
`;

function Assignments() {
  return (
    <AssignmentsWrapper>
      <Title>My Assignments</Title>
      
      <AssignmentCard>
        <AssignmentTitle>Assignment 0: Dummy assignment</AssignmentTitle>
        <AssignmentDescription>
            Placeholder
        </AssignmentDescription>
        <GithubLink href="https://github.com/Kermit3T/bu_username-assignment-0" target="_blank" rel="noopener noreferrer">
          Github Link
        </GithubLink>
      </AssignmentCard>

      {/* Add more AssignmentCard components for future assignments */}
    </AssignmentsWrapper>
  );
}

export default Assignments;