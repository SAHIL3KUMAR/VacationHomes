import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2; /* Lighter background for contrast */
    color: #333; /* Darker text for better readability */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica', sans-serif;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #007BFF;
    color: #fff;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Add styles for input fields */
  input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
    margin: 10px 0;
    font-size: 16px;
  }

  /* Add media query for responsiveness */
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default GlobalStyles;
