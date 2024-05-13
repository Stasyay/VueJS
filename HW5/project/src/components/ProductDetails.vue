<template>
<div>
    <p>Product: {{ product.name }}</p>
    <p>Price: {{ formattedPrice }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>
</div>

</template>

<script>
export default {
  name: 'ProductDetails',

  data() {
    return {
      product: 
        {
            id: 1,
            name: 'Product 3',
            price: 99.99,
            available: true
        }
    
    };
  },

  computed: {
    formattedPrice() {
       return '$' + this.product.price
    }
  }
};
</script>