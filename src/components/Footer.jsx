import '../Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div class="row">
                <div class="column">
                    <img className="footer_logo" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/864ec289838c6edcb7bd7a12acbbfa9389cc5a23/public/imgs/logo%20-%20The%20Everything%20Store.svg" alt="The Everything Store logo"/>
                </div>
                <div class="column" id="wrapper">
                    <h6>Get to know Us</h6>
                    <ul class="list-unstyled">
                        <li><a href="">About us</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press Releases</a></li>
                    </ul>
                </div>
                <div class="column" id="wrapper">
                    <h6>Connect with Us</h6>
                    <ul class="list-unstyled">
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
                <div class="column" id="wrapper">
                    <h6>Make money with Us</h6>
                    <ul class="list-unstyled">
                        <li><a href="">Selling</a></li>
                        <li><a href="">Marketing</a></li>
                        <li><a href="">Advertisements</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy">
                <p className="copyright">© Copyright 2021-2022 The Everything Store</p>
            </div>
        </div>

  

    );
}

export default Footer;