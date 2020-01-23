import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav" style={{backgroundImage: "linear-gradient(black, rgba(0,0,0,.8), rgba(0,0,0,.7), rgba(0,0,0,.1), rgba(0,0,0,0))"}}>
            <li style={{color: "white", marginRight: "6em"}}>Marquis J Gaston</li>
            <li><a href="http://minnmax.netlify.com">My Bottega Capstone Project</a></li>
            |
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
            <li style={{color: "white", marginLeft: "6em"}}>MarquisGaston23@gmail.com</li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3 style={{backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px"}}>I'm your next {city} based <span>{occupation}</span>.<br/> {description} <a style={{color: "orange", fontWeight: "600"}} href="http://minnmax.netlify.com">CLICK HERE TO CHECKOUT MY CAPSTONE PROJECT </a>.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
