import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
