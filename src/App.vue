<template>
  <div id="app">
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">路飞学城</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <!-- 循环所有路由加入导航栏 -->
        <router-link 
          v-for="(route, index) in allRoutes"
          v-bind:to="route.path"
          v-bind:key=index
          tag='li'
          activeClass='active'
          exact
        >
        <a>{{route.name}}</a>
        </router-link>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    <router-view/>
     <!-- <router-view v-if="isRouterAlive"></router-view> -->
  </div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'App',
  data:function(){
    return {
    }
  },
  
  computed:{
    allRoutes:function(){
      return this.$router.options.routes
    },
  // provide(){

  //  		return{
  //  			reload:this.reload
  //  		}
  //  },

  // methods:{
  //  	 reload(){

  //  	 	this.isRouterAlive=false
  //  	 	this.$nextTick(function(){

  //  	 		this.isRouterAlive=true

  //  	 	})


  //  	 }
  //  }
  }
}
</script>

<style>
</style>
