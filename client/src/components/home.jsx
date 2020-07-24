import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import Login from './homepage/login.jsx';
import Signup from './homepage/signup.jsx';
import $ from "jquery";
import './home.css';

export class Home extends Component {
	constructor(props){
		super(props)
	}
	
	loginForm() {
		$("#home").css("filter", "blur(8px)");
		$("#home").css("-webkit-filter", "blur(8px)");
		$("#aa1").css("display", "block");
		var span = $(".close2")[0];
		span.onclick = () => {
		  $("#aa1").css("display", "none");
		  $("#home").css("filter", "");
		  $("#home").css("-webkit-filter", "");
		};
	  }
	
	  logoutForm() {
		$("#home").css("filter", "blur(8px)");
		$("#home").css("-webkit-filter", "blur(8px)");
		$("#aa4").css("display", "block");
		var span = $(".close")[0];
		span.onclick = () => {
		  $("#aa4").css("display", "none");
		  $("#home").css("filter", "");
		  $("#home").css("-webkit-filter", "");
		};
	  }
	  

    render() {
        return (
            <div>
				<div id="home">
                 <header >
				 	<div  >
						<Navbar bg="light" expand="lg">
							<Navbar.Brand id="guide" href="#home">Local-Guide</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">									
									<Nav.Link >Home</Nav.Link>
									<Nav.Link  >About</Nav.Link>
									<Nav.Link  >Contact</Nav.Link>             
									<Nav.Link onClick={this.loginForm.bind(this)} >Log In</Nav.Link>
									<Nav.Link onClick={this.logoutForm.bind(this)} >Sign Up</Nav.Link>
								</Nav>
								<Form inline>
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-success">Search</Button>
								</Form>
							</Navbar.Collapse>
						</Navbar>	
            		</div>
				</header>
			<section id="banner">
				<div className="inner">
					<header>
						<h1>This is Urban</h1>
						<p>Aliquam libero augue varius non odio nec faucibus congue<br />felis quisque a diam rutrum tempus massa accumsan faucibus purus.</p>
					</header>
					<a href="#main" className="button big scrolly">Learn More</a>
				</div>
			</section>		
			<div id="main">				
					<section className="wrapper style1">
						<div className="inner">						
								<div className="flex flex-2">
									<div className="col col1">
										<div className="image round fit">
											<a href="generic.html" className="link"><img src="images/pic01.jpg" alt="" /></a>
										</div>
									</div>
									<div className="col col2">
										<h3>Maecenas a gravida quam</h3>
										<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
										<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
										<a href="#" className="button">Learn More</a>
									</div>
								</div>
						</div>
					</section>

					<section className="wrapper style2">
						<div className="inner">
							<div className="flex flex-2">
								<div className="col col2">
									<h3>Suspendisse quis massa vel justo</h3>
									<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
									<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col col1 first">
									<div className="image round fit">
										<a href="generic.html" className="link"><img src="images/pic02.jpg" alt="" /></a>
									</div>
								</div>
							</div>
						</div>
					</section>
				
					<section className="wrapper style1">
						<div className="inner">
							<header className="align-center">
								<h2>Aliquam ipsum purus dolor</h2>
								<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
							</header>
							<div className="flex flex-3">
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic03.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic05.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic04.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
							</div>
						</div>
					</section>
			</div>	
			<footer id="footer">
				<div className="copyright">
					<ul className="icons">
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
					</ul>
					<p>&copy; Untitled. All rights reserved. Design: <a href="https://templated.co">The Firm</a>. Images: <a href="https://unsplash.com">Unsplash</a>.</p>
				</div>
			</footer>
			</div>
			<div id="log">
          		<div id="aa1" className="aa2">
            		<div className="aa3">
              			<span className="close2">&times;</span>
              			<Login />
            		</div>
          		</div>
        	</div>
			<div id="logout">
          		<div id="aa4" className="aa5">
            		<div className="aa6">
              			<span className="close">&times;</span>
              			<Signup />
            		</div>
          		</div>
        	</div>
        </div>
        )
    }
}

export default Home
