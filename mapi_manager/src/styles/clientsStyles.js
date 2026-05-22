// styles/clients.styles.js
import styled from 'styled-components';
import { Card } from './shared';

// ── Grid ──────────────────────────────────────────

export const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  padding: ${({ theme }) => theme.space[10]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  grid-column: 1 / -1;
`;

// ── Client Card ───────────────────────────────────

export const ClientCardWrapper = styled(Card)`
  cursor: pointer;
  transition:
    box-shadow ${({ theme }) => theme.transitions.fast},
    transform  ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const CardNameGroup = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CardName = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardCity = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ActiveBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radii.full};
  flex-shrink: 0;

  background: ${({ active, theme }) =>
    active ? theme.colors.successBg : theme.colors.dangerBg};
  color: ${({ active, theme }) =>
    active ? theme.colors.success : theme.colors.danger};
`;

export const CardContact = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space[2]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-top: ${({ theme }) => theme.space[4]};
`;

export const StatBlock = styled.div`
  flex: 1;
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ accent, theme }) => accent ? theme.colors.accent : theme.colors.textPrimary};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

// ── Avatar ────────────────────────────────────────

export const AvatarCircle = styled.div`
  width: ${({ size }) => size || 38}px;
  height: ${({ size }) => size || 38}px;
  border-radius: 50%;
  background: ${({ color }) => color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({ size }) => Math.round((size || 38) * 0.35)}px;
  flex-shrink: 0;
`;

// ── Client Modal ──────────────────────────────────

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

export const ModalNameGroup = styled.div``;

export const ModalName = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ModalCity = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space[3]} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ModalRowLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ModalRowValue = styled.span`
  font-weight: 500;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[6]};
`;
