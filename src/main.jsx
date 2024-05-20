import React from "react";
import ReactDOM from "react-dom/client";


fucntion App() {
  return (
    <div>
      <h1>Page title</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
