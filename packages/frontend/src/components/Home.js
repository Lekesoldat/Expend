import React from "react";

const Home = (props) => {
  return (
    <>
      <main>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
    </>
  );
};

export default Home;
