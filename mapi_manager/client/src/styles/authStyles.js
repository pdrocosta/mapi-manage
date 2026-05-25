// styles/auth.styles.js
import styled from 'styled-components';

export const AuthScreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.bg};
  animation: fadeUp 0.35s ease forwards;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[10]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const AuthLogo = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const AuthSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.space[1]};
`;

export const AuthForm = styled.form`
  margin-top: ${({ theme }) => theme.space[6]};
`;

export const AuthFooter = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.space[4]};
`;
