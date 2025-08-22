import React, {useState} from 'react';
import logo from '../../assets/images/try.jpg';
import RegisterForm from '../Form/RegisterForm/RegisterForm';
import LoginFrom from '../Form/RegisterForm/LoginFrom';



function Hero() {
  const [showLogin, setShowLogin] = useState(false);
const toggleAuthForm = () => {  // ✅ Correct arrow function syntax
  setShowLogin(prevState => !prevState);  // ✅ Use setState function
};
  return (
    <section className="container-fluid" style={{ position: "relative" }}>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-7 p-0">
          {/* Desktop (lg and above) */}
          <img
            src={logo}
            alt="Desktop Image"
            className="img-fluid w-100 d-none d-lg-block"
            style={{ objectFit: "cover" }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />

          {/* Tablet (md only) */}
          <img
            src="images/bg-half-perons-none.jpg"
            alt="Tablet Image"
            className="img-fluid w-100 d-none d-md-block d-lg-none"
            style={{ objectFit: "cover" }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />

          {/* Mobile (sm and below) */}
          <img
            src="images/bg-half-ai.jpg"
            alt="Mobile Image"
            className="img-fluid w-100 d-block d-md-none"
            style={{ objectFit: "cover", height: "auto" }}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </div>

        {/* Right Column */}
        <div className="col-md-5 d-flex justify-content-center align-items-start align-items-md-center p-0">
         < RegisterForm />:
          <LoginFrom/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
