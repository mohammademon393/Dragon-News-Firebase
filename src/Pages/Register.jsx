import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body pt-3">
            <h2 className="font-bold text-2xl text-center">
              Regiter Your Account
            </h2>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your name</label>
              <input type="text" className="input" placeholder="Your name" />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-center">
                Already you have an Account{" "}
                <Link className="text-secondary font-bold" to={"/auth/login"}>
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    );
};

export default Register;