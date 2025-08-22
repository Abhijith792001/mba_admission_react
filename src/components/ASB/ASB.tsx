import React from 'react'

function ASB() {
  return (
     <section className="asb-section container-lg-fluid container-md my-5">
      <div className="row g-4">
        {/* Left Content */}
        <div className="col-lg-8">
          <h3 className="section-title">Amrita School of Business (ASB)</h3>
          <p>
            Amrita School of Business (ASB) invites applications for the 2025 intake across its campuses at{" "}
            <strong>Amritapuri, Bengaluru, Coimbatore, Amaravati, Mysuru,</strong> and <strong>Kochi</strong>. Known for its rigorous academic environment and industry-oriented curriculum, ASB offers a comprehensive MBA program that equips students with the skills and knowledge needed to excel in the global business landscape.
          </p>

          <div className="contact-box">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:mba@amrita.edu">mba@amrita.edu</a>
            </p>
            <p>
              <strong>Toll-Free Number:</strong> 044-48133344
            </p>
          </div>

          <div className="info-box">
            <h6>Stay Updated on AmritaCAT!</h6>
            <p>Join our WhatsApp Group for Exclusive Insights.</p>
            <a
              href="https://chat.whatsapp.com/JtkI6i2eRsLEXNNo245gg3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
              style={{ borderRadius: "12px" }}
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-lg-4">
          <div className="card date-card mt-4">
            <div className="card-header">Important Dates</div>
            <div className="card-body">
              <p>
                <strong>August 15th, 2025</strong> is the last date for{" "}
                <span className="highlight">Mysuru campus</span> to fill application.
              </p>
              <hr />
              <p className="closed-text">
                Admissions are now <strong>closed</strong> for the Coimbatore, Bengaluru, Amritapuri, Amaravati and Kochi campuses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ASB
