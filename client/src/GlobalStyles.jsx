 import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #f8fafc;
      color: #334155;
    }
    
    .gradient-bg {
      background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    }
    
    .hero-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    
    .file-drop-zone {
      border: 2px dashed #cbd5e1;
      transition: all 0.3s ease;
    }
    
    .file-drop-zone:hover {
      border-color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.05);
    }
    
    .file-drop-zone.dragging {
      border-color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.1);
    }
    
    .btn-primary {
      background: linear-gradient(90deg, #0ea5e9, #3b82f6);
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.2), 0 2px 4px -1px rgba(14, 165, 233, 0.1);
    }
    
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3), 0 4px 6px -2px rgba(14, 165, 233, 0.1);
    }
    
    .btn-primary:active {
      transform: translateY(0);
    }
    
    .btn-secondary {
      transition: all 0.3s ease;
    }
    
    .btn-secondary:hover {
      background-color: #f1f5f9;
    }
    
    .feature-icon {
      background: linear-gradient(135deg, #0ea5e9, #3b82f6);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    .nav-link {
      position: relative;
      transition: all 0.3s ease;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #0ea5e9, #3b82f6);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-link.active::after {
      width: 100%;
    }
    
    .language-selector {
      position: relative;
    }
    
    .language-dropdown {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      min-width: 120px;
      z-index: 50;
    }
    
    .language-selector:hover .language-dropdown {
      display: block;
    }
    
    .language-option {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .language-option:hover {
      background-color: #f1f5f9;
    }
    
    .file-input {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
    
    .progress-bar {
      height: 4px;
      background-color: #e2e8f0;
      border-radius: 2px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #0ea5e9, #3b82f6);
      width: 0%;
      transition: width 0.5s ease;
    }
    
    .file-item {
      transition: all 0.3s ease;
    }
    
    .file-item:hover {
      background-color: #f8fafc;
    }
    
    .file-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
    
    .file-icon.pdf {
      background-color: #fee2e2;
      color: #ef4444;
    }
    
    .file-icon.image {
      background-color: #e0f2fe;
      color: #0ea5e9;
    }
    
    .file-icon.doc {
      background-color: #dbeafe;
      color: #3b82f6;
    }
    
    .file-icon.zip {
      background-color: #fef3c7;
      color: #f59e0b;
    }
    
    .tooltip {
      position: relative;
    }
    
    .tooltip-text {
      visibility: hidden;
      position: absolute;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #334155;
      color: white;
      text-align: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 10;
    }
    
    .tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
    
    .tooltip-text::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #334155 transparent transparent transparent;
    }
    
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .7;
      }
    }
    
    .animate-bounce {
      animation: bounce 1s infinite;
    }
    
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
      `;

export default GlobalStyle;