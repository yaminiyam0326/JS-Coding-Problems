import React, { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer"; 

function Body() {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [restaurants, setRestaurants] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      const fetchedRestaurants = resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="bg-slate-200 px-4 py-4">
      {restaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
          {restaurants.map((restaurant, index) => (
            <Card
              key={index}
              image={restaurant.info.cloudinaryImageId}
              name={restaurant.info.name}
              avgrating={restaurant.info.avgRating}
              duration={restaurant.info.sla.slaString}
              area={restaurant.info.areaName}
              costForTwo={restaurant.info.costForTwo}
            />
          ))}
        </div>
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl">
          {Array.from({ length: 8 }, (_, index) => (
  <Shimmer key={index} />
))}
        </div>
      )}
    </div>
  );
}

export default Body;
