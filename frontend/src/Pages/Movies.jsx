import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/movies.module.css"

const Movies = () => {
    const [movieData,setMovieData]=useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/movies")
    //   .then((res) => res.json())
      .then((res) => setMovieData(res.data));
  }, []);
  return <div>
    <div></div>
    <div class={styles.container}>
        {
            movieData.map((el)=>{
                return(
                    <div key={el.uuid}>
                        <img src={el.image_url} alt=""/>
                        <h5>{el.title}</h5>
                    </div>
                )
            })
        }
    </div>
  </div>;
};

export default Movies;
