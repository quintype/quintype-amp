import * as React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./footer";

storiesOf("Footer", module)
  .add("No Footer Text", () => <Footer />)
  .add("With Footer Text", () => (
    <Footer footerText="Copyright © 2020 Lorem Ipsum Media Private Limited. All Rights Reserved" />
  ));
