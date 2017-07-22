import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a routing example About page</h1>
        <Link to='/'>Go back to home</Link>
      </div>
    )
  }
}
