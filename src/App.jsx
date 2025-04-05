import Paths from "./paths";

import "./App.css";

import IntersectionProvider from "src/context/IntersectionCtx";
function App() {
  return (
    <>
      <IntersectionProvider>
        <Paths />
      </IntersectionProvider>
    </>
  );
}

export default App;
