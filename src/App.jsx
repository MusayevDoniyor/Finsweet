import { useState } from "react";
import NavBar from "./components/Header/NavBar";
import MainH1 from "./components/Main/MainHeading";
import Paragraph1 from "./components/Main/Paragraph1";
import Heading2 from "./components/Main/Heading2";
import List from "./components/Main/Ul";
import Heading3 from "./components/Main/Heading3";
import Paragraph3 from "./components/Main/Paragraph3";
import HeroHeading from "./components/Header/Hero/HeroMain";

function App() {
  return (
    <>
      <div className="MainContainer">
        <header>
          <NavBar />
          <HeroHeading />
        </header>
        <main>
          <section className="textContainer">
            <MainH1 />
            <Paragraph1 />

            <Heading2 />
            <List />

            <Heading3 />
            <Paragraph3 />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
