const Header = ({ titulo }) => {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;