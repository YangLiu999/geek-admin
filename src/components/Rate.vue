<template>
    <div :style="fontstyle">
        <!-- {{ rate }} -->
        <!-- 改造实现评级效果 -->
        <div class='rate' @mouseout="mouseOut">
            <span @click="onRate(num)" @mouseover="mouseOver(num)"  v-for='num in 5' :key="num">☆</span>
            <!-- 设置实心五角星★的宽度,实现一样的评级效果 -->
            <span class='hollow' :style="fontwidth">         
                <span @mouseover="mouseOver(num)" v-for='num in 5' :key="num">★</span>       
            </span>
        </div>
    </div>
</template>

<script setup>
    import {defineProps,defineEmits,computed,ref} from 'vue';
    let props = defineProps({
        modelValue: Number,
        // 根据传递的 theme 计算出颜色,并且使用 :style 渲染
        theme:{type:String,default:'orange'}
    })
    console.log(props)
    let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value,10 - props.value));

    const themeObj = {
        'black': '#00',
        'white': '#fff',
        'red': '#f5222d', 
        'orange': '#fa541c', 
        'yellow': '#fadb14', 
        'green': '#73d13d', 
        'blue': '#40a9ff',
    }

    const fontstyle = computed(()=> {     
        return `color:${themeObj[props.theme]};`
    })

    //评分宽度
    let width = ref(props.value)
    
    function mouseOver(i){
        width.value = i
    }
    function mouseOut(){
        width.value = props.value
    }
    const fontwidth = computed(()=>`width:${width.value}em;`)

    // 使用 defineEmit 来定义对外“发射”的数据,在点击评分的时候触发
    // let emits = defineEmits('update-rate') // 定义emits 
    let emits = defineEmits('update:modelvalue') 
    function onRate(num) { 
        emits('update-rate', num) 
    }

</script>

<style scoped>
    .rate {
        position: relative;
        display: inline-block;
    }
    .rate>span.hollow {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0;
        overflow: hidden;
    }
</style>