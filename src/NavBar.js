import './NavBar.css';

function NavBar() {
    return (
      <div className="navBar">
        <img className="navBar_logo" src="https://media-exp1.licdn.com/dms/image/C5603AQELycWmeWnu_w/profile-displayphoto-shrink_100_100/0/1601472696349?e=1635379200&v=beta&t=KAx03PzTMTPrwbKNzzTZmEdmPIvF_AmfS9gKZDCrWQE" alt="The Everything Store logo"/>
        
        <div className="navBar_search">
            <input className="navBar_searchInput" type="text"/>
        </div>
        <div className="navBar_cartBtn">
            
            <img src="http://localhost//file:/C:/Users/Mohit Singhal/Documents/GitHub/The-everything-store/public/imgs/logo - The Everything Store.png" alt="basket-icon"/>

        </div>
      </div>
    );
  }

  export default NavBar;