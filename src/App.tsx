import React from "react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Currencies from "./pages/Currencies";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="currencies" element={<Currencies />} />
      </Route>
    </Routes>
  );
}
