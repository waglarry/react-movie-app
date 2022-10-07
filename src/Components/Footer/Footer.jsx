import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footerContainer">
                <div className="containerBox">
                <div className="footerLogo">
                    <h1 className='footerLogoH1'><span>🏚</span> Waga's<span>HUB</span></h1>
                    <p className="logoContent">
                        Find all super exciting movies here on the Hub...
                    </p>
                </div>
                <div className="pages">
                    <h3 className="footerTitle">Pages</h3>
                    <ul className="Links">
                        <li><Link className='footerLinks' to='/movies'>Movies</Link></li>
                        <li><Link className='footerLinks' to='/tvshows'>Tv Shows</Link></li>
                        <li><Link className='footerLinks' to='/people'>People</Link></li>
                    </ul>
                </div>
                <div className="howTo">
                    <h3 className="footerTitle">How To...</h3>
                    <ul className="Links">
                        <li className='footerLinks'>Watch</li>
                        <li className='footerLinks'>Download</li>
                        <li className='footerLinks'>View</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3 className="footerTitle">Contact Us</h3>
                    <ul className="Links">
                        <li className='footerLinks'>Facebook</li>
                        <li className='footerLinks'>Instagram</li>
                        <li className='footerLinks'>Twitter</li>
                        <li className='footerLinks'>Telegram</li>
                    </ul>
                </div>
                </div>
            <div className="copyRight">
                Copyright © 2022, Waga'sDesign
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer