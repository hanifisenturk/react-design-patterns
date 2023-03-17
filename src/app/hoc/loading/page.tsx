"use client";
import React from "react";
import Tasks from "./Tasks";

import Highlight from "react-highlight";

function Page() {
  return (
    <div>
      <Tasks />
      <p>withLoader.tsx</p>
      <Highlight>
        {`"use client";
import React from "react";

export const withLoader = (Component: React.FC, url: string) => {
  return (props: any) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      };
      fetchData();
    }, []);
    if (!data) return <p>Loading...</p>;
    return <Component data={data} {...props} />;
  };
};
`}
      </Highlight>
      <p>Tasks.tsx</p>
      <Highlight>
        {`"use client";

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

`}
      </Highlight>
    </div>
  );
}

export default Page;
