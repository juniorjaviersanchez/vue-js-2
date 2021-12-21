new Vue({
  el : '#app',

  data () {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -5,
      price: 300,
      prices: [100,200,300,400,500],
      pricesWithDays: [
        {day:'Lunes', value:'500'},
        {day:'Martes', value:'300'},
        {day:'Miercoles', value:'800'},
        {day:'Jueves', value:'900'},
        {day:'Viernes', value:'800'},
        {day:'Sábado', value:'100'},
        {day:'Domingo', value:'400'}
      ],
      color: 'f4f4f4',
      showPrices: false
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('');
    }
  }
})