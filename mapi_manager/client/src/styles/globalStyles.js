import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    bg:           '#f7f6f2',
    surface:      '#ffffff',
    surface2:     '#f0efeb',
    border:       '#e0deda',
    borderLight:  '#f0efeb',

    primary:      '#1a1a1a',
    primaryHover: '#111111',

    accent:       '#4f6ef7',
    accentHover:  '#3a58e0',
    accentLight:  '#eef1fe',

    success:      '#2d9e6b',
    successBg:    '#e8f8f1',
    danger:       '#d94f4f',
    dangerBg:     '#fdecea',
    warning:      '#e08c2a',
    warningBg:    '#fdf3e3',
    transit:      '#4f6ef7',
    transitBg:    '#eef1fe',

    textPrimary:   '#1a1a1a',
    textSecondary: '#6b6b6b',
    textMuted:     '#9b9b9b',
  },

  fonts: {
    sans: "'DM Sans', 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },

  fontSizes: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    lg:   '1.125rem',
    xl:   '1.375rem',
    '2xl':'1.75rem',
    '3xl':'2.25rem',
  },

  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
  },

  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    md: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    lg: '0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
    xl: '0 20px 60px rgba(0,0,0,0.15)',
  },

  transitions: {
    fast: '150ms ease',
    base: '200ms ease',
    slow: '300ms ease',
  },

  layout: {
    sidebarWidth: '240px',
    headerHeight: '60px',
    maxWidth: '1100px',
  },
};

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bg};
    line-height: 1.6;
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover { color: ${({ theme }) => theme.colors.accentHover}; }
  }

  img { max-width: 100%; display: block; }
  ul, ol { list-style: none; }

  h1 { font-size: ${({ theme }) => theme.fontSizes['3xl']}; font-weight: 700; line-height: 1.2; }
  h2 { font-size: ${({ theme }) => theme.fontSizes['2xl']}; font-weight: 600; line-height: 1.3; }
  h3 { font-size: ${({ theme }) => theme.fontSizes.xl};    font-weight: 600; line-height: 1.4; }
  h4 { font-size: ${({ theme }) => theme.fontSizes.lg};   font-weight: 500; }

  p  { color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; }

  button {
    font-family: ${({ theme }) => theme.fonts.sans};
    cursor: pointer;
  }

  input, select {
    font-family: ${({ theme }) => theme.fonts.sans};
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;


export default theme;