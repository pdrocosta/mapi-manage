import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles.js";
import theme from "./styles/globalStyles.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

// const App = () => {
//   return <h1>Hello World</h1>;
// };

// export default App;