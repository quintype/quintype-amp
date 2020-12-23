import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface SubscriptionProps {
  config: Config;
  services: ServicesProps[];
  score?: ScoreProps;
  fallbackEntitlement?: FallbackEntitlementProps;
}

export interface ServicesProps {
  authorizationUrl: (story, config) => string;
  pingbackUrl: (story, config) => string;
  actions: ActionProps;
}

export interface ActionProps {
  login: (config) => string;
  subscribe: (config) => string;
}

export interface ScoreProps {
  supportsViewer?: number;
  isReadyToPay?: number;
}

export interface FallbackEntitlementProps {
  source: string;
  granted: boolean;
  grantReason: string;
  data: DataProps;
}

export interface DataProps {
  numberRemaining: number;
  isLast: boolean;
  isLoggedIn: boolean;
}
export interface PaywallProps {
  config?: Config;
  story?: Story;
  services: ServicesProps[];
  score?: ScoreProps;
  fallbackEntitlement?: FallbackEntitlementProps;
}
