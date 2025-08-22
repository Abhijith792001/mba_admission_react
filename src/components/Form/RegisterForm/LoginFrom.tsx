import React from 'react'

function LoginFrom() {
    return (
        <div
            className="login-wrap p-4 p-md-5 shadow rounded bg-white w-100"
            style={{ maxWidth: "400px" }}
        >
            <h3 className="mb-4 text-center">Login your account</h3>
            <form action="#" className="signup-form">


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



                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </div>
            </form>

            <p className="text-center mt-3">
                Create and account? <a href="#signin">Sign Up</a>
            </p>
        </div>
    )
}

export default LoginFrom
