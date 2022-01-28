<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-8 offset-2 mt-5">
        <div class="card">
          <div class="card-header bg-info">
            <h3 class="text-white">Your Order Confirmation!</h3>
          </div>
          <div class="card-body">
            <h2>You have just selected: </h2>
            <div class="row text-center  justify-content-around">
              <div v-for="product in cartProducts" :key="product.id" class="card col-sm-5 p-0 mt-3 m-2">
                <product :product="product"></product>
              </div>
              <div v-if="cartProducts.length === 0" class="section">
                <p>{{ noProductLabel }}</p>
              </div>
            </div>

            <div class="d-flex flex-row-reverse">
              <router-link
                  :to="{name: 'shipping-form'}"
                  class="btn btn-primary mt-4">
                Shipping
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
