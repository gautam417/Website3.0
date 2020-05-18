import React, { Component } from 'react';
{/* Node module to perform routing operations */}
{/* Imports the Link class from react-router-dom */}
import { Link } from "react-router-dom";
class Navitem extends Component {
  render() {
    return (
        <li id={this.props.item}>
        {/* Gets the value of item and tolink props
            Stores into Link Component
            to attribute is similar to href in an anchor tag*/}
        <Link to={this.props.tolink} onClick=
        {this.props.activec.bind(this,this.props.item)}>{this.props.item}
        </Link>
        </li>
    )
  }
}

export default Navitem
