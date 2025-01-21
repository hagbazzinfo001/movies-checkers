function Hero({content, backdrop}) {
  
   return (
    <>
    <header className="bg-dark text-white p-5 hero-container text-align">
  <h1 className="hero-text"> {content}</h1>
  {backdrop &&
    <div className="hero-backdrop" style={{backgroundImage:`url(${backdrop})`}} ></div>
  }
     </header>
     </>
  );
}

export default Hero;
