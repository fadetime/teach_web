<template>
    <div id="promotions">
        <div class="promotions_part1">
            <div class="promotions_part1_img">
                <img src="../../public/img/pic/promotions/promotions.jpg">
            </div>
            <div class="promotions_part1_test">
                <span>Promotions</span>
            </div>
        </div>
        <div class="promotions_part2">
            <img src="../../public/img/pic/promotions/ebuy.jpg">
        </div>
    </div>
</template>

<style scoped>
.promotions_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.promotions_part1_img{
    width: 1024px;
    height: 200px;
}
.promotions_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.promotions_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.promotions_part2{
    margin: 40px 0;
}
</style>