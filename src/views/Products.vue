<template>
  <div class="product">
    <h1>This is an products page</h1>
    <h2>{{ str }}</h2>
  </div>
</template>
<script>
export default {
  data(){
    return{
      str:``,
      product:[],
    }
  },
  created(){
    this.str = process.env.VUE_APP_APIPATH;
    this.axios.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((response) => {
      console.log(response)
      })
  },

};
</script>