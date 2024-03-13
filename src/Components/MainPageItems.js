import styles from "../CSS/MainPageItems.module.css";
import { Link } from "react-router-dom";

function MainPageItems(){
    return (
        <div className={styles.mainpageItemsContainer}>
            <ul className={styles.MainPageListItems}>
                <li >
                    <Link to="/items">Goto</Link>
                </li>
                {/* <li className={MainPageItem}></li>
                <li className={MainPageItem}></li>
                <li className={MainPageItem}></li> */}

            </ul>

        </div>
    )

}

export default MainPageItems;