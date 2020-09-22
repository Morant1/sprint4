
import React, { Component } from 'react';


export class StarRate extends Component {

  state = {
    rank: this.props.rank
  }

  setValue = (rank) => {
    this.setState({rank})
  }

  render() {

  const stars = []
  for (let i=0;i<Math.round(this.state.rank);i++) {
    stars.push(<img className="star-icon" src={require('../assets/icons/rank.svg')}/>)
  }

  return (
    <div className="star-rating">
      {stars}<span>({Math.round(this.state.rank)})</span>
    </div>
  );
}
}




