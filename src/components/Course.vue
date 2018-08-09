<template>
  <div class="course">
    <ul v-for='item in msg'>
    	<li>{{item.name}}
    		<div class="row">
			  <div v-for='price in item.pricepolicy' 
			  	class="col-md-4">
			  	<button type="button" 
			  			class="btn btn-default btn-lg"  
			  			v-on:click='gainprice(item.id,price.id,)'>
			  		{{price.price}}<br>{{price.valid_period_display}}
			  	</button>
			  </div> <br> <br> <br><br> 
			  <button type="button" 
			  		  class="btn btn-warning"
					  v-on:click='addcourse()'
			  		  >加入购物车</button>
			</div>
    </li>
    	
    </ul>
  </div>

</template>

<script>
export default {
  name: 'course',
  data () {
    return {
      msg:[{
      	'name':'python'},
      	{'name':'java'},
      	{'name':'c'}
      ],
      end_data:{'1':
      	{
      	'course_id':'',
      	'price_id':'',
      		}
}
    }
  },
  // 加载的时候执行
  mounted(){
      this.initCourse();
      // this.testCors();
 	},
  methods:{
  		initCourse:function(){
  			var that=this
  			this.$axios.request({
  				url:'http://127.0.0.1:8008/api/v1/course/',
  				method:'GET',
  				responseType:'json'
  			}).then(function(arg){
  				console.log(arg)
  				if (arg.data.code === 1000){
  					that.msg=arg.data.data

  				}else {
  					console.log(arg.data.error)
  					
  				}
  			}).catch(function(arg){
  				console.log(arg)
  			})
  		},
  		// 获取价格
  		gainprice:function(c_id,p_id){
  			// 将价格策略的id以及课程的id获取到并给data中end_price赋值
  			this.end_data['1']['course_id']=c_id;
  			this.end_data['1']['price_id']=p_id;
 			console.log(this.end_data);

  		},
  		//发送post请求
  		addcourse:function(){
  			var that=this
  			this.$axios.request({
  				url:'http://127.0.0.1:8008/api/v1/shoppingcar/',
  				method:'POST',
  				responseType:'json',
  				data:this.end_data
  			}).then(function(arg){
  				console.log(arg)
  				alert(arg.data.data)

  				
  			}).catch(function(arg){
  				alert(arg.data.error)
  			})

  		}
  }
}
</script>
<style scoped>
</style>
