import React from 'react'
import './Find.css'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
// import { IconContext } from "react-icons";
// import { GiBeachBall } from "react-icons/gi";
import beachBall from '../../assets/beachBall.svg'

// const styles = require('./darkMap.json')

const Find = () => {
  const [number, setNumber] = React.useState(1)
  const arr = [
    {lat: 43.66224622569736, lng: -79.30884097266342},
    {lat: 43.6430682799489, lng: -79.36737247230},
    {lat: 43.7036232862448, lng: -79.4754562},
    {lat: 43.7140157774277, lng: -79.2259928584099},
    {lat: 43.539814, lng: -80.216094},
  ]
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCAvJOrFqiXDcwli8QxHrfiLxuvIOul1ic"
  })
  const changeNumber = () => {
    setNumber(number + 1)
  }
  if (!isLoaded) return <p>Loading...</p>
  else return (
    <GoogleMap
      zoom={12}
      center={{lat: 43.66224622569736, lng:  -79.30884097266342}}
      mapContainerClassName="map-container"
    >
      <button onClick={changeNumber} className="button-map">
        Fetch
      </button>
        {arr.slice(0, number).map((item, index) => (
          <Marker
            key={index}
            icon={{
              url: beachBall,
              anchor: new google.maps.Point(17, 46),
              scaledSize: new google.maps.Size(37, 37)
            }}
            position={item}
          />
        ))}
    </GoogleMap>
  )
}

export default Find