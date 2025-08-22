
import logo from '../../assets/images/amrita_logo.png';
function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg  ftco_navbar  ftco-navbar-light" style={{

      position: "fixed", 
    }} id="ftco-navbar">
      <div className="container">
        <img src={logo} width="200" alt="Amrita Logo" />

        <p className=" font-weight-medium" style={{ fontSize: "20px", color: "#a4123f" }}>
          MBA | MBA-MS ADMISSION <span className="badge " style={{ backgroundColor: "#a4123f" }}>2025</span>
        </p>
      </div>
    </nav>
  );
}

export default AppNavbar;
