import React from "react";
import swiggyImage from "../../public/swiggy-1.svg"

function Header(){
    return(
        <>
        <div className="flex space-x-7 px-60 py-6">
            <img className="h-12" src={swiggyImage} alt="swiggy-image"/>
            <h2>Hyderabad</h2>
            <h2>Gachibowli,Hyderabad,Telanga...</h2>
            <h2>Swiggy Corporate</h2>
            <h2>Search</h2>
            <h2>Offers</h2>
            <h2>Help</h2>
            <h2>Sign In</h2>
            <h2>Cart</h2>
        </div>
        </>
    )
}

export default Header;