import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { AmpDecorator } from "./decorators";

addDecorator(withInfo);
addDecorator(AmpDecorator);
