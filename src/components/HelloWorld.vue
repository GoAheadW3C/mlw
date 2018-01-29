<template>
  <div class="home">
        <div class="bottom-content" style="width: 100%;height:400%;background: blue;">
          <div class="top-content" style="width: 100%;height: 100%;background: yellow;"></div>
          <ul>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
            <li>8</li>
          </ul>
        </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'HelloWorld',
  data () {
    return {
      content_height:window.document.body.clientHeight
    }
  },
  mounted(){
      this.content = new BScroll('.home',{
        scrollX:false,
        probeType:3
      });

      this.content.on('scroll',(pos) => {
        if(pos.y/this.content_height >= 0.2){
          //更改显示的内容

          //滚动到制定位置
          this.content.scrollTo(0,this.content_height,1000);
        }else{

        }
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home{
  width: 100%;
  height: 100%;
  background: red;
  overflow: hidden;
  position: relative;
}
.content{
  width: 100%;
  height: 100%;
}
.top-content{
  position: absolute;
  left: 0;
  top: -100%;
}
.bottom-content{
  position: absolute;
  left: 0;
  top: 0;
}
</style>
