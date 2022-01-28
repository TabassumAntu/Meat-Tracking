<template>
  <div class="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="row mt-5 mb-5">
      <div class="col-12 offset-2 mt-5">
        <div class="card">
          <div class="card-header bg-info">
            <h3 class="text-white">Shipping</h3>
          </div>
          <div class="card-body">
            <div class="row text-center  justify-content-around">
              <div class="col-50">
                <h3>Shipping Details</h3>
                <label for="first-name">First Name</label>
                <input class="form-control" type="text" id="first-name" name="cardname" placeholder="John More Doe">
                <label for="last-name">Last Name</label>
                <input class="form-control" type="text" id="last-name" name="cardname" placeholder="More Doe">
                <label for="address">Last Name</label>
                <input class="form-control" type="text" id="address" name="address" placeholder="Address">
                <label for="country">Country</label>
                <input class="form-control" type="text" id="country" name="country" placeholder="Country">
                <label for="city">City</label>
                <input class="form-control" type="text" id="city" name="city" placeholder="City">
                <label for="zip-code">Zip Code</label>
                <input class="form-control" type="text" id="zip-code" name="zip-code" placeholder="Zip Code">
              </div>
            </div>

            <div class="d-flex flex-row-reverse">
              <router-link
                  :to="{name: 'payment'}"
                  class="btn btn-primary mt-4">
                Payment
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
<style scoped>
@import url("https://rsms.me/inter/inter.css");

:root {
  --color-gray: #737888;
  --color-lighter-gray: #e3e5ed;
  --color-light-gray: #f7f7fa;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

body {
  margin: 0;
}

h1 {
  margin-bottom: 1rem;
}

p {
  color: var(--color-gray);
}

hr {
  height: 1px;
  width: 100%;
  background-color: var(--color-light-gray);
  border: 0;
  margin: 2rem 0;
}

.container {
  max-width: 40rem;
  padding: 10vw 2rem 0;
  margin: 0 auto;
  height: 100vh;
}

.form {
  display: grid;
  grid-gap: 1rem;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-lighter-gray);
  padding: .5rem;
  border-radius: .25rem;
}

.field__label {
  color: var(--color-gray);
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.25rem
}

.field__input {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
}
.field:focus-within {
  border-color: #000;
}

.fields {
  display: grid;
  grid-gap: 1rem;
}
.fields--2 {
  grid-template-columns: 1fr 1fr;
}
.fields--3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.button {
  background-color: #000;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  display: block;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  outline: 0;
}
.button:focus-visible {
  background-color: #333;
}
</style>
