<template>
    <div id="gallery">
        <div>
            <img src="../../public/img/pic/environment/environment.jpg">
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
.gallery_part2{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.gallery_part2_frame{
    display: flex;
}
.gallery_part2_item{
    width: 300px;
    height: 300px;
}
</style>