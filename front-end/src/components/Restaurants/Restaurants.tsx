import React from 'react'
import './Restaurants.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState<any>();
  const [search, setSearch] = React.useState<any>('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search", {
          headers: {
            "Authorization": "Bearer tgLN7ri03Eyk0f0rY7YQ0nkmeF0tSdw3uX_0Ya2bGWfx-JiGhA94uYd67Cl2ss4P3-JzV50qUTm4R6Q3lk7AR_GMozFICqU_axNBeG86qdKVF2i1irqQYwshg8akYnYx",
          },
          params: {
            term: 'beach',
            location: 'canada'
          }
        })
        setData(res.data.businesses)
        console.log(res.data.businesses)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="restaurant-container">
      <div className="search-container">
        <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
            onChange={(e) => setSearch(e.target.value)}
            className="res-input-container"
        />
        </form>
      </div>
      {data !== undefined && 
        // eslint-disable-next-line array-callback-return
        (data.filter((data : any) => {
            if(search === ""){
                return data
            }
            else if(data.name.toLowerCase().includes(search.toLowerCase())){
                return data
            }
        }).map((item : any, index: any) => (
          ((index + 1) % 2 === 0 ? <div className="res-indiv-container" key={item.id}>
            <div className="res-text-container">
              <h1>Name: {item.name}</h1>
              <h1>Address: {item.location.address1}</h1>
              <h1>Rating: {item.rating}</h1>
              <button className="res-button" onClick={() => navigate("/find")}>Check Map</button>
            </div>
            <div className="res-image-container">
              <img src={item.image_url} alt={item.name}/>
              <div className="overlay">
                <div className="res-text">
                  <h2>For more info: <a href={item.url}>Click Me</a></h2>
                  <h2 className="res-second-text">This beautiful place is in {item.location.city}, {item.location.country}</h2>
                </div>
              </div>
            </div>
          </div> : 
            <div className="res-indiv-container" key={item.id}>
              <div className="res-image-container">
              <img src={item.image_url} alt={item.name}/>
              <div className="overlay">
                <div className="res-text">
                  <h2>For more info: <a href={item.url}>Click Me</a></h2>
                  <h2 className="res-second-text">This beautiful place is in {item.location.city}, {item.location.country}</h2>
                </div>
              </div>
            </div>
            <div className="res-text-container">
              <h1>Name: {item.name}</h1>
              <h1>Address: {item.location.address1}</h1>
              <h1>Rating: {item.rating}</h1>
              <button className="res-button" onClick={() => navigate("/find")}>Check Map</button>
            </div>
          </div>
          ) 
        )))
      }
    </div>
  )
}

export default Restaurants