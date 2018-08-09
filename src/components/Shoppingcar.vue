<template>
  <div class="login">


<div class="panel panel-default" >
  <div class="panel-body">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>课程</th>
          <th>有效期</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-for='item in msg'>
          <tr>
             <td>{{item.name}}</td>
             <td>
                  <!-- 双向绑定价格策略，当价格策略发生改变时 后面的价格会改变 -->
                  <select v-model="item.default_price_id" 
                          v-on:change="indexSelect(item.id,item.default_price_id)"
                           >
                    <!-- 循环打印出所有的价格策略 -->
                    <option  v-for=' price_policy in item.price_policy_dict ' 
                            v-bind:value="price_policy.id"  
                             >
                     {{price_policy.valid_period_display}} 
                    </option>
                   
                  </select>


             </td>
             <!-- 显示价格 根据价格策略的改变而改变 -->
             <td>{{item.price_policy_dict[item.default_price_id]['price']}}</td>
             <!-- <td>{{price}}</td> -->
             <!-- 删除按钮 -->
             <td><a href="javascript:void(0)" v-on:click='delcurse(item.id)'>删除</a></td>
          </tr>


      </tbody>
    </table>
      
  </div>
</div>


  </div>

</template>
<script>
export default {
  name: 'course',
  data () {
    return {
      msg:[
      ],
      default_id:'',
      xx:'',
      mssage:{
        'course_id':'',
        'price_id':'',
      }

    }
  },
  // 加载的时候执行
  mounted(){
      this.initShoppingCar();
      // this.testCors();
  },
  methods:{
      initShoppingCar:function(){
        var that=this
        this.$axios.request({
          url:'http://127.0.0.1:8008/api/v1/shoppingcar/',
          method:'GET',
          responseType:'json'
        }).then(function(arg){
            console.log(arg.data)
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
      delcurse:function(delcurse_id){
        var delcurse_id=delcurse_id
        var that=this
        this.$axios.request({
          url:`http://127.0.0.1:8008/api/v1/shoppingcar/?courseid=${delcurse_id}`,
          method:'DELETE',
          responseType:'json'
        }).then(function(arg){
            window.location.reload();刷新
            console.log(arg.data)
        }).catch(function(arg){
          console.log(arg)
        })

      },
      //发送post请求
      indexSelect:function(c_id,p_id){
        this.mssage['course_id']=c_id
        this.mssage['price_id']=p_id
        console.log( this.mssage);
        var that=this
        this.$axios.request({
          url:'http://127.0.0.1:8008/api/v1/shoppingcar/',
          method:'PUT',
          responseType:'json',
          data:this.mssage
        }).then(function(arg){
            console.log(arg.data)
        }).catch(function(arg){
          console.log(arg)
        })

      }
  }
}
</script>
<style scoped>
</style>
