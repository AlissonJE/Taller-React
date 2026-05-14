const Footer = ({ autor }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <p>Guía React con JSX sin TypeScript</p>
      <p>Creado por {autor} - {year}</p>
    </footer>
  );
};

export default Footer;