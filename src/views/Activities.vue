<template>
    <div id="activities">
        <div class="activities_part1">
            <div class="activities_part1_img">
                <img src="../../public/img/pic/activities/activities.jpg">
            </div>
            <div class="activities_part1_test">
                <span>Activities</span>
            </div>
        </div>
        <div class="activities_part2">
            <div class="activities_part2_item">
                <span>
                    We provide after-school student care service to school-going students aged 7 years (Primary One) to 14 years (Secondary Two) as our main curriculum. We ensure a conducive learning environment along with balanced and nutritious meals to ensure the student is healthy in both mind and body. During school holiday period, the centre provides early care (surcharges apply) with teachers on duty.
                </span>
            </div>
            
        </div>
        <div class="activities_part3">
            <div class="activities_part3_item">
                <div class="activities_part3_item_img">
                    <img src="../../public/img/pic/activities/green.png">
                </div>
                <div class="activities_part3_item_text">
                    <div class="activities_part3_text_top">
                        <span>Green Walk</span>
                    </div>
                    <div class="activities_part3_text_bottom">
                        <span>20, May 2017</span>
                    </div>
                </div>
                <div class="activities_part3_item_button">
                    <div class="activities_button">See More</div>
                </div>
            </div>
            <div class="activities_part3_item" style="margin:10px 40px;">
                <div class="activities_part3_item_img">
                    <img src="../../public/img/pic/activities/blue.jpg">
                </div>
                <div class="activities_part3_item_text">
                    <div class="activities_part3_text_top">
                        <span>Blue Talk</span>
                    </div>
                    <div class="activities_part3_text_bottom">
                        <span>15, September 2018</span>
                    </div>
                </div>
                <div class="activities_part3_item_button">
                    <div class="activities_button">See More</div>
                </div>
            </div>
            <div class="activities_part3_item">
                <div class="activities_part3_item_img">
                    <img src="../../public/img/pic/activities/red.jpg">
                </div>
                <div class="activities_part3_item_text">
                    <div class="activities_part3_text_top">
                        <span>Red Plan</span>
                    </div>
                    <div class="activities_part3_text_bottom">
                        <span>01, June 2019</span>
                    </div>
                </div>
                <div class="activities_part3_item_button">
                    <div class="activities_button">See More</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.activities_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.activities_part1_img{
    width: 1024px;
    height: 200px;
}
.activities_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.activities_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.activities_part2{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.activities_part2_item{
    width: 848px;
    text-align: left;
    font-size: 14px;
    line-height: 26px;
}
.activities_part3{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
}
.activities_part3_item{
    margin: 10px 0;
}
.activities_part3_item_img{
    width: 296px;
    height: 218px;
}
.activities_part3_item_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.activities_part3_item_text{
    margin: 40px 0;
}
.activities_part3_text_top{
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-size: 24px;
    font-weight: 700;
}
.activities_part3_text_bottom{
    font-size: 18px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    text-rendering: optimizeLegibility;
    color: #333333;
}
.activities_part3_item_button{
    display: flex;
    justify-content: center;
}
.activities_button{
    width: 127px;
    height: 40px;
    line-height: 40px;
    background-color: #169bd5;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}
</style>