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


// ─────────────────────────────────────────────────
// EXEMPLO: como usar os estilos num componente
// ─────────────────────────────────────────────────
//
// components/orders/StatusBadge.jsx
//
// import { Badge } from '../../styles/orders.styles';
//
// const StatusBadge = ({ status }) => (
//   <Badge status={status}>{STATUS[status].label}</Badge>
// );
//
// ─────────────────────────────────────────────────
//
// pages/Orders.jsx
//
// import {
//   FiltersRow, SearchInput, StatusSelect,
//   TableWrapper, Table, TableHead, Th, Tr, Td,
//   SummaryGrid, SummaryCard,
// } from '../styles/orders.styles';
//
// import {
//   PageWrapper, MainContent, PageHeader,
//   ButtonPrimary, BackButton,
// } from '../styles/shared';
//
// ─────────────────────────────────────────────────
//
// pages/Clients.jsx
//
// import {
//   ClientsGrid, ClientCardWrapper,
//   CardHeader, ActiveBadge, CardStats,
//   ModalHeader, ModalRow, ModalActions,
// } from '../styles/clients.styles';
//
// ─────────────────────────────────────────────────
//
// pages/Login.jsx / Register.jsx
//
// import {
//   AuthScreen, AuthCard, AuthLogo,
//   AuthForm, AuthFooter,
// } from '../styles/auth.styles';
//
// ─────────────────────────────────────────────────
//
// pages/Dashboard.jsx
//
// import {
//   AppLayout, Sidebar, SidebarNav, SidebarLink,
//   AppHeader, PageContent, StatsGrid, StatCard,
// } from '../styles/dashboard.styles';
