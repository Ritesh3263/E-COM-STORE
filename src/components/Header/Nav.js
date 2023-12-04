import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
import { FaBriefcase, FaMobileAlt, FaSearch, FaShoppingCart   } from "react-icons/fa";
import { RiInstagramFill, RiFacebookBoxFill, RiTwitterFill, RiYoutubeFill, RiQuestionFill  } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import svg from "../../Assets/DAPTAR_LOGO_TRANSP.svg";
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../../context/cart_context';

const Nav = () => {
	// const [menuIcon, setMenuIcon] = useState();
	const { total_item } = useCartContext();
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();




	// const navEl = document.querySelector('.nav');
	// const hamburgerEl = document.querySelector('.hamburger');
	// const navItemEls = document.querySelectorAll('.nav__item');

	// hamburgerEl.addEventListener('click', () => {
	// navEl.classNameList.toggle('nav--open');
	// hamburgerEl.classNameList.toggle('hamburger--open');
	// });

	// navItemEls.forEach(navItemEl => {
	// navItemEl.addEventListener('click', () => {
	// 	navEl.classNameList.remove('nav--open');
	// 	hamburgerEl.classNameList.remove('hamburger--open');
	// });
	// });

  return (
    <> 
		
		<header className="header">
			<div className="top-bar">
			<div className="top-bar__content">
				<div className='top-nav-left'>
					<section className="phone">
						<FaBriefcase className='mx-2 icon-top-bar'/>
						<span>For Business</span>
					</section>
					<section className="email">
						<FaMobileAlt className='mx-2 icon-top-bar'/>	
						<span>Download App</span>
					</section>
				</div>
				<div className='top-nav-center'>
					<RiInstagramFill className='mx-2 icon-top-bar'/>	
					<RiFacebookBoxFill  className='mx-2 icon-top-bar'/>	
					<RiTwitterFill  className='mx-2 icon-top-bar'/>	
					<RiYoutubeFill  className='mx-2 icon-top-bar'/>						
				</div>
				<div className='top-nav-right'>
					<section className="phone">
						<BiSolidOffer className='mx-2 icon-top-bar'/>
						<span>Offer Deals</span>
					</section>
					
					<section className="email">
						<RiQuestionFill className='mx-2 icon-top-bar'/>	
						<span>Help</span>
					</section>
					<li className="nav__item">
						<NavLink to="/cart">
							<span className='nav-btns cart-btn'>
								<FaShoppingCart className="cart-trolley" />
								<span className="cart-total--item"> {total_item} </span>
							</span>
						</NavLink>
					</li>
				</div>
			</div>
			</div>

			<div className="bottom-bar">
			<div className="bottom-bar__content">
				<a href="#" className="logo">
				<NavLink to="/">
					<img className="logo__img" src={svg} />
				</NavLink>
				
				{/* <span className="logo__text">CloudServices</span> */}
				</a>

				<nav className="nav">
					<div class="wrapper">
						<div class="searchBar">
							<input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
							<button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
								<FaSearch/>
							</button>
						</div>
					</div>
				</nav>
			
				<nav className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<NavLink to="/products"><span className='nav-btns'>Products</span></NavLink>
						</li>
						
						<li className="nav__item">
							<a href="#contact"><span className='nav-btns'>Contact</span></a>
						</li>
						
						
					</ul>
					
				</nav>
		
				<div className="hamburger">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
				</div>
			</div>
			</div>
		</header>

		<div style={{height:"12rem"}}></div>






		{/* <div className="wrap">
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
	  	</nav> */}

    </>
  )
}

export default Nav
