import Image from 'next/image'
import logo from '../public/images/logo.svg'
import hamburger from '../public/images/icon-hamburger.svg'
import close from '../public/images/icon-close.svg'
import layoutStyles from '../styles/Layout.module.css'
import { useState } from 'react'
import Link from 'next/link'

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
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                    <Link href='/contact'>
                        <li>Contact</li>
                    </Link>
                    <Link href='/blog'>
                        <li>Blog</li>
                    </Link>
                    <Link href='/careers'>
                        <li>Careers</li>
                    </Link>
                </ul>
            </div>
            <div className={layoutStyles.dtNavAll}>
                <div className={layoutStyles.dtNavAllLeft}>
                    <Link href='/'>
                        <Image src={logo} className={layoutStyles.dtNavAllLeftImage}/>
                    </Link>
                </div>
                <div className={layoutStyles.dtNavAllMid}>
                    <ul className={layoutStyles.dtNavAllMidList}>
                        <Link href='/'>
                            <li className={layoutStyles.dtNavAllMidListItem}>Home</li>
                        </Link>
                        <Link href='/about'>
                            <li className={layoutStyles.dtNavAllMidListItem}>About</li>
                        </Link>
                        <Link href='/contact'>
                            <li className={layoutStyles.dtNavAllMidListItem}>Contact</li>
                        </Link>
                        <Link href='/blog'>
                            <li className={layoutStyles.dtNavAllMidListItem}>Blog</li>
                        </Link>
                        <Link href='/careers'>
                            <li className={layoutStyles.dtNavAllMidListItem}>Careers</li>
                        </Link>
                    </ul>
                </div>
                <div className={layoutStyles.dtNavAllRight}>
                    <div className={layoutStyles.dtNavAllRightBtn}>
                        Request Invite
                    </div>
                </div>
            </div>
        </nav>
        {children}
    </>
  )    
}
export default Layout