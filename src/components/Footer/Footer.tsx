import React from "react";

function Footer() {
  return (
    <footer className="ftco-footer ftco-no-pt" style={{ background: "white", color: "#a4123f" }}>
      <div className="container">
        <div className="row mb-5">
          {/* General Inquiries */}
          <div className="col-12 col-md-4 pt-5">
            <div className="ftco-footer-widget pt-md-5 mb-4">
              <h2 className="ftco-heading-2" style={{ color: "#a4123f" }}>General Inquiries</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <a href="tel://04448133344" style={{ color: "#a4123f" }}>
                      <span className="icon fa fa-phone"></span> 044-48133344 (Toll-Free)
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mba@amrita.edu" style={{ color: "#a4123f" }}>
                      <span className="icon fa fa-paper-plane"></span> mba@amrita.edu
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/JtkI6i2eRsLEXNNo245gg3"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#a4123f" }}
                    >
                      <span className="icon fa fa-whatsapp"></span> Join AmritaCAT! WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                <li><a href="#"><span className="fa fa-telegram"></span></a></li>
              </ul>
            </div>
          </div>

          {/* Campus Contacts */}
          <div className="col-12 col-md-8 pt-5">
            <div className="row">
              <div className="col-12 col-sm-6">
                <h5 className="">Campus Contacts</h5>

                <h5 style={{ color: "#a4123f" }}>Coimbatore</h5>
                <ul className="list-unstyled" >
                  <li>PH: 9443384493, 9943117777</li>
                  <li>EMAIL: asb@amrita.edu</li>
                </ul>

                <h5 style={{ color: "#a4123f" }}>Amritapuri</h5>
                <ul className="list-unstyled" >
                  <li>PH: +91 9072000196</li>
                  <li>EMAIL: mba@am.amrita.edu</li>
                </ul>

                <h5 style={{ color: "#a4123f" }}>Kochi</h5>
                <ul className="list-unstyled" >
                  <li>PH: 9400998635</li>
                  <li>EMAIL: mba@asb.kochi.amrita.edu</li>
                </ul>
              </div>

              <div className="col-12 col-sm-6">
                <h5 style={{ color: "#a4123f" }}>Bengaluru</h5>
                <ul className="list-unstyled" >
                  <li>PH: 7022588702</li>
                  <li>EMAIL: mba@blr.amrita.edu</li>
                </ul>

                <h5 style={{ color: "#a4123f" }}>Amaravati</h5>
                <ul className="list-unstyled" >
                  <li>PH: 9841934447</li>
                  <li>EMAIL: mba@av.amrita.edu</li>
                  <li>
                    <a
                      href="https://chat.whatsapp.com/FJTBHbba8OI7Zx9n9KS0Cj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      <span className="fa fa-whatsapp"></span> Join Group
                    </a>
                  </li>
                </ul>

                <h5 style={{ color: "#a4123f" }}>Mysuru</h5>
                <ul className="list-unstyled" >
                  <li>PH: 8050091952, 9945531123</li>
                  <li>EMAIL: admissions@my.amrita.edu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
