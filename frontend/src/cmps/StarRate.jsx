import React from 'react';


export function StarRate(props) {


  const stars = []
  for (let i=0;i<Math.round(props.rank);i++) {
    stars.push(<img key={i} className="star-icon" src={require('../assets/icons/rank.svg')}/>)
  }

  return (
    <div className="star-rating">
      {stars}<span>({Math.round(props.rank)})</span>
    </div>
  );

}




