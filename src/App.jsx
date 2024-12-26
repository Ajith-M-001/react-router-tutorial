import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import DetailsVansPage from "./pages/vans/DetailsVansPage";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import VanInfo from "./pages/host/VanInfo";
import VanPricing from "./pages/host/VanPricing";
import VanPhoto from "./pages/host/VanPhoto";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<DetailsVansPage />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<VanInfo />} />
                <Route path="pricing" element={<VanPricing />} />
                <Route path="photo" element={<VanPhoto />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
