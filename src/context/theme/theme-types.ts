interface ThemeProps {
  tokens?: Tokens;
  children: JSX.Element[] | JSX.Element | React.ReactElement;
}

interface Tokens {
  color?: {};
  font?: {};
  spacing?: {};
}

export { ThemeProps };
