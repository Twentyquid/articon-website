import Navbar, { EventsNavbar } from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="content-1">
        <div className="aids-bar"></div>
        <div className="aids">
          DEPARTMENT OF <br />
          ARTIFICIAL INTELLIGENCE <br />
          AND DATA SCIENCE
        </div>
      </div>
      <div className="footer">
        <ul className="articon">
          <a className="a">A</a>
          <a>R</a>
          <a>T</a>
          <a className="i">I</a>
          <a>C</a>
          <a>O</a>
          <a>N</a>
        </ul>
      </div>
      #endregion
      <div className="content-2">
        <div className="about-text">
          Esse labore eiusmod voluptate minim elit dolor nulla ullamco. Ex eu
          <br />
          velit mollit ad magna ut ipsum dolor aute occaecat tempor nulla.
          Mollit
          <br />
          irure incididunt deserunt adipisicing ullamco. Sit in mollit labore
          <br />
          laboris adipisicing ea sunt excepteur Lorem exercitation ea eu ea
          nulla.
          <br />
          Aliqua sint magna nulla ullamco cupidatat consectetur fugiat ex eu
          <br />
          mollit.
        </div>
      </div>
      #endregion
      <EventsNavbar />
      <div className="content-3">
        <div className="events">
          <div className="grid-container">
            <div className="grid-item">Hello</div>
            <div className="grid-item">Hello</div>
            <div className="grid-item">Hello</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
