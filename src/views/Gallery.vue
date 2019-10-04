<template>
    <div id="gallery">
        <div class="gallery_part1">
            <div class="gallery_part1_img">
                <img src="../../public/img/pic/environment/environment.jpg">
            </div>
            <div class="gallery_part1_test">
                <span>Environment</span>
            </div>
        </div>
        <div class="gallery_part2">
            <div class="gallery_part2_frame">
                <div class="gallery_part2_item" style="background-color: #f2f2f2;"></div>
                <div class="gallery_part2_item"></div>
                <div class="gallery_part2_item" style="background-color: #d7d7d7;"></div>
            </div>
            <div class="gallery_part2_frame">
                <div class="gallery_part2_item" style="background-color: #d7d7d7;"></div>
                <div class="gallery_part2_item" style="background-color: #f2f2f2;"></div>
                <div class="gallery_part2_item"></div>
            </div>
            <div class="gallery_part2_frame">
                <div class="gallery_part2_item" ></div>
                <div class="gallery_part2_item" style="background-color: #d7d7d7;"></div>
                <div class="gallery_part2_item" style="background-color: #f2f2f2;"></div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.gallery_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.gallery_part1_img{
    width: 1024px;
    height: 200px;
}
.gallery_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.gallery_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.gallery_part2{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}
.gallery_part2_frame{
    display: flex;
}
.gallery_part2_item{
    width: 300px;
    height: 300px;
}
</style>