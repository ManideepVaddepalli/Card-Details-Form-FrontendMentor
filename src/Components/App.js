import React from "react";
import { Topsection } from "./Topsection";
import { Cardsection } from "./Cardsection";
import { Bottomsection } from "./Bottomsection";

function App() {
  return (
    <main>
      <Topsection />
      <div id="card-section" className="card-front">
        <Cardsection />
      </div>
      <Bottomsection />
    </main>
  );
}
export default App;
