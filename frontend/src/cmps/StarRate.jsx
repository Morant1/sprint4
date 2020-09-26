import React from 'react';


export function StarRate(props) {


  const stars = []
  for (let i=0;i<Math.round(props.rank);i++) {
    stars.push(<div key={i} className="star fas fa-star"/>)
  
  }
  // <div onClick={this.addRank} className="star fas fa-star"></div>
  // adding the gray stars (so there is 5 stars but some are gray)
  // and when pressed they add +1 rate and change color
  // change color of star can be done with ::before and ::after content https://codepen.io/depy/pen/EQoGeG
  return (
    <div className="star-rating">
 
      {stars}<span>({Math.round(props.rank)})</span>
    </div>
  );

}




