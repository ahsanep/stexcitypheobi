import React, { useState } from 'react';
import { Credit, LogoImage } from '../../images';
import Styles from './Navbar.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import Explore from '../../pages/Explore/Explore';

const Navbar = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <nav className={Styles.main_div}>
        {/* 1st logo in navbar */}
        <div className={Styles.logo}>
          <LogoImage />
        </div>
        {show &&
          <div className={Styles.menuLink}>
            <ul>

              <li><a href="#">Explore</a></li>
              <li><a href="#">Wallet</a></li>
              <li><a href="#">Swap </a></li>
              <li><a href="#">Balances</a></li>
              <li><a href="#">Transfer</a></li>
              <li><a href="#">NFTs</a></li>

              <li>
                <a href="https://www.youtube.com" target="_ahsn"><button>  <Credit /> Connect Wallet</button></a>
              </li>
            </ul>

          </div>

        }

        {/* </div> */}
        {/* </div> */}
        <div className={Styles.hamburger_menu}>
          <a href="#" className={Styles.innerHamburger} onClick={() => setShow(!show)} > <GiHamburgerMenu /></a>

        </div>
      </nav>
      <Explore />
    </>


  );
}
export default Navbar;