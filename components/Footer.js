import Image from 'next/image'
import Link from 'next/link'
import footerStyles from '../styles/Footer.module.css'
import logo from '../public/images/logo-white.svg'
import fb from '../public/images/icon-facebook.svg'
import tw from '../public/images/icon-twitter.svg'
import yt from '../public/images/icon-youtube.svg'
import pt from '../public/images/icon-pinterest.svg'
import ig from '../public/images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer>
        <div className={footerStyles.footerAll}>
            <div className={footerStyles.footerAllLeft}>
                <div className={footerStyles.footerAllLeftFirst}>
                    <Image src={logo} />
                    <div className={footerStyles.footerAllLeftFirstSocials}>
                        <Image src={fb} className={footerStyles.footerAllLeftFirstSocialsIcon}/>
                        <Image src={yt} className={footerStyles.footerAllLeftFirstSocialsIcon}/>
                        <Image src={tw} className={footerStyles.footerAllLeftFirstSocialsIcon}/>
                        <Image src={pt} className={footerStyles.footerAllLeftFirstSocialsIcon}/>
                        <Image src={ig} className={footerStyles.footerAllLeftFirstSocialsIcon}/>
                    </div>
                </div>
                <div className={footerStyles.footerAllLeftSecond}>
                    <div className={footerStyles.footerAllLeftSecondTop}>
                        <ul className={footerStyles.footerAllLeftSecondList}>
                            <Link href='/about'>
                                <li className={footerStyles.footerAllLeftSecondLink}>About Us</li>
                            </Link>
                            <Link href='/contact'>
                                <li className={footerStyles.footerAllLeftSecondLink}>Contact</li>
                            </Link>
                            <Link href='/blog'>
                                <li className={footerStyles.footerAllLeftSecondLink}>Blog</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={footerStyles.footerAllLeftSecondBottom}>
                        <ul className={footerStyles.footerAllLeftSecondList}>
                            <Link href='/careers'>
                                <li className={footerStyles.footerAllLeftSecondLink}>Careers</li>
                            </Link>
                            <Link href='/support'>
                                <li className={footerStyles.footerAllLeftSecondLink}>Support</li>
                            </Link>
                            <Link href='/privacy'>
                                <li className={footerStyles.footerAllLeftSecondLink}>Privacy Policy</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={footerStyles.footerAllRight}>
                <div className={footerStyles.footerAllRightBtn}>
                    Request Invite
                </div>
                <h4 className={footerStyles.footerAllRightCopyright}>©Easybank. All Rights Resereved</h4>
            </div>
        </div>
    </footer>
  )
}
export default Footer