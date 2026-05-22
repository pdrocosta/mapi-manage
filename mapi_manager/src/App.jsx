import dotenv from "dotenv";
import AppRoutes from "./routes";
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles/globalStyles';

dotenv.config();


const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRoutes />
  </ThemeProvider>
);

export default App;