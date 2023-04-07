import React from "react";

type Props = {
  children: React.ReactNode[];
  leftBasis?: number | string;
  rightBasis?: number | string;
  gap?: number | string;
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
};

const SplitScreen = ({
  children,
  leftBasis,
  rightBasis,
  gap,
  alignItems,
  justifyContent,
}: Props) => {
  const [Left, Right] = children;

  const containerStyles: React.CSSProperties = {
    display: "flex",
    alignItems,
    gap,
    justifyContent,
  };

  const paneStylesLeft: React.CSSProperties = {
    flexBasis: leftBasis,
  };

  const paneStylesRight: React.CSSProperties = {
    flexBasis: rightBasis,
  };

  return (
    <div style={containerStyles}>
      <div style={paneStylesLeft}>{Left}</div>
      <div style={paneStylesRight}>{Right}</div>
    </div>
  );
};

export { SplitScreen, SplitScreen as default };
