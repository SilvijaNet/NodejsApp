// new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue.js!'
//     }
//   });

// new Vue({
//   el: '#app',
//   data: {
//     product: 'T-shirt',
//     inStock: true,
//     inventory: 20
//   }
// }); //this working also

var eventBus = new Vue()

Vue.component('product', {
  props: {
     premium: {
       type: Boolean,
       required: true
     }
  },
  template: `
    <div class="product">
            
      <div class="col-md-3 col-sm-10 product-image">
          <img v-bind:src="image">
      </div>
      <div class="col-md-4 col-xs-10 product-info">
          <h1>{{ title }}</h1> <!-- <h1>{{ brand }} {{ product }}</h1> -->
          <h2 :style="{ color: color}">I love my {{ product }}</h2>
          <!-- <p v-if="inStock">In stock</p> -->
          <p v-show="inStock">In stock</p>
          <!-- <p v-if="inventory > 10">Bigger inventory</p>
          // <p v-else-if="inventory <=10 && inventory > 0">Allmost sold out</p> -->
          <p v-else>Out of stock</p>
          <p>Shipping: {{ shipping }}</p>

          <ul>
              <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div v-for="variant in variants" :key="variant.variantId">
              <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor}}</p>
          </div>

          <button v-on:click="addToCart" :disabled="!inStock">Add to cart</button> <!-- v-on:click="cart += 1" one way -->
          <div class="cart">
              <p>Cart({{ cart }})</p>
          </div>
      </div>
      <product-tabs :reviews="reviews"></product-tabs>
      
    </div>
  `,
  data(){
    return{
      product: 'Boots',
      brand: 'Vue Mastery',
      image: './Node_tutorial/boots2.jpg',
      color: 'blue',
      inStock: true,
      inventory: 8,
      details: ["80% cotton", "20% poliester", "Gender-neutral"],
      variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: './Node_tutorial/greenb.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './Node_tutorial/blueb.jpg'
      }
    ],
    reviews: [],
    cart: 0
    }
  },
  methods:{
    addToCart(){
      this.cart += 1;
    },
    updateProduct(variantImage){
      this.image = variantImage;
    }
    // addReview(productReview){
    //    this.reviews.push(productReview);
    // }
  },
  computed:{
    title(){
      return this.brand + ' ' + this.product;
    },
    shipping(){
      if(this.premium)
         return "Free"
      return 2.99
    }
  },
  mounted(){
    eventBus.$on('review-submitted', productReview =>{
        this.reviews.push(productReview);
    });
  }
});

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
         <b>Please correst the following error(s):</b>
         <ul>
           <li v-for="error in errors">{{ error }}</li>
         </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit">  
      </p> 
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
     onSubmit(){
       if(this.name && this.review && this.rating){
        let productReview ={
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        eventBus.$emit('review-submitted', productReview)
        this.name = null,
        this.review = null,
        this.rating = null
       }
       else{
         if(!this.name) this.errors.push("Name required.")
         if(!this.review) this.errors.push("Review required.")
         if(!this.rating) this.errors.push("Rating required.")
       }
     }
  }
});

Vue.component('product-tabs', {
  props: {
     reviews: {
       type: Array,
       required: true
     }
  },
  template: `
     <div>
        <span class="tab" 
             :class="{activeTab: selectedTab === tab}" 
             v-for="(tab, index) in tabs" 
             :key="index" 
             @click="selectedTab = tab">
          {{ tab }}</span>

      <div class="col-md-2 col-xs-10" v-show="selectedTab === 'Reviews'">
        <!-- <h2>Reviews</h2> -->
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul v-else>
           <li v-for="(review, index) in reviews" :key="index">
           <p>{{ review.name }}</p>
           <p>Rating: {{ review.rating }}</p>
           <p>{{ review.review }}</p>
           </li>
        </ul>
      </div>
      <product-review v-show="selectedTab === 'Make a review'">
      </product-review>

     </div>
  `,
  data(){
    return{
      tabs: ['Reviews', 'Make a review'],
      selectedTab: 'Reviews'
    }
  }
})

var appProduct = new Vue({
  el: '#app',
  data: {
    premium: false
  }
});
