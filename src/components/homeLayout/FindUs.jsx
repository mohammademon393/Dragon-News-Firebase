import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold">Find us on</h2>

        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start"> <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn join-item bg-base-100 justify-start"> <FaTwitter></FaTwitter> Twitter</button>
          <button className="btn join-item bg-base-100 justify-start"> <FaInstagram></FaInstagram> Instragram</button>
        </div>
      </div>
    );
};

export default FindUs;