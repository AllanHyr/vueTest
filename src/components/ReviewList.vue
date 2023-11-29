<template>
    <div class="review-container">
        <h3>Avis:</h3>
        <ul>
            <li v-for="(review, index) in stores.reviews" :key="index">
                {{ review.name }} a donné {{ review.rating }} étoiles
                <br/>
                "{{ review.review }}"
                <br/>
            </li>
        </ul>
  </div>
</template>

<script setup>
import { useTestStore } from '../stores/stores';

const stores = useTestStore();
</script>