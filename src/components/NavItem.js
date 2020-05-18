import React, { Component } from 'react';
{/* Node module to perform routing operations */}
{/* Imports the Link class from react-router-dom */}
import { Link } from "react-router-dom";
class Navitem extends Component {
  render() {
    return (
        <li>
        {/* Gets the value of item and tolink props
            Stores into Link Component */}
        <Link to={this.prop.tolink} >
        {this.props.item}
        </Link>
        </li>
    )
  }
}

export default Navitem
