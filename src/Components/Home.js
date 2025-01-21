import Hero from "./Hero";
 
function Home() {
  return (
    <>
      {/* <h1> WELCOME RO MY HOME PAGE</h1> */}
      <Hero className="text-align" content={`Welcome to movie brower, a platform to search for movies and your favorite collections!`} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quas voluptates delectus maiores pariatur molestias odit, non
              consequatur magni, labore corporis totam similique tenetur dolorum
              voluptatum ipsam distinctio officiis ea.
            </p>
          </div>
        </div>
      </div>
      </>
  );
}

export default Home;
