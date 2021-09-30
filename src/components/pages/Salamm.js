import React from 'react';
import './Salamm.css';
import {  FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import {  FiPhone } from 'react-icons/fi'


export const Salamm = () => {
    return (
        <div className="salamm">
            <div className="salamm-container">
                <div className="salamm-col">
                    <div className="salamm-cep">
                        <div className="salamm-div">
                            <div className="salamm-mail">
                                <FiPhone className="salamm-iconn" />
                                <h1 className="salamm-h1">Telefon</h1>
                            </div>
                            <h2 className="salamm-h2">03124190080</h2>
                            <h1 className="salamm-h11">Sosyal Medya</h1>
                            <div>
                                <a className="salamm-link" href='https://www.instagram.com/326antakya/?hl=en' target="_blank" rel="noopener noreferrer" >
                                    <FaInstagram />
                                </a>
                                <a className="salamm-link" href='https://wa.me/905445828859' target="_blank" rel="noopener noreferrer" >
                                    <FaWhatsapp />
                                </a>
                            </div>
                            <div className="salamm-mail">
                                <FaMapMarkerAlt className="salamm-iconn" />
                                <h1 className="salamm-h1">Adres</h1>
                            </div>
                            <h2 className="salamm-h2"> Küçük Esat Cad. No: 70/E Çankaya/Ankara</h2>
                        </div>
                    </div>
                    <div className="salamm-sag">
                        <div className="salamm-div">
                            <h1 className="salamm-h1">Çalışma Saatleri</h1>
                            <h2 className="salamm-h2">Hafta içi 11:00-22:45</h2>
                            <h2 className="salamm-h2">Cumartesi 11:00-22:45</h2>
                            <h2 className="salamm-h2">Hafta sonu 11:00-22:00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
