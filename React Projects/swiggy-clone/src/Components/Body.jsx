import React, { useState, useEffect } from "react";
import Card from "./Card";

function Body() {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  const fetchData = async () => {
    try {
      const data = await fetch(url);
      const resData = await data.json();

      // Attempt to access nested properties directly
      const fetchedRestaurants =
        resData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

      // Log first restaurant's info for debugging
      console.log(fetchedRestaurants[0].info);
      
      // Set the fetched restaurants to the state
      setRestaurants(fetchedRestaurants);
      
    } catch (error) {
      console.log("Error accessing nested properties or fetching data:", error.message);
      setError("An error occurred while fetching restaurant data."); // Set a user-friendly error message
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-200 px-4 py-4">
      {error ? (
        <p>Error: {error}</p> // Display error message if there's an error
      ) : restaurants.length > 0 ? (
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
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Body;
