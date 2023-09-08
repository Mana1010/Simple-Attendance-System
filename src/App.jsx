import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Form from "./form/Form";
import Login from "./form/Login";
import Register from "./form/Register";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<h1>Error</h1>}>
      <Route path="*" element={<NotFound />} />
      <Route path="/attendancesystem" element={<Form />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="home" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
