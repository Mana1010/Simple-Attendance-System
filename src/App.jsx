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
import About from "./pages/About";
import EditProfile from "./components/EditProfile";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/attendancesystem" errorElement={<h1>Error</h1>}>
      <Route path="*" element={<NotFound />} />
      <Route path="/attendancesystem" element={<Form />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="pages" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="edit-your-profile" element={<EditProfile />} />
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
