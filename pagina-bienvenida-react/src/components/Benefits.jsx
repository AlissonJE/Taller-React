const Benefits = ({ beneficios }) => {
  return (
    <section className="benefits" id="beneficios">
      <h2>¿Qué aprenderás?</h2>
      <div className="benefits-grid">
        {beneficios.map((beneficio, index) => (
          <article className="benefit-card" key={index}>
            <h3>{beneficio.titulo}</h3>
            <p>{beneficio.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;