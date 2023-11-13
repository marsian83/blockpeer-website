import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts";
import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import PricingPage from "./PricingPage/PricingPage";
import AboutPage from "./AboutPage/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout.Default />}>
      <Route index element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;
