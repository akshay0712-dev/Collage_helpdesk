import React from "react";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./assets/components/landing";
import Admission from "./assets/components/admission.jsx";
import Department from "./assets/components/department.jsx";
import Resources from "./assets/components/resources.jsx";
import ScrollToTopButton from "./assets/components/scroll.jsx";
import NewApplicants from "./assets/components/NewApplicants.jsx";
import { useEffect } from "react";
import Error from "./assets/components/error.jsx";
import Devloper from "./assets/components/devloper.jsx";
import Gallery from "./assets/components/gallery.jsx";
import Dress from "./assets/components/dress.jsx";
import EventGallery from "./assets/components/eventGallery.jsx";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <ScrollToTopButton />
    {children}
    <Footer />
  </>
);

const App = () => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/api/v1/track`, {
      method: "GET",
    }).catch((err) => {
      console.error("Failed to update visitor count:", err);
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Landing />
        </Layout>
      ),
    },
    {
      path: "/NewApplicants",
      element: (
        <Layout>
          <NewApplicants />
        </Layout>
      ),
    },
    {
      path: "/admissions",
      element: (
        <Layout>
          <Admission />
        </Layout>
      ),
    },
    {
      path: "/departments",
      element: (
        <Layout>
          <Department />
        </Layout>
      ),
    },
    {
      path: "/resources",
      element: (
        <Layout>
          <Resources />
        </Layout>
      ),
    },
    {
      path: "/developer",
      element: (
        <Layout>
          <Devloper />
        </Layout>
      ),
    },
    {
      path: "/gallery",
      element: (
        <Layout>
          <Gallery />
        </Layout>
      ),
    },
    {
      path: "/gallery/:eventId",
      element: (
        <Layout>
          <EventGallery />
        </Layout>
      ),
    },
    {
      path: "/dress",
      element: (
        <Layout>
          <Dress />
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          <Error />
        </Layout>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
