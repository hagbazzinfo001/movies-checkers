import Hero from "./Hero";
 function About() {
  return (
    <>
      <Hero content={`this is the hero section of my about page`} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              harum illo doloribus? Neque cupiditate ipsam eum iste perspiciatis
              provident error!.
            </p>
          </div>
        </div>
      </div>
     </>
  );
}

export default About;
