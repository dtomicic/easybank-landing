import Image from 'next/image'
import logo from '../public/images/logo.svg'
import hamburger from '../public/images/icon-hamburger.svg'
import close from '../public/images/icon-close.svg'
import layoutStyles from '../styles/Layout.module.css'
import { useState } from 'react'

const Layout = ({children}) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(nav => !nav)
  }
  return (
    <>
        <nav>
            <div className={layoutStyles.mobileNavTop}>
                <div className={layoutStyles.mobileNavTopLeft}>
                    <Image src={logo} />
                </div>
                <div onClick={toggleNav}>
                    <Image src={nav ? close : hamburger} />
                </div>
            </div>
            <div className={nav ? `${layoutStyles.mobileNavBottom} ${layoutStyles.toggleNav}`: layoutStyles.mobileNavBottom}>
                <ul className={layoutStyles.mobileNavBottomList}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </nav>
        {children}
    </>
  )    
}
export default Layout