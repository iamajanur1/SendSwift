// FeaturesStyled.jsx
import React from 'react';
import styled from 'styled-components';

// Section wrapper
const Section = styled.section`
  background-color: #f8f9fc; /* light background behind cards */
  padding: 4rem 1rem;
`;

// Container to center content and constrain width
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

// Heading area
const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937; /* gray-800 */
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;
const Subtext = styled.p`
  font-size: 1.125rem;
  color: #4b5563; /* gray-600 */
  max-width: 42rem;
  margin: 0 auto;
`;

// Responsive grid for feature cards
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Single feature card
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  /* subtle shadow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* optionally: hover lift */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// Icon wrapper: centers the icon, gives color and size
const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  color: #4f46e5; /* you can choose brand color */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

// Title and description
const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827; /* gray-900 */
  margin-bottom: 0.75rem;
`;
const Description = styled.p`
  font-size: 1rem;
  color: #4b5563; /* gray-600 */
  line-height: 1.6;
  flex-grow: 1;
`;

// Example feature data (icon can be inline SVG or React component)
const features = [
  {
    title: 'Secure file transfer via email, or shareable links',
    text: `Send and share large files and other documents quickly and securely with our file transfer solution. Send large files via email or create a simple sharing link from any device (smartphone, tablet, computer) using just a web browser.`,
    icon: (
      <svg width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4472 1.10557C12.1657 0.964809 11.8343 0.964809 11.5528 1.10557L3.55279 5.10557C3.214 5.27496 3 5.62123 3 6V12C3 14.6622 3.86054 16.8913 5.40294 18.7161C6.92926 20.5218 9.08471 21.8878 11.6214 22.9255C11.864 23.0248 12.136 23.0248 12.3786 22.9255C14.9153 21.8878 17.0707 20.5218 18.5971 18.7161C20.1395 16.8913 21 14.6622 21 12V6C21 5.62123 20.786 5.27496 20.4472 5.10557L12.4472 1.10557ZM5 12V6.61803L12 3.11803L19 6.61803V12C19 14.1925 18.305 15.9635 17.0696 17.425C15.8861 18.8252 14.1721 19.9803 12 20.9156C9.82786 19.9803 8.11391 18.8252 6.93039 17.425C5.69502 15.9635 5 14.1925 5 12ZM16.7572 9.65323C17.1179 9.23507 17.0714 8.60361 16.6532 8.24284C16.2351 7.88207 15.6036 7.9286 15.2428 8.34677L10.7627 13.5396L8.70022 11.5168C8.30592 11.1301 7.67279 11.1362 7.28607 11.5305C6.89935 11.9248 6.90549 12.5579 7.29978 12.9446L10.1233 15.7139C10.3206 15.9074 10.5891 16.0106 10.8651 15.9991C11.1412 15.9876 11.4002 15.8624 11.5807 15.6532L16.7572 9.65323Z" fill="#424ef0"></path>
         </g>
         </svg>
    ),
  },
  {
    title: 'Send  files up to 20 GB per transfer',
    text: `Get a TransferNow account to transfer large files and other sizable documents! The files are available up to 365 days before being automatically and permanently erased from our servers.`,
    icon: (
      <svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#424ef0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path> 
      </g>
      </svg>
    ),
  },
  {
    title: 'Track your sent files. Manage your transfers.',
    text: `Use our complete dashboard to follow and track your file downloads over time. You can modify your transfers’ data and parameters, re-transfer files to new recipients without having to systematically re-upload the same documents and erase a transfer before it's initial expiration date.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="48"
        height="48"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Use TransferNow to send files for your business',
    text: `Take advantage of our multi-user service subscriptions to add or import your collaborators and additional users so that they too can get a TransferNow account. Get an administrator account where you will have complete managing control over your users' access, white label customization, file reception and billing. You can also access the sending and receiving history of your business’ files.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="48"
        height="48"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 11a4 4 0 11-8 0 4 4 0 018 0zm6 2v2a4 4 0 01-3 3.87M6 13v2a4 4 0 003 3.87"
        />
      </svg>
    ),
  },
  {
    title: 'Integrate the TransferNow widget on your website and receive files easily.',
    text: `Discover our form generator to receive files directly on your account and customize the widget’s appearance as well as its fields (text boxes, drop-down lists, checkboxes, radio buttons). You can get a simple HTML code to integrate into your website allowing you to receive files instantaneously.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="48"
        height="48"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0 0l-3-3m3 3l3-3M12 4v8"
        />
      </svg>
    ),
  },
  {
    title: 'Customize your account with white label customization',
    text: `Create your personalized web subdomain (for example: https://mycompany.transfernow.net) add your logo and wallpaper to highlight your brand image and/or graphic identity. You can visually improve your account by adding your logo and color scheme for your transfer emails. Promote your firm’s vision by customizing your account when you send and receive files.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="48"
        height="48"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v4m0 0l3-3m-3 3l-3-3M6 12h12M6 16h12M6 20h12"
        />
      </svg>
    ),
  },
];

const FeaturesStyled = () => {
  return (
    <Section>
      <Container>
        <HeadingWrapper>
          <Heading>Why Choose Send Swift?</Heading>
          <Subtext>
            Our platform offers the simplest way to send your files around the world
          </Subtext>
        </HeadingWrapper>
        <Grid>
          {features.map((feat, idx) => (
            <Card key={idx}>
              <IconWrapper>{feat.icon}</IconWrapper>
              <Title>{feat.title}</Title>
              <Description>{feat.text}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default FeaturesStyled;
