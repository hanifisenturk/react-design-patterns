import React from "react";

export function withStyles(Component: React.FC) {
  const styles = {
    color: "red",
    padding: "1rem",
  };
  return (props: any) => {
    return <Component style={styles} {...props} />;
  };
}
