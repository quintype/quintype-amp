import { Story } from "../../types/story";

export interface SubscriptionProps {
  story: Story;
  services: ServicesProps[];
  score?: ScoreProps;
  fallbackEntitlement?: FallbackEntitlementProps;
}

export interface ServicesProps {
  authorizationUrl: string;
  pingbackUrl: string;
  actions: ActionProps;
}

export interface ActionProps {
  login?: string;
  subscribe?: string;
}

export interface ScoreProps {
  supportsViewer?: number;
  isReadyToPay?: number;
}

export interface FallbackEntitlementProps {
  source?: string;
  granted?: boolean;
  grantReason?: string;
  data?: DataProps;
}

export interface DataProps {
  isLoggedIn?: boolean;
}
