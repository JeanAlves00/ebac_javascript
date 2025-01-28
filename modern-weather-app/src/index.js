import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);