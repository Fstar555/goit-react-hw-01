import React from "react";
import ReactDOM from "react-dom/client";


fucntion App() {
  return (
    <div>
      <h1>Page title</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, nulla. At impedit repellendus libero reprehenderit dicta eveniet, quod reiciendis maxime officia possimus ipsum doloremque tempore, sint necessitatibus inventore perferendis porro!</p>
      <button>Click me</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
