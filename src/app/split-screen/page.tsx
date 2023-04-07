import { SplitScreen } from "./split-screen";

const LeftComponent = () => {
  return <h2>Left</h2>;
};

const RightComponent = () => {
  return <h3>Right</h3>;
};

const Page = () => {
  return (
    <main>
      <SplitScreen leftBasis="400px" rightBasis="300px">
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
    </main>
  );
};

export { Page, Page as default };
