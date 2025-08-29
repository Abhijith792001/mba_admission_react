import React from "react";

type LoginFormProps = {
    onToggle: () => void;
};

function LoginForm({ onToggle }: LoginFormProps) {
    return (
        <div
            className="login-wrap p-4 p-md-5 shadow rounded bg-white w-100"
            style={{ maxWidth: "400px" }}
        >
            <h3 className="mb-4 text-center">Login your account</h3>
            <form className="signup-form">
                <div className="form-group mb-3">
                    <label htmlFor="email" className="label">Email Address</label>
                    <input type="email" id="email" className="form-control" />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password-field" className="form-control" placeholder="********" />
                </div>

                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </div>
            </form>

            <p className="text-center mt-3">
                Create an account?{" "}
                <button type="button" className="btn btn-link p-0" onClick={onToggle}>
                    Sign Up
                </button>
            </p>
        </div>
    );
}

export default LoginForm;
