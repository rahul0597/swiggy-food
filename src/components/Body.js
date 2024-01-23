import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText]=useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.014431888670632&lng=73.10127452015877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
  };

  if(listOfRestaurants.length==0){
return <Shimmer/>
  }
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}

      <div className="filter">
        <div className="search">
            <input value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)

            }} />
            <button onClick={()=>{
                setFilteredRestaurants(listOfRestaurants.filter((res)=>{
                    return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                }))
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              })
            );
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
