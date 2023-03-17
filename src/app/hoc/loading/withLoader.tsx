"use client";
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
