import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact_us from "./pages/Contact_us";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/root/Layout";

const prvz = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about_us" element={<About_us/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/work" element={<Work/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/contact_us" element={<Contact_us/>}></Route>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={prvz}></RouterProvider>
    </>
  )
}

export default App
