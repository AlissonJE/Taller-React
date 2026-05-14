const WelcomeCard = ({ nombre, mensaje }) => {
  return (
    <section className="welcome-card" id="inicio">
      <span className="welcome-label">Curso introductorio</span>
      <h2>Hola, {nombre}</h2>
      <p>{mensaje}</p>
      <button onClick={() => alert("¡Bienvenido a React!")}>
        Empezar ahora
      </button>
    </section>
  );
};

export default WelcomeCard;