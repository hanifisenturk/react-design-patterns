import React from "react";
import { withStyles } from "./styling/withStyles";

function Button(props: any) {
  const { style } = props;
  return <button style={style}>Button</button>;
}

export default withStyles(Button);
