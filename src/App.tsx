import { useState } from "react";
import { Hello } from "./components/Hello";

function App() {
  const [name, setName] = useState("jetom");
  return <Hello name={name} />;
}

export default App;
