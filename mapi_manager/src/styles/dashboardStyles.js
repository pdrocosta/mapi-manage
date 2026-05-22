// styles/dashboard.styles.js
import styled from 'styled-components';
import { Card } from './shared';

export const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

// ── Sidebar ───────────────────────────────────────

export const Sidebar = styled.aside`
  width: ${({ theme }) => theme.layout.sidebarWidth};
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.space[6]} ${theme.space[4]}`};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarLogo = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
  flex: 1;
`;

export const SidebarLink = styled.a`
  display: block;
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: background ${({ theme }) => theme.transitions.fast},
              color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface2};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  ${({ active, theme }) => active && `
    background: ${theme.colors.accentLight};
    color: ${theme.colors.accent};
    &:hover {
      background: ${theme.colors.accentLight};
      color: ${theme.colors.accent};
    }
  `}
`;

export const SidebarLogout = styled.button`
  width: 100%;
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: auto;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface2};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

// ── App main ──────────────────────────────────────

export const AppMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

// ── Header ────────────────────────────────────────

export const AppHeader = styled.header`
  height: ${({ theme }) => theme.layout.headerHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.space[8]}`};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
`;

export const UserAvatar = styled.div`
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

// ── Page content ──────────────────────────────────

export const PageContent = styled.div`
  padding: ${({ theme }) => theme.space[8]};
  flex: 1;
  animation: fadeUp 0.35s ease forwards;

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.space[6]} ${theme.space[4]}`};
  }
`;

// ── Stats grid ────────────────────────────────────

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[6]};
`;

export const StatCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};

  @media (max-width: 768px) {
    /* 2-col on mobile */
  }
`;

export const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`;

export const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1;
`;
