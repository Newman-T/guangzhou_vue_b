<template>
    <div class="goods-spec">
        <h1>{{goods.title}}</h1>
        <p class="subtitle">{{goods.sub_title}}</p>
        <div class="spec-box">
            <dl>
                <dt>货号</dt>
                <dd id="commodityGoodsNo">{{goods.goods_no}}</dd>
            </dl>
            <dl>
                <dt>市场价</dt>
                <dd>
                    <s id="commodityMarketPrice">¥{{goods.market_price}}</s>
                </dd>
            </dl>
            <dl>
                <dt>销售价</dt>
                <dd>
                    <em class="price" id="commoditySellPrice">¥{{goods.sell_price}}</em>
                </dd>
            </dl>
        </div>

        <div class="spec-box">
            <dl>
                <dt>购买数量</dt>
                <dd>
                    <!-- element-ui计数器 -->
                    <el-input-number size="mini" v-model="number"></el-input-number>
                    <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goods.stock_quantity}}</em>件
                    </span>
                </dd>
            </dl>
            <dl>
                <dd>
                    <div class="btn-buy" id="buyButton">
                        <button class="buy">立即购买</button>
                        <button class="add" @click="add">加入购物车</button>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
  props: ["goods"],
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.$store.commit("modifyShopping", {
        id: this.$route.params.id,
        count: this.number + (this.$store.state.shopping[this.$route.params.id] || 0)
      });
    }
  }
};
</script>

<style scoped>

</style>