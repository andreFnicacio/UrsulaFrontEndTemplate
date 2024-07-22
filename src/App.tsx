import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import PginaLogin from "./pages/PginaLogin";
import CriarConta from "./pages/CriarConta";
import BackOffice from "./pages/BackOffice";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pgina-login":
        title = "";
        metaDescription = "";
        break;
      case "/criar-conta":
        title = "";
        metaDescription = "";
        break;
      case "/backoffice":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/pgina-login" element={<PginaLogin />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/backoffice" element={<BackOffice />} />
    </Routes>
  );
}
export default App;
