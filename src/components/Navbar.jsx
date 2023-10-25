import "../styles/Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar-content-1">
        <div className="nav-center">
          <a>ABOUT</a>
          <a>TEAMS</a>
          <a>EVENTS</a>
        </div>
      </div>
    </>
  );
}

function TeamNavbar() {
  return (
    <>
      <div className="navbar-content-4">
        <div className="nav-left">MEET THE TEAM</div>
      </div>
    </>
  );
}

function PastEventsNavbar() {
  return (
    <>
      <div className="navbar-content-3">
        <div className="nav-left">PAST EVENTS</div>
      </div>
    </>
  );
}

export default Navbar;
export { TeamNavbar, PastEventsNavbar };
