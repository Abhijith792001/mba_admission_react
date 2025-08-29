import { useState } from "react";
import logo from "../../assets/images/try.jpg";
import RegisterForm from "../Form/RegisterForm/RegisterForm";
import LoginForm from "../Form/LoginForm/LoginFrom";

function Hero() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="container-fluid" style={{ position: "relative" }}>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-7 p-0">
          <img
            src={logo}
            alt="Desktop"
            className="img-fluid w-100 d-none d-lg-block"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/bg-half-perons-none.jpg"
            alt="Tablet"
            className="img-fluid w-100 d-none d-md-block d-lg-none"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/bg-half-ai.jpg"
            alt="Mobile"
            className="img-fluid w-100 d-block d-md-none"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Column */}
        <div className="col-md-5 d-flex justify-content-center align-items-start align-items-md-center p-0">
          {showLogin ? (
            <LoginForm onToggle={() => setShowLogin(false)} />
          ) : (
            <RegisterForm onToggle={() => setShowLogin(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
