import articlesStyles from '../styles/Articles.module.css';
import currency from '../public/images/image-currency.jpg';
import restaurant from '../public/images/image-restaurant.jpg';
import plane from '../public/images/image-plane.jpg';
import confetti from '../public/images/image-confetti.jpg';
import Image from 'next/image';

const Articles = () => {
  return (
    <div className={articlesStyles.articlesMain}>
        <h2 className={articlesStyles.articlesMainHeader}>Latest Articles</h2>
        <div className={articlesStyles.articlesList}>
            <div className={articlesStyles.articlesItem}>
                <Image src={currency} className={articlesStyles.articlesItemImage} height={360}/>
                <div className={articlesStyles.articlesItemMain}>
                    <h4 className={articlesStyles.articlesItemAuthor}>By Claire Robinson</h4>
                    <h2 className={articlesStyles.articlesItemHeading}>Receive money in any currency with no fees</h2>
                    <p className={articlesStyles.articlesItemExcerpt}>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
                </div>
            </div>
            <div className={articlesStyles.articlesItem}>
                <Image src={restaurant} className={articlesStyles.articlesItemImage}/>
                <div className={articlesStyles.articlesItemMain}>
                    <h4 className={articlesStyles.articlesItemAuthor}>By Wilson Hutton</h4>
                    <h2 className={articlesStyles.articlesItemHeading}>Treat yourself without worrying about money</h2>
                    <p className={articlesStyles.articlesItemExcerpt}>Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...</p>
                </div>
            </div>
            <div className={articlesStyles.articlesItem}>
                <Image src={plane} className={articlesStyles.articlesItemImage}/>
                <div className={articlesStyles.articlesItemMain}>
                    <h4 className={articlesStyles.articlesItemAuthor}>By Wilson Hutton</h4>
                    <h2 className={articlesStyles.articlesItemHeading}>Take your Easybank card wherever you go</h2>
                    <p className={articlesStyles.articlesItemExcerpt}>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you.</p>
                </div>
            </div>
            <div className={articlesStyles.articlesItem}>
                <Image src={confetti} className={articlesStyles.articlesItemImage}/>
                <div className={articlesStyles.articlesItemMain}>
                    <h4 className={articlesStyles.articlesItemAuthor}>By Claire Robinson</h4>
                    <h2 className={articlesStyles.articlesItemHeading}>Our invite-only Beta accounts are now live</h2>
                    <p className={articlesStyles.articlesItemExcerpt}>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Articles