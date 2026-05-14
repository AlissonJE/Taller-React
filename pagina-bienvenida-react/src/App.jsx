import Header from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const beneficios = [
    {
      titulo: "Componentes",
      descripcion: "Aprenderás a dividir una interfaz en piezas reutilizables.",
    },
    {
      titulo: "JSX",
      descripcion: "Escribirás estructuras visuales parecidas a HTML usando JavaScript.",
    },
    {
      titulo: "Props",
      descripcion: "Enviarás información desde un componente padre a componentes hijos.",
    },
  ];

  return (
    <div className="app">
      <Header titulo="Bienvenido a React" />
      <main>
        <WelcomeCard
          nombre="Estudiante"
          mensaje="Esta es tu primera página construida con React, JSX y componentes funcionales."
        />
        <Benefits beneficios={beneficios} />
      </main>
      <Footer autor="Tu nombre" />
    </div>
  );
};

export default App;