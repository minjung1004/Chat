import '../../../App.css'
import React from 'react';
import Tree from '../../../tree.jpg'
  
function Home () {
  return(
    <div className="home_title">
    <h1>Home Page</h1>
    <img src={Tree} alt= "yellow tree" />
    </div>
  )
}
  
export default Home;