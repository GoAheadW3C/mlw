<template>
  <div class="home">
      <div class="second-floor">
        <div class="second-floor-content">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li>
          </ul>
        </div>
      </div>
      <div class="first-floor">
        <div class="first-floor-content">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li><li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'HelloWorld',
  data () {
    return {
      home_scroll: null,
      content_height:window.document.body.clientHeight
    }
  },
  mounted(){
      this.home_scroll = new BScroll('.home',{
      startY:-this.content_height*5/5,
      probeType:3
    });

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
}
.content-wrap{
  width: 100%;
  height: 200%;
}
.first-floor{
  width: 100%;
  height: 50%;
  background:blue;
  overflow: hidden;
}
.second-floor{
  width: 100%;
  height: 50%;
  background: green;
  overflow: hidden;
}
</style>
