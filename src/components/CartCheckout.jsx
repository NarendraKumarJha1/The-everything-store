import '../CartCheckout.css';


function CartCheckout() {
    return (
        <div className="cartCheckout">
          <div className="cart">
              <h6>Cart</h6>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><img className="cart_product_img" src="https://5.imimg.com/data5/PC/CQ/SG/SELLER-25796055/boat-rockerz-wireless-headphone-500x500.jpeg" alt="img"/>boat Headphone</th>
                        <td>
                            <div class="form-group col-md-5">
                                <input type="number" class="form-control" id="inputquantity"/>
                            </div>
                        </td>
                        <td>Rs. 1599.00</td>
                        <td>
                            <button className="wishlist_btn" type="button"><img className="wishlist" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/heart.svg" alt="img"/></button>
                            <button className="delete_btn" type="button"><img className="delete" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/delete.svg" alt="img"/></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row"><img className="cart_product_img" src="https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg" alt="img"/>Pendrive Sandisk 8 GB</th>
                        <td>
                            <div class="form-group col-md-5">
                                <input type="number" class="form-control" id="inputquantity"/>
                            </div>
                        </td>
                        <td>Rs. 899.00</td>
                        <td>
                            <button className="wishlist_btn" type="button"><img className="wishlist" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/heart.svg" alt="img"/></button>
                            <button className="delete_btn" type="button"><img className="delete" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/delete.svg" alt="img"/></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row"><img className="cart_product_img" src="https://5.imimg.com/data5/DJ/SF/IS/SELLER-8586032/hp-pendrive-2-0-32gb-500x500.jpg" alt="img"/>Pendrive HP 32 GB</th>
                        <td>
                            <div class="form-group col-md-5">
                                <input type="number" class="form-control" id="inputquantity"/>
                            </div>
                        </td>
                        <td>Rs. 1099.00</td>
                        <td>
                            <button className="wishlist_btn" type="button"><img className="wishlist" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/heart.svg" alt="img"/></button>
                            <button className="delete_btn" type="button"><img className="delete" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/125130ea07a77f6c1f4aac18775c762f80f608ab/public/imgs/delete.svg" alt="img"/></button>
                        </td>
                        </tr>
                    </tbody>
                </table>
          </div>

            <div className="billing_details">
                <h6>Billing Details</h6>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" id="firstname"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" id="lastname"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" class="form-control" id="inputAddress"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPhone">Phone Number</label>
                            <input type="text" class="form-control" id="inputPhone"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputState">State</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option value="1">Madhya Pradesh</option>
                                <option value="2">Rajasthan</option>
                                <option value="3">Uttar Pradesh</option>
                                <option value="4">Gujarat</option>
                                <option value="5">Uttarakhand</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"/>
                        
                        </div>
                    </div>
                </form>
            </div>

            <div className="paymentmethod">
                <h6>Payment Method</h6>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                    <label class="form-check-label" for="exampleRadios1">
                        Cash on Delivery
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                        Debit Card
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                    <label class="form-check-label" for="exampleRadios3">
                        Credit Card
                    </label>
                </div>
            </div>

            <div className="checkout">
                <h6>Checkout</h6>
                <div class="input-group">
                    <div class="form-row">
                        <div class="form-group col-md-13">
                            <label for="inputCoupon">Have a Coupon?</label>
                            <input type="text" class="form-control" id="inputCoupon"/>
                        </div>
                        <div class="input-group-append">
                            <button className="apply_button" type="button">Apply</button>
                        </div>
                    </div>
                </div> 
                <div className="gst">
                    <h8>CSGT + SGST</h8>
                    <h9 className="total_gst">Rs. 540.00</h9>
                </div>
                <div className="subtotal">
                    <h8>Subtotal</h8>
                    <h9 className="subtotal_amt">Rs. 3600.00</h9>
                </div>
                <hr/>
                <div className="totalprice">
                    <h8>Total Price</h8>
                    <h8 className="total_amt">Rs. 4000.00</h8>
                </div>
                <button className="confirm_purchase" type="button">Confirm Purchase</button>

            </div>

        </div>
    );
  }
  
  export default CartCheckout;