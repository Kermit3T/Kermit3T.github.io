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

const CustomLinkWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
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
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-0" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 1: CDS elevator optimization</AssignmentTitle>
        <AssignmentDescription>
            This assignments helps me find the best spot to stand at to minimize the distance I have to walk to the nearest opening elevator
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-1" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 2: KMeans Visualizator</AssignmentTitle>
        <AssignmentDescription>
            This assignments helps me visualize different kmeans algorithms
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-2" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/nDhDAZJpVoc" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 3: SVD implementation and analysis</AssignmentTitle>
        <AssignmentDescription>
            An implementation of custom Singular Value Decomposition (SVD) algorithm from scratch and applied it to reduce the dimensionality of the MNIST handwritten digit dataset from 784 dimensions to various lower dimensions (50-400 components).
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-3" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 4: LDS Search endgine</AssignmentTitle>
        <AssignmentDescription>
            This assignments filters through documents using LDS and keywords
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-4" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/xbq2Kdx3iLQ" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 5: Predicting Customer Churn Using KNN</AssignmentTitle>
        <AssignmentDescription>
            Implement a the K-Nearest Neighbors (KNN) algorith to develop a predictive model to identify customers who are likely to churn (i.e., leave the bank) 
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-5" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Midterm: Movie Review Classification Analysis</AssignmentTitle>
        <AssignmentDescription>
            Develope a model to attempt to guess the rating of Amazon movies reviews
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-AmazonScorePrediction" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://docs.google.com/document/d/1dZXM1v_Z4UtE2L5H68RTyGispqX6Baf---7qP6u7NrE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Report
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 6: Linear Regression Visualization</AssignmentTitle>
        <AssignmentDescription>
            Created a website that plots linear regression and showcases changes based on different inputs.
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-6" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/XckHP5aX_ds" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 7: Hypothesis Testing and Confidence Intervals in Linear Regression Visualization</AssignmentTitle>
        <AssignmentDescription>
            A modified version of Assignment 6 that implements Hypothesis Testing and Confidence Intervals to existing Linear Regression Visualization
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-7" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://www.youtube.com/watch?v=sgvjBIdjyc4" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 8: Logistic Regression Visualization</AssignmentTitle>
        <AssignmentDescription>
            An interactive web app that implement logistic regression with user inputed parameters and provide breakdowns
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-8" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/t4Z1NJ9gi28" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 9: Visualizing Neural Networks</AssignmentTitle>
        <AssignmentDescription>
            An interactive web app that visualizes the training steps of 3 activison methods: ReLU, Tanh, and Sigmoid.
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-9" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/eQAHT3wgod4" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>

      <AssignmentCard>
        <AssignmentTitle>Assignment 10: Image search</AssignmentTitle>
        <AssignmentDescription>
            An interactive web app that allows users to search up images via image search or text search or a hybrid of both
        </AssignmentDescription>
        <CustomLinkWrapper>
          <CustomLink href="https://github.com/Kermit3T/tongtt-assignment-10" target="_blank" rel="noopener noreferrer">
            Github Link
          </CustomLink>
          <CustomLink href="https://youtu.be/M0JmfcZhoH4" target="_blank" rel="noopener noreferrer">
            Demo
          </CustomLink>
        </CustomLinkWrapper>
      </AssignmentCard>
      
      {/* Add more AssignmentCard components for future assignments */}
    </AssignmentsWrapper>
  );
}

export default Assignments;
