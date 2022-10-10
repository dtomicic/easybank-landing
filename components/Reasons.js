import Image from 'next/image'
import reasonsStyles from '../styles/Reasons.module.css'
import online from '../public/images/icon-online.svg'
import budgeting from '../public/images/icon-budgeting.svg'
import api from '../public/images/icon-api.svg'
import onboarding from '../public/images/icon-onboarding.svg'

const Reasons = () => {
  return (
    <div className={reasonsStyles.reasonsMain}>
        <div className={reasonsStyles.topSection}>
            <h2 className={reasonsStyles.header}>Why choose Easybank?</h2>
            <p className={reasonsStyles.info}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div> 
        <div className={reasonsStyles.bottomSection}>
            <div className={reasonsStyles.bottomSectionCard}>
                <Image src={online} />
                <h2 className={reasonsStyles.bottomSectionCardHeader}>Online Banking</h2>
                <p className={reasonsStyles.bottomSectionCardInfo}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className={reasonsStyles.bottomSectionCard}>
                <Image src={budgeting} />
                <h2 className={reasonsStyles.bottomSectionCardHeader}>Simple Budgeting</h2>
                <p className={reasonsStyles.bottomSectionCardInfo}>See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.</p>
            </div>
            <div className={reasonsStyles.bottomSectionCard}>
                <Image src={onboarding} />
                <h2 className={reasonsStyles.bottomSectionCardHeader}>Fast onboarding</h2>
                <p className={reasonsStyles.bottomSectionCardInfo}>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className={reasonsStyles.bottomSectionCard}>
                <Image src={api} />
                <h2 className={reasonsStyles.bottomSectionCardHeader}>Open API</h2>
                <p className={reasonsStyles.bottomSectionCardInfo}>Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </div>
    </div>
  )
}
export default Reasons