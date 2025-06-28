// Hero.jsx
import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Global styles (body)
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9fafb;
    overflow-x: hidden;
  }
`;

// Keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

// Styled components for Hero Section
const HeroSection = styled.section`
  background: linear-gradient(to right, #f0f9ff, #e0f2fe);
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    z-index: 0;
  }
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 987px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2.5rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Styled components for Transfer Card
const TransferCard = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  animation: ${fadeIn} 0.5s ease-out;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => (props.$active ? '#2563eb' : '#6b7280')};
  border-bottom: ${props => (props.$active ? '2px solid #2563eb' : 'none')};

  &:hover {
    color: #111827;
  }
`;

// Drop Zone
const DropZone = styled.div`
  border: 2px dashed #d1d5db;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  background-color: ${props =>
    props.$dragging ? 'rgba(37, 99, 235, 0.1)' : 'transparent'};
  border-color: ${props =>
    props.$dragging ? '#2563eb' : '#d1d5db'};

  &:hover {
    border-color: #2563eb;
    background-color: rgba(37, 99, 235, 0.05);
  }
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const DropZoneIcon = styled.div`
  margin-bottom: 1rem;
  color: #6b7280;
`;

const DropZoneTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const DropZoneText = styled.p`
  color: #6b7280;
  margin-bottom: 1rem;
`;

const SelectFilesButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const DropZoneNote = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1rem;
`;

// Files List
const FilesList = styled.div`
  margin-bottom: 1.5rem;
  display: ${props => (props.$hidden ? 'none' : 'block')};
`;

const FilesListTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const FilesCount = styled.span`
  background-color: #dbeafe;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  margin-left: 0.5rem;
`;

const FilesContainer = styled.div``;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f9fafb;
  }
`;

// FileIcon styled based on extension prop
const FileIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  background-color: ${props => {
    const ext = props.$ext.toLowerCase();
    if (ext === 'pdf') return '#fee2e2';
    if (['jpg','jpeg','png','gif','bmp','svg','webp'].includes(ext)) return '#e0f2fe';
    if (['doc','docx'].includes(ext)) return '#dbeafe';
    if (['zip','rar','7z','tar','gz'].includes(ext)) return '#fef3c7';
    return '#e5e7eb';
  }};
  color: ${props => {
    const ext = props.$ext.toLowerCase();
    if (ext === 'pdf') return '#ef4444';
    if (['jpg','jpeg','png','gif','bmp','svg','webp'].includes(ext)) return '#0ea5e9';
    if (['doc','docx'].includes(ext)) return '#2563eb';
    if (['zip','rar','7z','tar','gz'].includes(ext)) return '#f59e0b';
    return '#6b7280';
  }};
`;

// File details
const FileDetails = styled.div`
  flex: 1;
`;

const FileNameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const FileName = styled.span`
  font-weight: 500;
  color: #111827;
`;

const FileSize = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

// const ProgressBar = styled.div`
//   height: 4px;
//   background-color: #e5e7eb;
//   border-radius: 2px;
//   overflow: hidden;
//   margin-top: 0.25rem;
// `;

// const ProgressFill = styled.div`
//   height: 100%;
//   background-color: #2563eb;
//   width: ${props => props.$width || '0%'};
//   transition: width 0.5s ease;
//   &.animate {
//     animation: ${progressAnimation} 1.5s ease-out;
//   }
// `;

const RemoveFileButton = styled.button`
  margin-left: 1rem;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: #6b7280;
  }
`;

// Form
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  outline: none;
  resize: vertical;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

// Advanced Options
const AdvancedOptions = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const AdvancedOptionsToggle = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #111827;
  }
`;

const AdvancedOptionsIcon = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${props => (props.$open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const AdvancedOptionsContent = styled.div`
  margin-top: 1rem;
  display: ${props => (props.$open ? 'block' : 'none')};
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
`;

// Send Button
const SendButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: ${props => (props.$sending ? 0.8 : 1)};
  cursor: ${props => (props.$sending ? 'not-allowed' : 'pointer')};
  animation: ${props => (props.$pulsing ? `${pulse} 2s infinite` : 'none')};

  &:hover {
    background-color: ${props => (props.$sending ? '#2563eb' : '#1d4ed8')};
  }
  &:active {
    background-color: #1e40af;
  }
`;

const SendButtonIcon = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
`;

const Hero = () => {
  // Tabs state
  const [activeTab, setActiveTab] = useState('send');

  // File upload state
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  // Form fields
  const [yourEmail, setYourEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  // Advanced options
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [passwordProtect, setPasswordProtect] = useState(false);
  const [expiry, setExpiry] = useState(false);
  const [notification, setNotification] = useState(true);

  // Send button state
  const [sending, setSending] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  const fileInputRef = useRef();

  // Helpers
  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const preventDefaults = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = e => {
    preventDefaults(e);
    setDragging(true);
  };

  const handleDragOver = e => {
    preventDefaults(e);
    setDragging(true);
  };

  const handleDragLeave = e => {
    preventDefaults(e);
    setDragging(false);
  };

  const handleDrop = e => {
    preventDefaults(e);
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length) {
      setFiles(prev => [...prev, ...droppedFiles]);
    }
  };

  const handleFileSelect = e => {
    const selected = Array.from(e.target.files);
    if (selected.length) {
      setFiles(prev => [...prev, ...selected]);
    }
  };

  const removeFile = index => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatSize = size => {
    if (size < 1024) return size + ' B';
    if (size < 1024 * 1024) return (size / 1024).toFixed(1) + ' KB';
    return (size / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileExt = name => {
    const parts = name.split('.');
    return parts.length > 1 ? parts.pop() : '';
  };

  const handleSend = e => {
    e.preventDefault();
    if (sending) return;
    if (!yourEmail || !recipientEmail || files.length === 0) {
      alert('Please fill emails and select at least one file.');
      return;
    }
    setSending(true);
    setPulsing(true);

    // Simulate upload
    setTimeout(() => {
      setPulsing(false);
      alert('Files sent successfully!');
      setFiles([]);
      setYourEmail('');
      setRecipientEmail('');
      setMessage('');
      setPasswordProtect(false);
      setExpiry(false);
      setNotification(true);
      setSending(false);
    }, 2000);
  };

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Your File Transfer Service</HeroTitle>
            <HeroSubtitle>
              Securely send or request documents with ease.
            </HeroSubtitle>
          </HeroContent>

          <TransferCard>
            {/* Tabs */}
            <TabsContainer>
              <TabButton
                $active={activeTab === 'send'}
                onClick={() => handleTabClick('send')}
              >
                Send Documents
              </TabButton>
              <TabButton
                $active={activeTab === 'receive'}
                onClick={() => handleTabClick('receive')}
              >
                Request Documents
              </TabButton>
            </TabsContainer>

            {/* Drop Zone */}
            {files.length === 0 && (
              <DropZone
                $dragging={dragging}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <FileInput
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
                <DropZoneIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </DropZoneIcon>
                <DropZoneTitle>Drag &amp; drop your documents here</DropZoneTitle>
                <DropZoneText>or</DropZoneText>
                <SelectFilesButton
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                >
                  Browse Files
                </SelectFilesButton>
                <DropZoneNote>
                  Supports PDF, Word, Excel, PowerPoint, and more
                </DropZoneNote>
              </DropZone>
            )}

            {/* Files List */}
            <FilesList $hidden={files.length === 0}>
              <FilesListTitle>
                Selected Documents
                <FilesCount>{files.length}</FilesCount>
              </FilesListTitle>
              <FilesContainer>
                {files.map((file, idx) => {
                  const ext = getFileExt(file.name);
                  return (
                    <FileItem key={idx}>
                      <FileIcon $ext={ext}>
                        {ext ? ext.toUpperCase() : 'FILE'}
                      </FileIcon>
                      <FileDetails>
                        <FileNameRow>
                          <FileName>{file.name}</FileName>
                          <FileSize>{formatSize(file.size)}</FileSize>
                        </FileNameRow>
                      </FileDetails>
                      <RemoveFileButton
                        type="button"
                        onClick={() => removeFile(idx)}
                        aria-label="Remove file"
                      >
                        &times;
                      </RemoveFileButton>
                    </FileItem>
                  );
                })}
              </FilesContainer>
            </FilesList>

            {/* Form Fields */}
            <form onSubmit={handleSend}>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="yourEmail">Your Email</Label>
                  <Input
                    type="email"
                    id="yourEmail"
                    placeholder="your@email.com"
                    value={yourEmail}
                    onChange={e => setYourEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="recipientEmail">Recipient Email</Label>
                  <Input
                    type="email"
                    id="recipientEmail"
                    placeholder="recipient@email.com"
                    value={recipientEmail}
                    onChange={e => setRecipientEmail(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  rows="3"
                  placeholder="Add a message to accompany your documents..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </FormGroup>

              {/* Advanced Options */}
              <AdvancedOptions>
                <AdvancedOptionsToggle
                  type="button"
                  onClick={() => setAdvancedOpen(open => !open)}
                >
                  <AdvancedOptionsIcon $open={advancedOpen}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </AdvancedOptionsIcon>
                  Advanced Options
                </AdvancedOptionsToggle>

                <AdvancedOptionsContent $open={advancedOpen}>
                  <CheckboxGroup>
                    <Checkbox
                      id="password"
                      checked={passwordProtect}
                      onChange={e => setPasswordProtect(e.target.checked)}
                    />
                    <CheckboxLabel htmlFor="password">
                      Password protect documents
                    </CheckboxLabel>
                  </CheckboxGroup>

                  <CheckboxGroup>
                    <Checkbox
                      id="expiry"
                      checked={expiry}
                      onChange={e => setExpiry(e.target.checked)}
                    />
                    <CheckboxLabel htmlFor="expiry">
                      Set expiry date (7 days)
                    </CheckboxLabel>
                  </CheckboxGroup>

                  <CheckboxGroup>
                    <Checkbox
                      id="notification"
                      checked={notification}
                      onChange={e => setNotification(e.target.checked)}
                    />
                    <CheckboxLabel htmlFor="notification">
                      Notify me when documents are viewed
                    </CheckboxLabel>
                  </CheckboxGroup>
                </AdvancedOptionsContent>
              </AdvancedOptions>
<br></br>
              {/* Send Button */}
              <SendButton
                type="submit"
                $sending={sending}
                $pulsing={pulsing}
              >
                <SendButtonIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </SendButtonIcon>
                {sending ? 'Sending...' : 'Send Documents'}
              </SendButton>
            </form>
          </TransferCard>
        </HeroContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
