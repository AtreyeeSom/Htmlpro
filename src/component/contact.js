import React from 'react'

const Contact = () => {
  return (
    <div>
         <header classNameName="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="#">
          <div className="logo_box">
            <img src="images/logo.png" alt="" />
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-2">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/serv">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/con">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control nav_search-input mr-sm-2 d-none" type="search" placeholder="Search"
              aria-label="Search" value="" />
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
          </form>
        </div>
      </nav>
    </div>
  </header>
  
  <section className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-6">
          <div id="map" className="h-100 w-100 ">
          </div>
        </div>
        <div className=" col-md-6 contact_form-container">
          <div className="contact_box">
            <form action="">
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
              <input type="text" placeholder="Phone Number"/>
              <input type="text" placeholder="Message"/>
              <div>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    
  </section>

  
  <section className="info_section layout_padding">
    <div className="container">
      <div className="row">
        <div className=" col-md-4 info_detail">
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
        <div className=" col-md-4 address_container">
          <div>
            <h3>
              Address:
            </h3>
            <div className="address_link-container">
              <a href="">
                <img src="images/location.png" alt=""/>
                <span> Address: 73 Canal Street, New York, NY
                </span>
              </a>
              <a href="">
                <img src="images/phone.png" alt=""/>
                <span> Tel: +1 123 456 789
                </span>
              </a>
              <a href="">
                <img src="images/mail.png" alt=""/>
                <span>
                  Email: demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 news_container">
          <div>
            <div>
              <h3>
                newsletter

              </h3>
              <form action="">
                <input type="email" placeholder="ENTER YOUR EMAIL"/>
                <div>
                  <button type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="social_container">
              <div>
                <img src="images/fb.png" alt=""/>
              </div>
              <div>
                <img src="images/twitter.png" alt=""/>
              </div>
              <div>
                <img src="images/linkedin.png" alt=""/>
              </div>
              <div>
                <img src="images/youtube.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  


  
  <section className="container-fluid footer_section">
    <p>
      Copyright &copy; 2019 All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
  

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js">
  </script>
  {/* <script type="text/javascript">
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: [],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  </script>

  <script>
    $(".nav_search-btn").click(function () {
      if ($(".nav_search-input").hasclassName("d-none")) {
        event.preventDefault();
        $(".nav_search-input")
          .animate({
              left: "-1000px"
            },
            "1000000"
          )
          .removeclassName("d-none");
      } else {
        $(".nav_search-input")
          .animate({
              left: "0px"
            },
            "1000000"
          )
          .addclassName("d-none");
      }
    });
  </script>

  <script>
    // This example adds a marker to indicate the position of Bondi Beach in Sydney,
    // Australia.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 40.645037,
          lng: -73.880224
        },
      });

      var image = 'images/maps-and-flags.png';
      var beachMarker = new google.maps.Marker({
        position: {
          lat: 40.645037,
          lng: -73.880224
        },
        map: map,
        icon: image
      });
    }
  </script> */}
 
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap">
  </script>
    </div>
  )
}

export default Contact