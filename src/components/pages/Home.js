import React from 'react'
import './Home.css'
import img1 from '../img/img12.jpeg'
import img2 from '../img/img24.jpeg'


export const Home = () => {
    return (
        <div>
            <div className='home-div'>
                <h2 className='home-h22'>Antakya 326 Döner</h2>
            </div>
            <div className='home-container'>
                <div className='home-cep'>
                    <h1 className='home-h1'>Antakya MUTFAĞI</h1>
                    <h1 className='home-h3'>Ankarada nefis Antakya mutfağının tadını çıkarın. 2013 yılından bu yana tecrübeli şeflerimiz ve mutfak ekibimiz tarafından taze hazırlanmış yemekler sunuyoruz.</h1>
                </div>
                <div className='home-sag'>
                    <div className='home-sagcep'>
                        <img className='home-imgcep' src={img1} alt=''></img>
                    </div>
                    <div className='home-sagsag'>
                        <img className='home-imgsag' src={img2} alt=''></img>
                    </div>
                </div>
            </div>
            <div className='home-container'>
                <div className='home-div3'>
                   <img className="home-surat" src={img2} alt=''></img>
                </div>
                <div className="home-cep">
                    <h1 className='home-h222'>Biz Ne Sunuyoruz</h1>
                    <h1 className='home-h3'>Otantik ve lezzetli yemek çeşitlerimizle kendinizi şımartın. Çorbalar, salatalar, mezeler ve humus tabakları ile mükemmel bir şekilde hazırlanmış hazır yemekler sunuyoruz.</h1>
                </div>
            </div>
        </div>
    );
};
