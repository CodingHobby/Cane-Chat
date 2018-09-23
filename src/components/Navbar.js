import React from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
export default class Navbar extends React.Component {
	render() {
		return(
			<div className="navbar">
				<div className="title"><Link to="/">CaneChat</Link></div>
				<div className="nav-item"><NavLink to="/">Home</NavLink></div>
				<div className="nav-item"><NavLink to="/profile">Profile</NavLink></div>
				<div className="nav-item"><NavLink to="/about">About</NavLink></div>
			</div>
		)
	}
}