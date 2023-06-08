import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/Home/Home";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import Login from "./layout/Login/Login";
import Admin from "./layout/Users/Admin";
import User from "./layout/Users/User";
import ComicsList from "./pages/ComicsList";
import CreateComics from "./pages/CreateComics";
import ComicsDetails from "./pages/ComicsDetails";
import UpdateComics from "./pages/UpdateComics";
import Actus from "./layout/Actus/Actus";
import DcComics from "./layout/DC-comics/DcComics";
import Marvel from "./layout/Marvel/Marvel";
import BonsPlans from "./layout/BonsPlans/BonsPlans";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Header/>} />
      <Route path="/" element={<Main/>} />
      <Route path="/" element={<Actus/>} />
      <Route path="/" element={<DcComics/>} />
      <Route path="/" element={<Marvel/>} />
      <Route path="/" element={<BonsPlans/>} />
      <Route path="/" element={<Footer/>} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/accueil-admin" element={<Admin/>} />
      <Route path="/" element={<User/>} />
      {/* Elements de la BDD */}
      <Route path="/comics_books" element={<ComicsList />} />
      <Route path="/comics_books/:id" element={<ComicsDetails />} />
      {/* je créé une page avec le formulaire de connexion */}
        <Route path="/admin/comics_books" element={<ComicsList />} />
        <Route path="/admin/create-comics_books" element={<CreateComics />} />
        <Route path="/admin/comics_books/:id_comic_book" element={<ComicsDetails />} />
        <Route path="/admin/comics_books/:id/update" element={<UpdateComics />} />
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
