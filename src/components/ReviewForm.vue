<template>
    `<form class="review-form" @submit.prevent="stores.onSubmit">
      <h3>Laissez un commentaire</h3>
      <label for="name">Nom:</label>
      <input id="name" v-model="stores.name">
  
      <label for="review">Avis:</label>      
      <textarea id="review" v-model="stores.review"></textarea>
  
      <label for="rating">Note:</label>
      <select id="rating" v-model.number="stores.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
  
      <input class="button" type="submit" value="Envoyer">  
    </form>`,
</template>
<script setup>
import { useTestStore } from '../stores/stores';
const stores = useTestStore();
</script>