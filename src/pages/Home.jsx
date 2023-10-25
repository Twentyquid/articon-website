import Navbar, { TeamNavbar, PastEventsNavbar } from "../components/Navbar";
import "../styles/Home.scss";

function Home() {
  return (
    <>
      <div className="header">
        <div className="black-line1"></div>
        <div className="navbar-container">
          <div className="black-line2"></div>
          <Navbar />
          <div className="black-line2"></div>
        </div>
      </div>
      <div className="content-1">
        <div className="brain-img-container">
          <div className="brain-img"></div>
        </div>
        <div className="line-content">
          <div className="black-line3"></div>
          <div className="black-line4"> </div>
          <div className="black-line5"></div>
        </div>
        <div className="text-content">
          <div className="aids">
            DEPARTMENT <br />
            OF ARTIFICIAL <br />
            INTELLIGENCE
            <br />
            AND DATASCIENCE
          </div>
          <div className="dept-aids">
            Official department association
            <br />
            for Artificial Intelligence
            <br />
            and Data Science
          </div>
          <div className="rset-image-container">
            <div className="rset-img"></div>
          </div>
        </div>
      </div>
      <div className="footer-content-1">
        <ul className="articon">
          <a>A</a>
          <a>R</a>
          <a>T</a>
          <a>I</a>
          <a>C</a>
          <a>O</a>
          <a>N</a>
        </ul>
      </div>
      {/* #endregion */}
      <div className="content-2">
        Esse labore eiusmod voluptate minim elit dolor nulla ullamco. Ex eu
        <br />
        velit mollit ad magna ut ipsum dolor aute occaecat tempor nulla. Mollit
        <br />
        irure incididunt deserunt adipisicing ullamco. Sit in mollit labore
        <br />
        laboris adipisicing ea sunt excepteur Lorem exercitation ea eu ea nulla.
        <br />
        Aliqua sint magna nulla ullamco cupidatat consectetur fugiat ex eu
        <br />
        mollit.
      </div>
      {/* #endregion */}
      <PastEventsNavbar />
      <div className="content-3">
        <div className="events">
          <div className="grid-container">
            <div className="grid-item">
              <div className="details">
                <div className="inaug">
                  ARTICON
                  <br />
                  INNAUGRATION
                </div>
                <div className="date">22 OCT 2023</div>
              </div>
            </div>
            <div className="grid-item">
              <div className="details">
                <div className="inaug">
                  ARTICON
                  <br />
                  INNAUGRATION
                </div>
                <div className="date">22 OCT 2023</div>
              </div>
            </div>
            <div className="grid-item">
              <div className="details">
                <div className="inaug">
                  ARTICON
                  <br />
                  INNAUGRATION
                </div>
                <div className="date">22 OCT 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #endregion */}
      <TeamNavbar />
      <div className="content-4">
        <div className="teams">
          <div className="grid-container">
            <div className="grid-item-1">
              <div className="details">
                <div className="name">John Doe</div>
                <div className="work">Developer</div>
                <div className="insta"></div>
                <div className="linked"></div>
              </div>
            </div>
            <div className="grid-item-1">
              <div className="details">
                <div className="name">John Doe</div>
                <div className="work">Developer</div>
                <div className="insta"></div>
                <div className="linked"></div>
              </div>
            </div>
            <div className="grid-item-1">
              <div className="details">
                <div className="name">John Doe</div>
                <div className="work">Developer</div>
                <div className="insta"></div>
                <div className="linked"></div>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="discover">
                Discover
                <br />
                the full
                <br />
                Team
              </div>
              <div className="more-teams">
                <div className="absolute-content">
                  <div className="teams-text">Team</div>
                  <div className="teams-button">
                    <button>{">"}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
