<template>
    <div id="bottombar">
        <div class="bottombar_top">
            <div class="bottombar_top_item">
                <span>About Us</span>
            </div>
            <div class="bottombar_top_item">
                <span>Careers</span>
            </div>
            <div class="bottombar_top_item">
                <span>Privacy Policy</span>
            </div>
            <div class="bottombar_top_item">
                <span>Site Map</span>
            </div>
            <div class="bottombar_top_item">
                <span>Contact Us</span>
            </div>
        </div>
        <div class="bottombar_bottom">
            <span>Copyright 2018 @ Education     All Rights Reserved</span>
        </div>
    </div>
</template>

<style scoped>
#bottombar{
    background-color: #f2f2f2;
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.bottombar_top{
    display: flex;
}
.bottombar_top_item{
    font-size: 20px;
    font-weight: 700;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-style: normal;
    width: 200px;
    height: 80px;
    line-height: 80px;
}
.bottombar_bottom{
    height: 60px;
    line-height: 60px;
}
</style>