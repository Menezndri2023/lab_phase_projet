import headerStyles from '../styles/Header.module.css'
import cartImg from '../images/Cart.png'
const Header = ()=>{
    return(
        <div className={headerStyles.headerContainer}>
            <div className={headerStyles.logo}>freshkart</div>
            <div className={headerStyles.nav}>
            <div className={headerStyles.navItem}>fruits</div>
            <div className={headerStyles.navItem}>vegetables</div>
            </div>
            <div className={headerStyles.cart}>
            <img src={cartImg} alt='' />
            <span>Cart</span>
            </div>
            <div className={headerStyles.login}>login</div>
        </div>
    )
}

export default Header