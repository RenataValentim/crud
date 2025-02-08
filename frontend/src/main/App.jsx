import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import UserList from '../user/UserList';
import UserForm from '../user/UserForm';

const Logo = () => {
    return (
      <aside className="logo">
        <h2>💜 MyApp</h2>
      </aside>
    );
  };

const Nav = () => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastro</Link>
    </nav>
  </aside>
);

const Header = () => {
    return (
      <header className="header">
        <h1>Bem-vindo ao Sistema de Cadastro</h1>
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer className="footer">
        <p>Desenvolvido por Renata Valentim © {new Date().getFullYear()}</p>
      </footer>
    );
  };

const Home = () => <h2>Bem-vindo à página inicial!</h2>;

const Cadastro = () => {
  const [refresh, setRefresh] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <UserForm userToEdit={userToEdit} onUserAdded={() => setRefresh(!refresh)} />
      <UserList onUserDeleted={() => setRefresh(!refresh)} onUserUpdated={setUserToEdit} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Header />
        <Nav />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;