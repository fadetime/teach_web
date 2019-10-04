<template>
    <div id="career">
        <div class="career_part1">
            <div class="career_part1_img">
                <img src="../../public/img/pic/career/Career.jpg">
            </div>
            <div class="career_part1_test">
                <span>Career</span>
            </div>
        </div>
        <div class="career_part2">
            <div class="career_part2_item">
                <img src="../../public/img/pic/career/Career1.jpg">
            </div>
            <div class="career_part2_item">
                <img src="../../public/img/pic/career/Career2.jpg">
            </div>
            <div class="career_part2_item">
                <img src="../../public/img/pic/career/Career3.jpg">
            </div>
            <div class="career_part2_item">
                <img src="../../public/img/pic/career/Career4.jpg">
            </div>
            <div class="career_part2_item">
                <img src="../../public/img/pic/career/Career5.jpg">
            </div>
        </div>
        <div class="career_part3">
            <div class="career_part3_title">
                <span>Who We Are?</span>
            </div>
            <div class="career_part3_content">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </span>
            </div>
        </div>
        <div class="career_part3">
            <div class="career_part3_title">
                <span>Current Opportunities</span>
            </div>
            <div class="career_part4_content">
                <div class="career_part4_content_item">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </span>
                </div>
                <div class="career_part4_content_item">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </span>
                </div>
                <div class="career_part4_content_item">
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </span>
                </div>
            </div>
        </div>
        <div class="career_part5">
            <div>
                <span>To explore more about the opportunities, kindly send your application to</span>
            </div>
            <div>
                <span>career@easybuy.com.sg</span>
            </div>
            <div>
                <span>We regret that only shortlisted candidates will be notified.</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.career_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.career_part1_img{
    width: 1024px;
    height: 200px;
}
.career_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.career_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.career_part2{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.career_part2_item{
    width: 200px;
    height: 150px;
    margin: 0 20px;
}
.career_part2_item img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.career_part3{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.career_part3_title{
    font-size: 18px;
    font-weight: 700;
    line-height: 100px;
}
.career_part3_content{
    width: 720px;
    text-align: left;
    font-size: 13px;
}
.career_part4_content{
    width: 646px;
    text-align: left;
    font-size: 13px;
}
.career_part4_content_item{
    padding-bottom: 40px;
}
.career_part5{
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 40px;
}
</style>