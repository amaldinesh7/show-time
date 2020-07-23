import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

 
class StarRating extends React.Component {

    onRateHandler= (rate)=>{
        alert(rate.rating);
    }
    
    handleClick = e => {
        e.stopPropagation();  //  <------ Here is the magic
      }

    render() {
      return (
        <Rater total={5} rating={this.props.starCount} onRate={this.onRateHandler} onClick={this.handleClick}/>
      );
    }
}

export default StarRating;