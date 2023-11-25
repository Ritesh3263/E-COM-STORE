import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import { FaTwitter,FaInstagram,FaFacebook,FaLinkedin, FaShoppingCart, FaBars  } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../../context/cart_context';
const Nav = () => {
	// const [menuIcon, setMenuIcon] = useState();
	const { total_item } = useCartContext();
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <> 
		
		<div className="wrap">
			<div className="container">
				<div className="row justify-content-between">
						<div className="col">
							<p className="mb-0 phone"><span className="fa fa-phone"></span> <NavLink >+00 1234 567</NavLink></p>
						</div>
						<div className="col d-flex justify-content-end">
							<div className="social-media">
		 		    		<p className="mb-0 d-flex">
				    			<NavLink className="d-flex align-items-center justify-content-center"><FaTwitter/></NavLink>
				    			<NavLink className="d-flex align-items-center justify-content-center"><FaInstagram/></NavLink>
				    			<NavLink className="d-flex align-items-center justify-content-center"><FaLinkedin /></NavLink>
				    			<NavLink className="d-flex align-items-center justify-content-center"><FaFacebook /></NavLink>
				    		</p>		        
                            </div>
						</div>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    	<NavLink className="navbar-brand" >Papermag <span>Magazine</span></NavLink>
	    	{/* <form action="#" className="searchform order-sm-start order-lg-last">
                <div className="form-group d-flex">
                    <input type="text" className="form-control pl-3" placeholder="Search"/>
                    <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
                </div>
                
            </form> */}

			{/* {console.log({isAuthenticated})} */}
			{isAuthenticated ? (
				<li className='order-lg-last d-flex align-items-center gap-3'>
				<h4 className='m-0'>{user.name}</h4>
				<button className='btn btn-primary btn-lg ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
					Log Out
				</button></li>
				
			) : (
				
				<button className='btn btn-primary btn-lg order-lg-last' onClick={() => loginWithRedirect()}>Log In</button>

			)}

				
			<NavLink to="/cart" className="mx-5 navbar-link cart-trolley--link order-lg-last">
              <FaShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
            {/* <FaShoppingCart className="mx-4 order-sm-start cart-trolley order-lg-last" /> */}
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <FaBars className='mb-1' /> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav m-auto">
	        	<li className="nav-item active"> 
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
	        	<li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<NavLink className="dropdown-item" >Page 1</NavLink>
                <NavLink className="dropdown-item" >Page 2</NavLink>
                <NavLink className="dropdown-item" >Page 3</NavLink>
                <NavLink className="dropdown-item" >Page 4</NavLink>
              </div>
            </li>
	        	<li className="nav-item">
                    <NavLink to="/Products" className="nav-link">
                        Products
                    </NavLink>
                </li>
	        	<li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                </li>
	            <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </li>
	        </ul>
	      </div>
	    </div>
	  </nav>

    </>
  )
}

export default Nav
