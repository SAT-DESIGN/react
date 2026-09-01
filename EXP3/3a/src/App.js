// File: src/App.js
import React, { useState } from "react";

function App() {
const [count, setCount] = useState(0);

  return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>React Counter Example</h1>
<p>Current Count: {count}</p>
<button onClick={() =>setCount(count + 1)}>
        Increase Counter
</button>
</div>
  );
}

export default App;
