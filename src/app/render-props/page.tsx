"use client";

import Title from "./Title";
import Highlight from "react-highlight";

function page() {
  return (
    <div>
      <Title render={() => <h1>Mehmet</h1>} />
      <p>Title.tsx</p>
      <Highlight>
        {`function Title({ render }: { render: () => JSX.Element }) {
  return render();
}

export default Title;

`}
      </Highlight>
      <p>page.tsx</p>
      <Highlight>
        {`import Title from "./Title";

function page() {
  return (
    <div>
      <Title render={() => <h1>Mehmet</h1>} />
    </div>
  );
}

export default page;`}
      </Highlight>
    </div>
  );
}

export default page;
