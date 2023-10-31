
    //carousels/Responsive.js
    import { Carousel } from "react-responsive-carousel";
    import { items } from "../../public/items.json";
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    import styles from "../../public/styles/responsive.module.css";
    export default function ResponsiveCarousel() {
      const { responsive } = items;
      return (
        <div className={styles.slides_container}>
          <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            className={styles.mySwiper}
          >
            {responsive.map((item) => (
              <div key={item.id} className={styles.swipItem}>
                <div className={styles.imgBox}>
                  <img src={item.imageUrl} alt="slides" 

                   
                  
                  />
                </div>
               
              </div>
            ))}
          </Carousel>
        </div>
      );
    }

