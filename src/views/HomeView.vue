
<template>
  <div class="cart">Panier ({{ stores.cart.length }})</div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="stores.image">
      </div>
      <div>
        <h1 >{{ stores.title }}</h1>
        <div class="variants-wrapper">
          <div v-for="(variant, index) in stores.variants" 
          :key="variant.id" 
          @mouseover="stores.updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
          </div>
        </div>
        <p v-if="stores.variants[stores.selectedVariant].quantity > 10">En stock</p>
        <p v-else-if="stores.variants[stores.selectedVariant].quantity <= 10 && stores.variants[stores.selectedVariant].quantity > 0">Presque en rupture!</p>
        <p v-else>En rupture</p>
        <ul>
          <li v-for="detail in stores.details">{{ detail }}</li>
        </ul>
        <p>Livraison: {{ stores.shipping }}</p>
        <button 
          class="button" 
          :class="{ disabledButton: !stores.inStock }" 
          :disabled="!stores.inStock"
          @click="stores.addToCart(stores.variants[stores.selectedVariant].id)">
          Ajouter au panier
        </button>
      </div>
    </div>
    <ReviewList v-if="stores.reviews.length" :reviews="reviews"></Reviewlist>
    <ReviewForm></ReviewForm>
  </div>
</template>

<script setup>
import { useTestStore } from "../stores/stores";
import ReviewForm from "../components/ReviewForm.vue";
import ReviewList from "../components/ReviewList.vue";


const stores = useTestStore();

</script>
