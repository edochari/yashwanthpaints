import styles from "../CSS/NavBar.module.css";
import { Outlet } from "react-router-dom";

function NavBar(){
    return (
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLogoContainer}>
                <img src="https://cdn-icons-png.flaticon.com/128/2970/2970785.png" alt="No image" className={styles.navbarLogo} />
                <p className={styles.navbarLogoName}>Yashwanth Paints</p>
            </div>
            <div className={styles.navbarSearchContainer}>
                <input type="text" className={styles.navbarSearchBox} />
            </div>
            <div className={styles.navbarItemsContainer}>
                <div className={styles.navbarUserContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="No User Icon" className={styles.navbarIcon}/>
                </div>
                <div className={styles.navbarCartContainer}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="No cart icon" className={styles.navbarIcon} />

                </div>
            </div>
        </div>
        <Outlet />
        </>
    );
}

export default NavBar;