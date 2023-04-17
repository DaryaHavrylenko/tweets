import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
