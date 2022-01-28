<template>
  <div>
    <div class="container">

      <div v-if="role !== 'user'" class="container">
        <create-item/>
      </div>

      <div class="d-flex flex-row-reverse">

        <router-link
            v-show="(productsAdded.length > 0)"
            class="btn btn-danger "
            :to="{name: 'checkout'}">
          Checkout
        </router-link>
      </div>

        <!--        Products    -->
        <div class="row text-center  justify-content-around">
                <div class="card col-sm-3 p-0" v-for="product in products" :key="product.id">
                    <product :product="product"></product>
                </div>
                <div class="section" v-if="products.length === 0">
                    <p>{{ noProductLabel }}</p>
                </div>
        </div>
    </div>
    <hr>
    <footer class="container bg-secondary" style="margin-top: 100px">
      <div class="d-flex justify-content-center ">
        <router-link
            class="btn btn-link "
            :to="{name: 'conditions'}">
          privacy and conditions
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import Product from "../components/product";
import CreateItem from "../components/CreateItem.vue";

export default {
    name: "products-index",

    components: { Product, CreateItem},

    data () {
        return {
            id: '',
            noProductLabel: 'No product found',
            productsFiltered: [],
            role: ''
        };
    },

    computed: {
        products () {
            if (this.$store.state.userInfo.hasSearched) {
                return this.getProductByTitle();
            } else {
              return this.$store.state.products.filter(product => product.status !== 'Delivered');
            }
        },
        productsAdded() {
          return this.$store.getters.productsAdded;
        }
    },

    methods: {
        // getProductByTitle () {
        //     let listOfProducts = this.$store.state.products,
        //         titleSearched = this.$store.state.userInfo.productTitleSearched;
        //
        //     return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
        // }
    },
  created() {
    fetch("http://127.0.0.1:8000/getRole")
        .then(response => response.json())
        .then(data => (this.role = data.role));
  }
}
</script>

<style lang="scss" scoped>
.card {
    margin: 5px;
}
</style>
