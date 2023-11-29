import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    name: '',
    review: '',
    rating: null,
    reviews: [],
    cart: [],
    product: 'T-shirt',
    brand: 'Gekkode',
    selectedVariant: 0,
    premium: true,
    details: ['60% coton', '30% laine', '10% polyester'],
    variants: [
      { id: 2234, color: '#0000FF' , image: 'src/assets/images/t-shirt-bleu.png', quantity: 9},
      { id: 2235, color: '#FF0000' , image: 'src/assets/images/t-shirt-rouge.png', quantity: 11}
    ]
  }),
  actions: {
    addToCart(id) {
      this.cart.push(id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    onSubmit()  {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert('L\'évaluation est incomplète. Veuillez remplir tous les champs.')
        return
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      }

      this.reviews.push(productReview)

      this.name = ''
      this.review = ''
      this.rating = null
    }
  },
  getters: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Gratuit'
      }
        return "2,99€"
    }
  }


});
