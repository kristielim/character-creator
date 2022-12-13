import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "40%",
          background: "#d4dfe1",
          position: "fixed",
          bottom: "0",
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </div>
  );
}

export default App;
