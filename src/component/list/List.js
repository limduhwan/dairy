import Grid from './Grid';
import Header from './Header';
import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        {/*this is List*/}
        <Header />
        <Grid />
      </div>
    );
  }
}

export default List;
