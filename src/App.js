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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/sessions" element={<SessionsPage />}></Route>
          <Route path="/sessions/:id" element={<DetailedServicePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
