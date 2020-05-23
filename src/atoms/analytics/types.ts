export interface AnalyticsProps {
  type?: string;
  children?: JSX.Element | JSX.Element[];
  "data-credentials"?: string;
  config?: string;
  targets?: object;
  requests?: object;
  vars?: object;
  extraUrlParams?: object;
  triggers?: object;
  transport?: object;
  id?: string;
}
