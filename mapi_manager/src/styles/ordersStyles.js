// styles/orders.styles.js
import styled from 'styled-components';
import { Card, Select, Input } from './shared';

// ── Filters ───────────────────────────────────────

export const FiltersRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[6]};
  flex-wrap: wrap;
`;

export const SearchInput = styled(Input)`
  flex: 1;
  min-width: 220px;
`;

export const StatusSelect = styled(Select)``;

// ── Table ─────────────────────────────────────────

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Th = styled.th`
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Tr = styled.tr`
  border-bottom: ${({ isLast, theme }) =>
    isLast ? 'none' : `1px solid ${theme.colors.borderLight}`};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.surface2 : 'transparent'};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.bg};
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => `14px ${theme.space[4]}`};
  color: ${({ theme }) => theme.colors.textSecondary};

  ${({ bold }) => bold && `font-weight: 600;`}
  ${({ accent, theme }) => accent && `color: ${theme.colors.accent};`}
  ${({ muted, theme }) => muted && `
    color: ${theme.colors.textMuted};
    font-size: 0.8125rem;
  `}
`;

export const EmptyState = styled.td`
  padding: ${({ theme }) => theme.space[10]};
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const ViewButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface2};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: #ccc;
  }
`;

// ── Status Badge ──────────────────────────────────

export const Badge = styled.span`
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  white-space: nowrap;

  ${({ status, theme }) => {
    const map = {
      pending:  { color: theme.colors.warning,  bg: theme.colors.warningBg  },
      approved: { color: theme.colors.success,  bg: theme.colors.successBg  },
      rejected: { color: theme.colors.danger,   bg: theme.colors.dangerBg   },
      transit:  { color: theme.colors.transit,  bg: theme.colors.transitBg  },
    };
    const s = map[status] || { color: theme.colors.textMuted, bg: theme.colors.surface2 };
    return `background: ${s.bg}; color: ${s.color};`;
  }}
`;

// ── Summary cards ─────────────────────────────────

export const SummaryGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[6]};
  flex-wrap: wrap;
`;

export const SummaryCard = styled(Card)`
  flex: 1;
  min-width: 130px;
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[5]}`};
`;

export const SummaryLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.space[1]};
`;

export const SummaryCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  line-height: 1;
  color: ${({ color }) => color};
`;

export const SummaryTotal = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: ${({ theme }) => theme.space[1]};
`;

// ── Order modal ───────────────────────────────────

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[6]};
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
  color: ${({ theme }) => theme.colors.textPrimary};
`;
