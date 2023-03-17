"use client";

import React from "react";
import { withLoader } from "./withLoader";

function Tasks(props: any) {
  const { data } = props;
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default withLoader(
  Tasks,
  "https://jsonplaceholder.typicode.com/todos/1",
);
