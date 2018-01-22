<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link :to="{ name:'goodsList' }">首页</router-link>&gt;
                <router-link to="">商品详情</router-link>

            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--图片预览-->
                            <div class="pic-box">
                                <detail-view :imglist="goods.imglist"></detail-view>
                            </div>
                            <!--商品信息-->
                            <detail-info :goods="goods.goodsinfo"></detail-info>
                        </div>
                        <!-- 商品详情与评论 -->
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <el-tabs value="first" type="card">
                                <el-tab-pane label="商品介绍" name="first">
                                    <div v-html="goods.goodsinfo.content" class="tab-content entry" style="display:block;">详情介绍</div>
                                </el-tab-pane>
                                <el-tab-pane label="商品评论" name="second">
                                    <div class="tab-content" style="display: block;">
                                        <comment tablename="goods"></comment>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <!-- 复用之前封装好的侧边栏列表组件 -->
                                <slide-list :list="goods.hotgoodslist"></slide-list>
                            </div>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SlideList from "./common/SlideList";
import DetailView from "./common/DetailView";
import DetailInfo from "./common/DetailInfo";
import Comment from "./common/Comment";
export default {
  data() {
    return {
      id: null,
      goods: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },
  watch: {
    $route() {
      //   console.log(1)
      this.id = this.$route.params.id;
      this.getGoods();
    }
  },
  methods: {
    getGoods() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        //   console.log(2)
        this.goods = res.data.message;
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getGoods();
  },
  components: {
    SlideList,
    DetailView,
    DetailInfo,
    Comment
  }
};
</script>

<style scoped>

</style>