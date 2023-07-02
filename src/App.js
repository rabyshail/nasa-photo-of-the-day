import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

//"hdurl":"https://apod.nasa.gov/apod/image/2307/MWAurora_hang_4906.jpg"
//"title":"Milky Way and Aurora over Antarctica"
//"date":"2023-07-02"
//"explanation":"It was one of the better skies of this long night. In parts of Antarctica, not only is it winter, but the Sun can spend weeks below the horizon. At China's Zhongshan Station, people sometimes venture out into the cold to photograph a spectacular night sky. The featured image from one such outing was taken in mid-July of 2015, just before the end of this polar night. Pointing up, the wide angle lens captured not only the ground at the bottom, but at the top as well.  In the foreground, a colleague is taking pictures. In the distance, a spherical satellite receiver and several windmills are visible. Numerous stars dot the night sky, including Sirius and Canopus. Far in the background, stretching overhead from horizon to horizon, is the central band of our Milky Way Galaxy. Even further in the distance, visible as extended smudges near the top, are the Large and Small Magellanic Clouds, satellite galaxies near our huge Milky Way Galaxy.