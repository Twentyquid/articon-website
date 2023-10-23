import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">ARTICON</div>
        <div className="nav-center"></div>
        <div className="nav-right">
          <a>About</a>
          <a>News</a>
          <a>Team</a>
        </div>
      </div>
    </>
  );
}

function EventsNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">Upcoming Events</div>
      </div>
    </>
  );
}

export default Navbar;
export { EventsNavbar };
