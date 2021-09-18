import '../product.css';

function products(){
    return (
        <div className="products">
            <div className="filterby_Header">
                <h6>Filter by: </h6>
                <div class="dropdown">
                    <button class="drpdwn_btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Best Match
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="rmvfilter_btn dropdown-item" href="#">Remove Filter</button>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="drpdwn_btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Top Sellers
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="rmvfilter_btn dropdown-item" href="#">Remove Filter</button> 
                    </div>
                </div>
                <h6 className="result_status">1 - 48 of 1836 results</h6>
            </div>
            
            <div className="filter_section">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card bg-light mb-2" style={{maxWidth: '18rem'}}>
                                <div class="card-header">Brand</div>
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Adidas
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                            <label class="form-check-label" for="defaultCheck2">
                                                Campus
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                            <label class="form-check-label" for="defaultCheck3">
                                                Sparx
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                            <label class="form-check-label" for="defaultCheck4">
                                                ASIAN
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="card bg-light mb-2" style={{maxWidth: '18rem'}}>
                                <div class="card-header">New Arrivals</div>
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Last 30 Days
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                            <label class="form-check-label" for="defaultCheck2">
                                                Last 45 Days
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                            <label class="form-check-label" for="defaultCheck3">
                                                Last 60 Days
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                            <label class="form-check-label" for="defaultCheck4">
                                                All Time
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="card bg-light mb-2" style={{maxWidth: '18rem'}}>
                                <div class="card-header">Rating</div>
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                            <label class="form-check-label" for="defaultCheck2">
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                            <label class="form-check-label" for="defaultCheck3">
                                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                            <label class="form-check-label" for="defaultCheck4">
                                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                                            <label class="form-check-label" for="defaultCheck5">
                                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                                <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="card bg-light mb-2" style={{maxWidth: '18rem'}}>
                                <div class="card-header">Price Range</div>
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Under Rs. 2000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                            <label class="form-check-label" for="defaultCheck2">
                                                Above Rs.  and Under Rs. 5000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                            <label class="form-check-label" for="defaultCheck3">
                                                Above Rs. 5001 and Under Rs. 10000
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                            <label class="form-check-label" for="defaultCheck4">
                                                Above Rs.10000
                                            </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="products_section">
                <div class="card-deck">
                    <div class="card">
                        <img className="product_img" src="https://m.media-amazon.com/images/I/71+GpJy4ocL._UL1500_.jpg" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Sparx</h5>
                            <p class="card-text">Men's Sd0323g Stylish Sneakers</p>
                            <p className="price">Rs. 1149.00</p>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                            <button className="addtocart_btn" type="button">Add to Cart</button>
                            <button className="addtowishlist_btn" type="button">Add to Wishlist</button>
                        </div>
                    </div>
                    <div class="card">
                        <img className="product_img" src="https://m.media-amazon.com/images/I/41vbb1nLA7L.jpg" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">D Shoes</h5>
                            <p class="card-text">Sports Running Shoes for Men's</p>
                            <p className="price">Rs. 749.00</p>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                            <button className="addtocart_btn" type="button">Add to Cart</button>
                            <button className="addtowishlist_btn" type="button">Add to Wishlist</button>
                        </div>
                    </div>
                    <div class="card">
                    <div><img className="product_img" src="https://m.media-amazon.com/images/I/71-IgJCFM1S._UL1500_.jpg" alt="..."/></div>
                        <div class="card-body">
                            <h5 class="card-title">SHOE BLATE</h5>
                            <p class="card-text">Men's Black Wh Mesh Sports Running Stylish Shoes</p>
                            <p className="price">Rs. 2249.00</p>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_orange_star.png?raw=true" alt=""></img>
                            <img src="https://github.com/mohitsinghal07/The-everything-store/blob/master/public/imgs/png_grey_star.png?raw=true" alt=""></img>
                            <button className="addtocart_btn" type="button">Add to Cart</button>
                            <button className="addtowishlist_btn" type="button">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default products;