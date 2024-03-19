import type { NextPage } from "next";
import Header from "./header";
import Landing from "./landing";

const Home: NextPage = () => {
  return (
    <div className="">
      <main className="">
        <Header />
        <Landing />
      </main>
    </div>
  );
};

export default Home;
