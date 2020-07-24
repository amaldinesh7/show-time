import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import MoviesApi from '../api/MoviesApi';

 
class StarRating extends React.Component {

    id = this.props.id;

    onRateHandler= (rate)=>{
        // alert(rate.rating);
        MoviesApi.put(`/updaterating/${this.id}`, {
            rating:rate.rating
          })
            .then((response) => {
              console.log({ message: "User Updated Successfully!", headerMessage: "Success!", status: true });
            })
            .catch((error) => {
              console.log({ message: "User Updation Failed! Please Try Again", headerMessage: "Failed!", status: false });
            });
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