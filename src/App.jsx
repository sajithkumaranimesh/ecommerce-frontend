import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/RouterConfig.jsx";

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
