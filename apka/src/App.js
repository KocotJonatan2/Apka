import "./App.css";
import zje from "./12.jpg";
import zje2 from "./gra.jpg";

function App() {
  return (
    <div className="portfolio">
      <header className="top">
        <div className="photo-box">
            <img src={zje} alt="Moje zdjęcie" />
        </div>

        <div className="exams">
          <h2>Egzaminy</h2>

          <div className="exam">
            <span>INF.03</span>
            <strong>89%</strong>
          </div>

          <div className="exam">
            <span>INF.04</span>
            <strong>100%</strong>
          </div>
        </div>
      </header>

      <section className="projects">
        <h1>Moje projekty</h1>

        <div className="projects-grid">

          <div className="project">
            <div className="project-image">
              <img src={zje2} alt="Projekt 1" id="project1" />
            </div>

            <div className="project-content">
              <h3>Gra komputerowa</h3>
              <p>
                Moja pierwsza gra komputerowa.
              </p>

            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={zje2} alt="Projekt 1" id="project1" />
            </div>

            <div className="project-content">
              <h3>Gra komputerowa</h3>
              <p>
                Moja pierwsza gra komputerowa.
              </p>

            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={zje2} alt="Projekt 1" id="project1" />
            </div>

            <div className="project-content">
              <h3>Gra komputerowa</h3>
              <p>
                Moja pierwsza gra komputerowa.
              </p>

            </div>
          </div>

          

        </div>
      </section>
    </div>
  );
}

export default App;
