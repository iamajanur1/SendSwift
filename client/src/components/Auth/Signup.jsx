import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const borderRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const floatFile = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
  100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
`;

const lineMove = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, #0f172a, #1e40af, #0369a1);
  background-size: 300% 300%;
  animation: ${gradientShift} 15s ease infinite;
  color: white;
  overflow: hidden;
`;

const Card = styled.div`
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  padding: 2rem;
  border-radius: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  background: rgba(255, 255, 255, 0.07);
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(90deg, #0ea5e9, #2563eb);
  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.5), 0 5px 15px -5px rgba(37, 99, 235, 0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px -5px rgba(14, 165, 233, 0.6), 0 10px 20px -5px rgba(37, 99, 235, 0.6);
  }
  &:active {
    transform: translateY(0);
  }
`;

const Notification = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
`;

// Component
const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;

    if (!name || !email || !phone) {
      return showAlert('error', 'Please fill in all fields');
    }
    if (!emailRegex.test(email)) {
      return showAlert('error', 'Please enter a valid email address');
    }
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
      return showAlert('error', 'Please enter a valid phone number');
    }

    showAlert('success', `Welcome to FileShare, ${name}! Your 10GB free storage is ready.`);
    setForm({ name: '', email: '', phone: '' });
  };

  const showAlert = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => setNotification({ show: false, type: '', message: '' }), 5000);
  };

  return (
    <PageWrapper>
      <Card>
        {notification.show && (
          <Notification show={notification.show}>
            <span>{notification.message}</span>
          </Notification>
        )}
        <h2 className="text-2xl font-bold mb-4 text-center">Join FileShare</h2>
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Button type="submit">Create Free Account</Button>
        </form>
      </Card>
    </PageWrapper>
  );
};

export default Signup;
