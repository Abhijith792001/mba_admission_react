import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const StepSection = () => {
  return (
    <>
      {/* Desktop / Tablet version */}
      <section className="container d-md-block d-none">
        <div className="banner-steps">
          <div className="banner-step step1">
            <div className="banner-title">STEP 1</div>
            <div className="banner-icon">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="banner-desc">Create Your Login</div>
          </div>

          <div className="banner-step step2">
            <div className="banner-title">STEP 2</div>
            <div className="banner-icon">
              <i className="bi bi-envelope-paper"></i>
            </div>
            <div className="banner-desc">Verify Email</div>
          </div>

          <div className="banner-step step3">
            <div className="banner-title">STEP 3</div>
            <div className="banner-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <div className="banner-desc">
              Fill Application <br /> Form Online
            </div>
          </div>

          <div className="banner-step step4">
            <div className="banner-title">STEP 4</div>
            <div className="banner-icon">
              <i className="bi bi-check2-square"></i>
            </div>
            <div className="banner-desc">Pay Application Fee</div>
          </div>

          <div className="banner-step step5">
            <div className="banner-title">STEP 5</div>
            <div className="banner-icon">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <div className="banner-desc">
              Upload Required <br /> Documents
            </div>
          </div>
        </div>
      </section>

      {/* Mobile version */}
      <section className="container d-md-none d-block">
        <div className="step-section">
          <div className="step-header">
            <div className="step-number">1</div>
            <div className="step-title">Create Your Account</div>
          </div>
          <div className="step-description">
            Register with your email and basic details to start the application.
          </div>
        </div>

        <div className="step-section">
          <div className="step-header">
            <div className="step-number">2</div>
            <div className="step-title">Verify Your Email</div>
          </div>
          <div className="step-description">
            Confirm your email address to secure your account.
          </div>
        </div>

        <div className="step-section">
          <div className="step-header">
            <div className="step-number">3</div>
            <div className="step-title">Fill Out Application Form</div>
          </div>
          <div className="step-description">
            Provide your personal, academic, and course details online.
          </div>
        </div>

        <div className="step-section">
          <div className="step-header">
            <div className="step-number">4</div>
            <div className="step-title">Pay Application Fee</div>
          </div>
          <div className="step-description">
            Complete a safe and secure online payment to submit your form.
          </div>
        </div>

        <div className="step-section">
          <div className="step-header">
            <div className="step-number">5</div>
            <div className="step-title">Upload Required Documents</div>
          </div>
          <div className="step-description">
            Upload your certificates, ID proof, and any supporting documents.
          </div>
        </div>
      </section>
    </>
  );
};

export default StepSection;
