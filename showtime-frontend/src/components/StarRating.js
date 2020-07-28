import React from 'react';
import { connect } from 'react-redux';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import { updateRating } from '../redux/actions';


class StarRating extends React.Component {

  id = this.props.id;

  onRateHandler = (rate) => {
    this.props.updateRating(this.id, rate.rating);
  }

  handleClick = e => {
    e.stopPropagation();  //  <------ Here is the magic
  }

  render() {
    return (
      <Rater total={5} rating={this.props.starCount} onRate={this.onRateHandler} onClick={this.handleClick} />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps, { updateRating })(StarRating);