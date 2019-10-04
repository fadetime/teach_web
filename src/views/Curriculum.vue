<template>
    <div id="curriculums">
        <div class="curriculums_part1">
            <div class="curriculums_part1_img">
                <img src="../../public/img/pic/curriculums/curriculums.jpg">
            </div>
            <div class="curriculums_part1_test">
                <span>curriculums</span>
            </div>
        </div>
        <div class="curriculums_text">
            <div class="curriculums_text_frame">
                <div class="curriculums_text_title">
                    Our Student Care Curriculum includes the following services:
                </div>
                <div class="curriculums_text_content">
                    <ul style="margin-top: 0">
                        <li>
                            Fetching from designated schools at after-school dismissal hours
                        </li>
                        <li>
                            Homework Supervision
                        </li>
                        <li>
                            Student-centered Assessment based on MOE’s syllabus
                        </li>
                        <li>
                            Character-Building Guidance
                        </li>
                        <li>
                            Healthy Meals and Tea-Break
                        </li>
                        <li>
                            Sports & Outdoor curriculums
                        </li>
                        <li>
                            Silent Reading and Writing
                        </li>
                        <li>
                            Rest and Relax
                        </li>
                        <li>
                            Play and Recreation
                        </li>
                        <li>
                            Enrichment curriculums
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="curriculums_break">
            <span>Overview</span>
        </div>
        <div style="margin-bottom: 60px">
            <div class="curriculums_part4_item">
                <div>
                    <img src="../../public/img/pic/curriculums/course1.jpg" class="curriculums_part4_img">
                </div>
                <div class="curriculums_part4_item_right" style="text-align: left">
                    <div class="curriculums_part4_item_right_title">
                        <span>Course 1</span>
                    </div>
                    <div>
                        <span>
                            We provide after-school student care service to school-going students aged 7 years (Primary One) to 14 years (Secondary Two) as our main curriculum. We ensure a conducive learning environment along with balanced and nutritious meals to ensure the student is healthy in both mind and body. During school holiday period, the centre provides early care (surcharges apply) with teachers on duty.
                        </span>
                    </div>
                </div>
            </div>
            <div class="curriculums_part4_item">
                <div class="curriculums_part4_item_right" style="text-align: right">
                    <div class="curriculums_part4_item_right_title">
                        <span>Course 2</span>
                    </div>
                    <div>
                        <span>
                            Our children are the new generation of the future. Therefore, it is important that every child learn good core values to grow and learn holistically, as core values form their character building and shape who they are. The core values we inspire for students to have are Respect, Responsibility, Kindness, and Consistency. Our children are the new generation of the future.
                        </span>
                    </div>
                </div>
                <div>
                    <img src="../../public/img/pic/curriculums/course2.jpg" class="curriculums_part4_img">
                </div>
            </div>
            <div class="curriculums_part4_item">
                <div>
                    <img src="../../public/img/pic/curriculums/course3.jpg" class="curriculums_part4_img">
                </div>
                <div class="curriculums_part4_item_right" style="text-align: left">
                    <div class="curriculums_part4_item_right_title">
                        <span>Course 3</span>
                    </div>
                    <div>
                        <span>
                            We provide after-school student care service to school-going students aged 7 years (Primary One) to 14 years (Secondary Two) as our main curriculum. We ensure a conducive learning environment along with balanced and nutritious meals to ensure the student is healthy in both mind and body. During school holiday period, the centre provides early care (surcharges apply) with teachers on duty.
                        </span>
                    </div>
                </div>
            </div>
            <div class="curriculums_part4_item">
                <div class="curriculums_part4_item_right" style="text-align: right">
                    <div class="curriculums_part4_item_right_title">
                        <span>Course 4</span>
                    </div>
                    <div>
                        <span>
                            Our children are the new generation of the future. Therefore, it is important that every child learn good core values to grow and learn holistically, as core values form their character building and shape who they are. The core values we inspire for students to have are Respect, Responsibility, Kindness, and Consistency. Our children are the new generation of the future.
                        </span>
                    </div>
                </div>
                <div>
                    <img src="../../public/img/pic/curriculums/course4.jpg" class="curriculums_part4_img">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.curriculums_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.curriculums_part1_img{
    width: 1024px;
    height: 200px;
}
.curriculums_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.curriculums_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.curriculums_text{
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.curriculums_text_frame{
    width: 452px;
}
.curriculums_text_title{
    line-height: 30px;
    text-align: left;
}
.curriculums_text_content{
    text-align: left;
    line-height: 24px;
}
.curriculums_break{
    height: 100px;
    line-height: 100px;
    font-size: 28px;
    font-weight: 700;
    background-color: #f2f2f2;
    margin-bottom: 40px;
}
.curriculums_part4_item{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
}
.curriculums_part4_img{
    width: 440px;
    height: 220px;
}
.curriculums_part4_item_right{
    width: 518px;
    padding: 10px 30px;
}
.curriculums_part4_item_right_title{
    font-size: 28px;
    font-weight: 700;
    line-height: 80px;
}
@media screen and (max-width: 1023px) {
    .curriculums_part1_img{
        width: 100%;
    }
    .curriculums_part4_img{
        width: 100%;
    }
}
</style>