import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <h1 className="home-title">Benvinguts al GEA Esquelles</h1>
      <p className="home-subtitle">Descobreix qui som i què fem!</p>

      <div className="home-grid">
        <Link to="/QuiSom" className="home-card">
          <h3>Qui som?</h3>
          <p>Coneix la història i els valors del nostre grup excursionista.</p>
        </Link>
        <Link to="/Activitats" className="home-card">
          <h3>Activitats</h3>
          <p>Consulta totes les excursions, sortides i trobades que organitzem.</p>
        </Link>
        <Link to="/Rutes" className="home-card">
          <h3>Rutes</h3>
          <p>Explora les nostres rutes i descarrega’t els tracks GPS.</p>
        </Link>
        <Link to="/Escalada" className="home-card">
          <h3>Escalada</h3>
          <p>Informació sobre vies, sectors i consells per escalar.</p>
        </Link>
        <Link to="/Galeria" className="home-card">
          <h3>Galeria</h3>
          <p>Reviu els millors moments a través de les nostres fotos.</p>
        </Link>
        <Link to="/Revista" className="home-card">
          <h3>Revista Batall</h3>
          <p>Llegeix la nostra publicació i descobreix l’arxiu digital.</p>
        </Link>
      </div>

      {/* Botó centrat fora del grid */}
      <div className="home-soci-btn">
        <Link to="/Soci" className="btn-soci">Fes-te soci</Link>
      </div>
    </section>
  );
}

export default Home;
