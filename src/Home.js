import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return( 
  <div className="home">
    <div className="home__container">
      <img className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2018/PVLandingPage/Header/1242x450_Mobile-Landing-Page-Header_Web.jpg" 
        alt=""
      />

      <div className="home__row">
        <Product 
          id="12321341"
          title="The lean startup" 
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400.jpg" 
          rating={4}
          />
        <Product 
          id="74637592"
          title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
          price={239.0} 
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVmoqfJsPRBjQDgR1fKgPAUVa2NAhT09gkwt4Z46RJDRl6Drd9h6Wm7aYTYcX2MQkbIbu6h1E2oRlwPsBNM3R-K72R6im2cw_gaMfS2OmmvwW0FNuaEfnh&usqp=CAc"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product 
          id="38471937" 
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
          price={199.99} 
          rating={3} 
          image="https://i.ebayimg.com/images/g/FkEAAOSwOmllG0Jl/s-l1600.jpg"
        />

        <Product 
          id="384726349" 
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
          price={98.99} 
          rating={5} 
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />

        <Product 
          id="923847283" 
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
          price={598.99} 
          rating={4} 
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home__row">
        <Product 
          id="847472847" 
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
          price={1094.98} 
          rating={4} 
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>

    </div>
  </div>
  );
}



export default Home;

