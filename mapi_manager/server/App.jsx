import dotenv from "dotenv";
import AppRoutes from "../client/src/routes";
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../client/styles/globalStyles';

dotenv.config();


const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRoutes />
  </ThemeProvider>
);

export default App;
