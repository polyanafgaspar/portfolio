import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <section className='container'>
        <div className='hello'>
          <p>
            <span >
              Hello, <br /> welcome to my <br />
              <span className='span-orange'>
                portfolio
              </span>
              <span> page :) </span>
            </span>
          </p>
          <button className='btn btn-orange'>
            About me
          </button>
        </div>
        <div>
          <figure>
            <img className='img-home' src="/home-img.svg" alt='Home image about web development' />
          </figure>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;