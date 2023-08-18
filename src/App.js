import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import { useLocation } from "react-router-dom";
import BlogResPage from "./pages/BlogDetails/BlogRespPage";
import BlogTandCPage from "./pages/BlogDetails/BlogTandCPage";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home-two" element={<HomeTwo />} />
        <Route path="blog" element={<Blog />} />
        <Route path="responsible-gaming" element={<BlogResPage />} />
        <Route path="terms-conditions" element={<BlogTandCPage />} />
        <Route path="privacy-policy" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
