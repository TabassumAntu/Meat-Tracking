<template>
  <div class="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="row mt-5 mb-5">
      <div class="col-8 offset-2 mt-5">
        <div class="card">
          <div class="card-header bg-info">
            <h3 class="text-white">Your Order Confirmation!</h3>
          </div>
          <div class="card-body">
            <h2>You have just selected: </h2>
            <div class="row text-center  justify-content-around">
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style="color:navy;"></i>
                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                  <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input class="form-control" type="text" id="cname" name="cardname" placeholder="John More Doe">
                <label for="ccnum">Credit card number</label>
                <input class="form-control" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                <label for="expmonth">Exp Month</label>
                <input class="form-control" type="text" id="expmonth" name="expmonth" placeholder="September">
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input  class="form-control" type="text" id="expyear" name="expyear" placeholder="2018">
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input  class="form-control" type="text" id="cvv" name="cvv" placeholder="352">
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row-reverse">
              <router-link
                  :to="{name: 'shipping'}"
                  class="btn btn-primary mt-4">
                Proceed to Delivery
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/product";

export default {
  name: 'checkout',
  components: {Product},
  data() {
    return {
      id: '',
      noProductLabel: 'No product found',
      deliveryMethod: ''
    };
  },
  computed: {
    cartProducts() {
      return this.$store.state.products.filter(product => product.isAddedToCart);
    },
  }
}
</script>
