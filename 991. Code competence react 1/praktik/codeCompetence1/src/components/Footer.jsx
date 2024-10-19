import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
<Footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4"> ALL ABOUT OCA </h2> 

        <div className="flex justify-center space-x-6 mb-4">
            <button 
            onClick={() => openLink('https://www.facebook.com/share/14T2ZGaGTt/') } 
            className="hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </button>
            <button
            onClick={() => openLink('https://www.instagram.com/monich_aaa?igsh=MXMzcW8xbHdjemc0eg==')}
            className="hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </button>
          <button
            onClick={() => openLink('https://x.com/Monichaocha00?t=veMZBC8HEzK8n49y7wvGKw&s=09')}
            className="hover:text-white-500">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </button>
        </div>

        <div className="mb-4">
          <p>Nomor Telepon: +62 889 890 102 33 </p>
          <p>Alamat: Jl. Raya Solo Jiwan, Madiun</p>
        </div>

        <div className="mt-6">
            <p>&copy; {new Date().getFullYear()} Nama Website. All Rights Reserved.</p>
        </div>
    </div>
</Footer>
    );
};

export default Footer;