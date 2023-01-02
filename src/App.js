import { useState } from "react";
import SharedLayout from "./pages/SharedLayout.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ErrorPage from "./pages/Error.Page";
import ServicesPage from "./pages/Services.page";
import ContactPage from "./pages/Contact.page";
import SessionsPage from "./pages/Sessions.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import DetailedServicePage from "./pages/DetailedService.page";
import { FooterFormContext } from "./contexts/FooterFormContext";
import { ContactFormContext } from "./contexts/ContactFormContext";
import { SessionsFormContext } from './contexts/SessionsFormContext';

function App() {
  const [ data, setData ] = useState({});

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({});
  };
    
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FooterFormContext.Provider value={{ setData, handleInput, handleSubmit}}>
        <ContactFormContext.Provider value={{ setData, handleInput, handleSubmit}}>
          <SessionsFormContext.Provider value={{ setData, handleInput, handleSubmit}}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="services/:id" element={<DetailedServicePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/sessions" element={<SessionsPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
      </SessionsFormContext.Provider>
      </ContactFormContext.Provider>
      </FooterFormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
