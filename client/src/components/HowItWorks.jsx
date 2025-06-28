// HowItWorks.jsx
import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  background-color: ${({ bg }) => (bg === 'gray' ? '#f7fafc' : 'white')};
  padding: 4rem 1rem;
`;

const SectionContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
`;

const SectionSubtitle = styled.p`
  color: #4a5568;
  font-size: 1.125rem;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepItem = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 260px;
  flex: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const StepNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
`;

const StepDescription = styled.p`
  color: #4a5568;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const StepArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    stroke: #a0aec0;
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

const HowItWorks = () => {
  return (
    <Section bg="gray">
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionSubtitle>Three simple steps to share your files</SectionSubtitle>
        </SectionHeader>

        <StepsContainer>
          {/* Step 1 */}
          <StepItem>
            <StepNumber>1</StepNumber>
            <StepTitle>Upload Files</StepTitle>
            <StepDescription>
              Select files from your device or drag & drop them into the upload area.
            </StepDescription>
          </StepItem>

          <StepArrow>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#A0AEC0" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</StepArrow>


          {/* Step 2 */}
          <StepItem>
            <StepNumber>2</StepNumber>
            <StepTitle>Add Recipients</StepTitle>
            <StepDescription>
              Enter email addresses of the people you want to share files with.
            </StepDescription>
          </StepItem>

          <StepArrow>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#A0AEC0" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</StepArrow>


          {/* Step 3 */}
          <StepItem>
            <StepNumber>3</StepNumber>
            <StepTitle>Send & Track</StepTitle>
            <StepDescription>
              Click send and get notified when your files are downloaded.
            </StepDescription>
          </StepItem>
        </StepsContainer>
      </SectionContainer>
    </Section>
  );
};

export default HowItWorks;
