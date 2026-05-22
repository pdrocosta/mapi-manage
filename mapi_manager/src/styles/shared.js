import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.sans};
`;

export const MainContent = styled.main`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space[10]} ${theme.space[6]}`};
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space[8]};
`;

export const PageTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

export const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[6]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  border: none;
  transition:
    background ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform  ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;

  &:active { transform: scale(0.98); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const ButtonAccent = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accentHover};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const ButtonGhost = styled(BaseButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surface2};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space[2]};
  transition: color ${({ theme }) => theme.transitions.fast};
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.surface};
  outline: none;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow   ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentLight};
  }
  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
  &:disabled { background: ${({ theme }) => theme.colors.surface2}; cursor: not-allowed; }
`;

export const Select = styled.select`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  outline: none;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;

export const Alert = styled.div`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.space[4]};
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  ${({ variant, theme }) => variant === 'danger' && `
    background: ${theme.colors.dangerBg};
    color: ${theme.colors.danger};
    border: 1px solid #f9c8c8;
  `}

  ${({ variant, theme }) => variant === 'success' && `
    background: ${theme.colors.successBg};
    color: ${theme.colors.success};
    border: 1px solid #b6e8d2;
  `}
`;


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: ${({ theme }) => theme.space[6]};
  animation: fadeIn ${({ theme }) => theme.transitions.fast};
`;

export const ModalBox = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space[8]};
  width: 100%;
  max-width: 420px;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;


export const Divider = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.colors.borderLight};
  align-self: stretch;
`;


export const FadeUp = styled.div`
  animation: fadeUp 0.35s ease forwards;
`;
