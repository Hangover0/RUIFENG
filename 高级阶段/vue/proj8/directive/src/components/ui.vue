<template>
  <div class="content">
    <p>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </p>

    <div class="box">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/1.png" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Ui',
  data(){
    return {

    }
  }
}
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
