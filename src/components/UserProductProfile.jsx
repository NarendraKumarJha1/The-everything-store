import React from "react";
import ReactDOM from "react-dom";
import "../UserProductPro.css";
import "../index.css";

function UserProductProfile() {
  return (
    <section>
      <div>
        <body>
          <header className="main-header">
            <title>Products Gallery</title>
            <h1>
              <span>Product Gallery</span>Below
            </h1>
            <p>All your Live Products is listed below</p>
          </header>
          <main className="container">
            <section className="card">
              <img
                src="https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
                alt=""
              />
              <div>
                <h3>#product1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
                <a href="#" className="btn"></a>
              </div>
            </section>

            <section className="card" data-aos="fade-left">
              <img
                src="https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
                alt=""
              />
              <div>
                <h3>#product2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
                <a href="#" className="btn"></a>
              </div>
            </section>

            <section className="card" data-aos="fade-left">
              <img
                src="https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
                alt=""
              />
              <div>
                <h3>#product3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
                <a href="#" className="btn"></a>
              </div>
            </section>

            <section className="card" data-aos="fade-left">
              <img
                src="https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
                alt=""
              />
              <div>
                <h3>#product4</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum
                </p>
                <a href="#" className="btn"></a>
              </div>
            </section>
          </main>
        </body>
      </div>
    </section>
  );
}

export default UserProductProfile;

{
  /* 

 */
}
