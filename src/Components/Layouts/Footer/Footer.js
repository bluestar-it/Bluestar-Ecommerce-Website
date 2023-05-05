import React from 'react' 
import './Footer.scss' 
import img from '../../../Assets/footer-img.jpg' 

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <h5 className="footer__title">BLUESTAR</h5>
                        <a>
                            <img className="footer__img" src={img} alt={img} />
                          
                        </a>
                    </div>
                    <div className="footer__quicklinks">
                        <h5 className="footer__title">OUR SERVICES</h5>
                        <div className="quicklinks__list">
                            <div className="list__link">
                                <a>Sell online</a>
                                <a>Store builder</a>
                                <a>Mobile commerce</a>
                                <a>Dropshipping</a>
                            </div>
                            <div className="list__link">
                                <a>Shopping cart</a>
                                <a>Web development</a>
                                <a>Point of sale</a>
                                <a>Shopping cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contact">
                        <h5 className="footer__title">CONTACT INFORMATION</h5>
                        <p className="contact__text">
                        20/1B, Vo Van Hat, Long Truong, Thu Duc, Ho Chi Minh City
                        </p>
                        <p className="contact__text">
                             +84 909 799 154
                        </p>
                        <p className="contact__text">
                           bluestar@gmail.com
                        </p>
                    </div>
                </div>
            
                <p className="footer__copyright">
                    Copyright ©2023 Bluestar
                </p>
            </div>
        </div>
    ) 
}

export default Footer 