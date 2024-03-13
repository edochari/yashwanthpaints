import SimpleCarousel from "../Components/Carousel";
import MainPageItems from "../Components/MainPageItems";
import styles from "../CSS/MainPage.module.css"

function MainPage(){
    return (
        <div className={styles.mainpageContainer}>
        
          <div >
             <SimpleCarousel />


          </div>
           <MainPageItems />
          </div>
          
        
        
    );
}

export default MainPage;