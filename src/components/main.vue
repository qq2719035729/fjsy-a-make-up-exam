<template>
  <div class="hello ">
	  
        <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  provide(){
	  return{
		  reload:this.reload
	  }
  },
  data(){
	  return{
		 isRouterAlive:true	
	  }
  },
  methods:{
	  reload(){
		  this.isRouterAlive=false;
		  this.$nextTick(function(){
			  this.isRouterAlive=true
		  })
	  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
