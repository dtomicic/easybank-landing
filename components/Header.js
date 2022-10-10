import mockups from '../public/images/image-mockups.png';
import headerStyles from '../styles/Header.module.css';
import Image from 'next/image'
const Header = () => {
  return (
    <div className={headerStyles.header}>
        <div className={headerStyles.headerBg}>
            <Image src={mockups} className={headerStyles.headerImage} />
        </div>
        <div className={headerStyles.main}>
            <h2 className={headerStyles.mainHeader}>Next generation digital banking</h2>
            <p className={headerStyles.mainInfo}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
            <div className={headerStyles.mainInvite}>Request Invite</div>
        </div>
    </div>
  )
}
export default Header