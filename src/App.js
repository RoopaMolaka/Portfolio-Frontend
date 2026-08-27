import React, { createContext, Suspense, useState } from "react";
import "./App.css";
import Header from "./Includes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./Components/Home"));
const ContactPage = React.lazy(() => import("./Components/ContactForm"));
const AboutPage = React.lazy(() => import("./Components/About"));
const PortFolioPage = React.lazy(() => import("./Components/PortFolio"));

export const FormContext = createContext();

const App = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <>
      <FormContext.Provider
        value={{ errors, setErrors, formData, setFormData }}
      >
        <BrowserRouter>
          <div className="flex bg-black ">
            <Header />
            <div className="flex-1 bg-black">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<p>Loading page...</p>}>
                      <HomePage />{" "}
                    </Suspense>
                  }
                />
                <Route
                  path="/about-me"
                  element={
                    <Suspense fallback={<p>Loading page...</p>}>
                      <AboutPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Suspense fallback={<p>Loading page...</p>}>
                      <ContactPage />
                    </Suspense>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Suspense fallback={<p>Loading page...</p>}>
                      <PortFolioPage />{" "}
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </FormContext.Provider>
    </>
  );
};

export default App;
