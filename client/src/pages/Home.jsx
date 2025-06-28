import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
// import Testimonials from '../components/Testimonials';
// import Pricing from '../components/Pricing';
// import CTA from '../components/CTA';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
        <HowItWorks />
     {/* <Testimonials />
      <Pricing />
      <CTA />
      <Footer />  */}
    </>
  );
};

export default Home;















// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// // Global Styles
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     font-family: 'Inter', sans-serif;
//     background-color: #f0f4f8;
//     color: #333;
//   }
// `;

// // Styled Components
// const Header = styled.header`
//   background-color: #ffffff;
//   padding: 20px 50px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
// `;

// const Logo = styled.h1`
//   font-size: 28px;
//   font-weight: 700;
//   color: #007bff;
//   margin: 0;
// `;

// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// const NavLink = styled.a`
//   font-size: 16px;
//   color: #555;
//   text-decoration: none;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #007bff;
//   }
// `;

// const HeroSection = styled.section`
//   background: linear-gradient(135deg, #007bff, #00c6ff);
//   color: #ffffff;
//   padding: 100px 50px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 60vh;
// `;

// const HeroTitle = styled.h2`
//   font-size: 48px;
//   font-weight: 700;
//   margin: 0 0 20px;
//   animation: fadeIn 1s ease-in;

//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(-20px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
// `;

// const HeroSubtitle = styled.p`
//   font-size: 20px;
//   margin: 0 0 40px;
//   max-width: 600px;
// `;

// const CTAButton = styled.button`
//   background-color: #ffffff;
//   color: #007bff;
//   padding: 15px 30px;
//   font-size: 18px;
//   font-weight: 600;
//   border: none;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const FeaturesSection = styled.section`
//   padding: 80px 50px;
//   background-color: #ffffff;
//   text-align: center;
// `;

// const FeaturesTitle = styled.h3`
//   font-size: 32px;
//   font-weight: 600;
//   margin-bottom: 40px;
//   color: #007bff;
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const FeatureCard = styled.div`
//   background-color: #f9f9f9;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const FeatureIcon = styled.div`
//   font-size: 40px;
//   color: #007bff;
//   margin-bottom: 20px;
// `;

// const FeatureTitle = styled.h4`
//   font-size: 22px;
//   font-weight: 600;
//   margin-bottom: 10px;
// `;

// const FeatureDescription = styled.p`
//   font-size: 16px;
//   color: #666;
// `;

// // Homepage Component
// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <GlobalStyle />
      
//       <HeroSection>
//         <HeroTitle>Send files swiftly and securely</HeroTitle>
//         <HeroSubtitle>
//           Share files with ease using QR codes, keys, or links. Fast, reliable, and secure.
//         </HeroSubtitle>
//         <CTAButton onClick={() => navigate('/login')}>Get Started</CTAButton>
//       </HeroSection>
//       <FeaturesSection>
//         <FeaturesTitle>Why Choose SendSwift?</FeaturesTitle>
//         <FeaturesGrid>
//           <FeatureCard>
//             <FeatureIcon>🚀</FeatureIcon>
//             <FeatureTitle>Lightning Fast</FeatureTitle>
//             <FeatureDescription>
//               Transfer files at blazing speeds with our optimized network.
//             </FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureIcon>🔒</FeatureIcon>
//             <FeatureTitle>Secure Transfers</FeatureTitle>
//             <FeatureDescription>
//               End-to-end encryption ensures your files are always safe.
//             </FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureIcon>📱</FeatureIcon>
//             <FeatureTitle>Easy to Use</FeatureTitle>
//             <FeatureDescription>
//               Intuitive interface makes sharing files a breeze.
//             </FeatureDescription>
//           </FeatureCard>
//         </FeaturesGrid>
//       </FeaturesSection>
//     </>
//   );
// };

// export default Home;