import React from 'react';

function RegisterForm({ onRegister=()=>{}}) {
  return (
    <div
      className="login-wrap p-4 p-md-5 shadow rounded bg-white w-100"
      style={{ maxWidth: "400px" }}
    >
      <h3 className="mb-4 text-center">Register Now</h3>
      <form className="signup-form">
        <div className="form-group mb-3">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <input type="text" id="name" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <input type="email" id="email" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password-field"
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="confirm-password" className="label">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            className="form-control"
            placeholder="*********"
          />
        </div>

        <div className="form-group d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={(e) => {
              e.preventDefault(); // Prevent page reload
              onRegister();       // Call function passed via props
            }}
          >
            Register
          </button>
        </div>
      </form>

      <p className="text-center mt-3">
        Already have an account?{" "}
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={onRegister}
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
