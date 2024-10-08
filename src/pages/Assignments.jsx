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

const CustomLink = styled.a`
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
            Testing assignment
        </AssignmentDescription>
        <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-0" target="_blank" rel="noopener noreferrer">
          Github Link
        </CustomLink>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 1: CDS elevator optimization</AssignmentTitle>
        <AssignmentDescription>
            This assignments helps me find the best spot to stand at to minimize the distance I have to walk to the nearest opening elevator
        </AssignmentDescription>
        <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-1" target="_blank" rel="noopener noreferrer">
          Github Link
        </CustomLink>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 2: KMeans Visualizator</AssignmentTitle>
        <AssignmentDescription>
            This assignments helps me visualize different kmeans algorithms
        </AssignmentDescription>
        <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-2" target="_blank" rel="noopener noreferrer">
          Github Link
        </CustomLink>
        <CustomLink href="https://youtu.be/nDhDAZJpVoc" target="_blank" rel="noopener noreferrer">
          Demo
        </CustomLink>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 3: SVD implementation and analysis</AssignmentTitle>
        <AssignmentDescription>
            An implementation of custom Singular Value Decomposition (SVD) algorithm from scratch and applied it to reduce the dimensionality of the MNIST handwritten digit dataset from 784 dimensions to various lower dimensions (50-400 components).
        </AssignmentDescription>
        <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-3" target="_blank" rel="noopener noreferrer">
          Github Link
        </CustomLink>
      </AssignmentCard>

      {/* Add more AssignmentCard components for future assignments */}
    </AssignmentsWrapper>
  );
}

export default Assignments;