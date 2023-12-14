import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import Layout from "./components/Template/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import PurchaseMovie from "./Pages/PurchaseMove/PurchaseMovie";

export const route = {
  home: {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  login: {
    path: "/login",
    element: <Login />,
  },
  register: {
    path: "/register",
    element: <Register />,
  },
  detail: {
    path: "/movie/:id",
    element: (
      <Layout>
        <DetailMovie />
      </Layout>
    ),
  },
  purchase: {
    path: "/purchase/:id",
    element: <PurchaseMovie />,
  },
};

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {Object.values(route).map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
