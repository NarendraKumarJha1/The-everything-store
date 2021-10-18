
import React from "react";
import ReactDom from "react-dom";
import '../homepage.css';
import Footer from "./Footer";

export default function Home() {
  return <div>
    <div class="row head">
      <marquee class="wrapper" width="104%" direction="left" height="100px">
        <h5 class="black-lives-matter">Welcome to The-Everything-Store</h5>
      </marquee>
      <div class="col-lg-3 col-md-2">
        <p class="jump">Buy Now!!</p>
      </div>
      <div class="col-lg-6 col-md-2">
        <h2 class="buy-head"><b>Buy more than 1500</b></h2>
        <h4 class="buy-h4">and get discount up to <b>15%.</b></h4>
      </div>
      <div class="col-lg-3 col-md-2">
        <p class="jump jump-two">Buy Now!!</p>
      </div>
    </div>


    <section id="testimonials" />

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1500">

<div class="carousel-inner">
  <div class="carousel-item active">
    <h2><b>Great saving on mobiles.<br />Started from 9899.</b></h2>
    <img class="testimonials-img" src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/mobile.png?raw=true" alt="" />
  </div>

  <div class="carousel-item">
    <h2 class="testimonial-text"><b>Watches and SmartWatches<br />Discount up to 60%</b></h2>
    <img class="testimonials-img" src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/watch.png?raw=true" alt="" />
  </div>

  <div class="carousel-item">
    <h2 class="testimonial-text"><b>Up to 80% off<br />Bestselling handbags and duffle bags</b></h2>
    <img class="testimonials-img" src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/bag.jpg?raw=true" alt=" " />
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>


    <div>
      <h3 class="dealhead"><b>Today's Deals</b></h3>
      <button type="button" class=" show-more btn btn-primary">Show more</button>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img class="deal-img" src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>
    </div>
   
<hr/>

    <div class="row">
      <div class="col-lg-3 col-md-6">
      <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>            
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>


      <div class="col-lg-3 col-md-6">
        <div class="card home-card">
          <img src="https://github.com/nitinpandey02/The-everything-store/blob/experimental/public/imgs/jeans.png?raw=true" alt="" />
          <h2>Tailored Jeans</h2>
          <p class="price">Rs.499/-</p>
          <p>It is comfortable and branded</p>
          <p><button>Add to Cart</button></p>
        </div>
      </div>
    </div>
   <br/><br/>
  </div>
}