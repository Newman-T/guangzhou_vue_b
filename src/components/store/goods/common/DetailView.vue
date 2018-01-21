<template>
    <div class="magnifier" id="magnifier1">
        <div class="magnifier-container">
            <div class="images-cover"></div>
            <!--当前图片显示容器-->
            <div class="move-view"></div>
            <!--跟随鼠标移动的盒子-->
        </div>
        <div class="magnifier-assembly">
            <div class="magnifier-btn">
                <span class="magnifier-btn-left">&lt;</span>
                <span class="magnifier-btn-right">&gt;</span>
            </div>
            <!--按钮组-->
            <div class="magnifier-line">
                <ul class="clearfix animation03">
                    <li v-for="item in imglist" :key="item.id">
                        <div class="small-img">
                            <img :src="item.original_path" />
                        </div>
                    </li>
                </ul>
            </div>
            <!--缩略图-->
        </div>
        <div class="magnifier-view"></div>
        <!--经过放大的图片显示容器-->
    </div>
</template>

<script>
import $ from "jquery";
import "@/lib/jQueryMagnifier/css/magnifier.css";
import "@/lib/jQueryMagnifier/js/magnifier11.js";
export default {
    props: ["imglist"],
    mounted() {
        var magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 500, //承载容器宽
            height: 500, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 5 //缩放比例
        };

        var _magnifier = $().imgzoon(magnifierConfig);
        // $('#magnifier1').imgzoon(magnifierConfig);
        // var _magnifier = magnifier(magnifierConfig);
    }
};
</script>

<style scoped>

</style>