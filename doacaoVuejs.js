Vue.component('fetch-data', {
  props: ['url'],
  data() {
     
    return {
      loaded: false,
      response: null,
    }
  },
  async mounted() {
    await axios.get(this.url)
       .then((response) => {
        this.response = response
        this.loaded = true
      })
    
  },
  /*
  computed:{
    fullName() {
      const valor = 10;
      return valor;
    }
  },*/ 
  
  render() {
    if (!this.loaded) {
      return this.$slots.loading[0]
    }

    return this.$scopedSlots.default({
      response: this.response.data,
    })
  },

});
/*

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
});

*/
new Vue({
    el: '#app1'
})
  