import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { CssBaseline } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import GithubProvider from './contexts/GithubContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
  <GithubProvider>
  <React.StrictMode>
    <CssBaseline/>
    <App />
  </React.StrictMode>
  </GithubProvider>
  </ThemeProvider>
);

