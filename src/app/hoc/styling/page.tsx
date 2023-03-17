"use client";

import React from "react";

import Button from "../Button";
import Higlight from "react-highlight";

import "../atom-theme.css";

function Page() {
  return (
    <>
      <Button />
      <p>withStyles.tsx</p>
      <Higlight>
        {`import React from "react";

export function withStyles(Component: React.FC) {
  const styles = {
    color: "red",
    padding: "1rem",
  };
  return (props: any) => {
    return <Component style={styles} {...props} />;
  };
}
`}
      </Higlight>
      <p>Button.tsx</p>
      <Higlight>
        {`import React from "react";
import { withStyles } from "./withStyles";

function Button(props: any) {
  const { style } = props;
  return <button style={style}>Button</button>;
}

export default withStyles(Button);

`}
      </Higlight>
    </>
  );
}

export default Page;
