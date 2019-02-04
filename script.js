
new Vue({
  el:'#root',
  data:{
    name:'',
    password:'',
    mail:'',
    address:''
  },
  methods:{
    onClick(){
      alert('Success')
    }
  },
  computed:{
    fieldsFilled(){
      return this.name && this.password && this.mail && this.address
    }
  }
})