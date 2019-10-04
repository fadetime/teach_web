<template>
    <div class="aboutus">
        <div class="aboutus_part1">
			<div class="aboutus_part1_img">
                <img src="../../public/img/pic/aboutus.jpg">
            </div>
            <div class="aboutus_part1_test">
                <span>About Us</span>
            </div>
        </div>
		<div class="aboutus_part2">
			<div class="aboutus_part2_frame">
				<img src="../../public/img/pic/aboutus2.jpg">
			</div>
        </div>
		<div class="aboutus_text">
			<div class="aboutus_text_title">
				<span>Who We Are</span>
			</div>
			<div class="aboutus_text_content control_width">
				<div class="next_space">
					<span>
						We are a Student Care Centre Located at 163 Ang Mo Kio Ave 4 #01-454 Singapore 560163. We are registered with Ministry of Social & Family Development (MSF) and Student Care Financial Assistance (SCFA) which families can apply for subsidy assistance.
					</span>
				</div>
				<div class="next_space">
					<span>
						We are proud to announce as of April 2018, Full Marks Student Services is awarded ‘A’ Grade student care centre by MSF for providing a high quality environment and services to children.
					</span>
				</div>
				<div class="next_space">
					<span>
						At Full Marks Student Services, we believe in the holistic development of each and every child enrolled with us, and guide them to flourish in their growing journey. Our dedicated teachers ensure that all our students receive the right amount of care and encourage them to aim for the best.
					</span>
				</div>
				<div class="end_space">
					<span>
						Talk to us today! Call us at 91819841
					</span>
				</div>
			</div>
		</div>
		<div class="aboutus_text_pic">
			<div class="aboutus_part4_item">
				<div>
					<img src="../../public/img/icons/empty_pic.svg">
				</div>
				<div class="aboutus_text_pic_item_title">
					<span>Our Mission</span>
				</div>
				<div class="aboutus_text_pic_item_centent">
					<ul style="margin-top: 0px;">
						<li>
							To provide a safe, cozy, and conducive environment for our students to Rest & Learn before/after school hours.
						</li>
					</ul>
					<ul>
						<li>
							To holistically develop  every student with a focus on creative learning and character building.
						</li>
					</ul>
				</div>
			</div>
			<div class="aboutus_part4_item">
				<div>
					<img src="../../public/img/icons/empty_pic.svg">
				</div>
				<div class="aboutus_text_pic_item_title">
					<span>Our Vision</span>
				</div>
				<div class="aboutus_text_pic_item_centent">
					<span>
						To be a quality before/after school care provider that is highly regarded for the holistic development of our students.
					</span>
				</div>
			</div>
			<div class="aboutus_part4_item">
				<div>
					<img src="../../public/img/icons/empty_pic.svg">
				</div>
				<div class="aboutus_text_pic_item_title">
					<span>Our Value</span>
				</div>
				<div class="aboutus_text_pic_item_centent">
					<ul>
						<li>
							Confidence
						</li>
						<li>
							Resilience
						</li>
						<li>
							Innovative/Creativity
						</li>
						<li>
							Self-discipline
						</li>
						<li>
							Respect
						</li>
						<li>
							Perseverance
						</li>
						<li>
							Adaptability
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="aboutus_part5">
			<div style="position: relative">
				<div class="aboutus_part5_img">
					<img src="../../public/img/pic/ourfamily.jpg">
				</div>
				<div class="aboutus_part5_text">
					<span>Our Family</span>
				</div>
			</div>
			
		</div>
		<div class="abouts_corporation_logo">
			<div class="abouts_corporation_logo_frame">
				<div class="abouts_corporation_logo_title">
					<span>Corporation Partners</span>
				</div>
				<div class="abouts_corporation_logo_content">
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/karaba.jpg">
					</div>
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/hap.jpg">
					</div>
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/apple.png">
					</div>
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/fox.png">
					</div>
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/Pepsi.png">
					</div>
					<div class="aboutus_corporation">
						<img src="../../public/img/pic/tulip.png">
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<style scoped>
.aboutus_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.aboutus_part1_img{
    width: 1024px;
    height: 200px;
}
.aboutus_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.aboutus_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.aboutus_part2{
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
}
.aboutus_part2_frame{
	width: 800px;
	height: 480px;
}
.aboutus_part2_frame img{
	object-fit: cover;
	width: 100%;
	height: 100%;
}
.aboutus_text{
	background-color: #f2f2f2;
	margin-bottom: 40px;
	padding: 0 10px;
}
.aboutus_text_title{
	font-family: 'Arial Negreta cursiva', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: italic;
    font-size: 28px;
	height: 100px;
	line-height: 100px;
}
.aboutus_text_content{
	text-align: left;
	letter-spacing: normal;
    color: #333333;
	font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
	font-size: 14px;
}
.next_space{
	padding-bottom: 20px;
}
.end_space{
	padding-bottom: 100px;
}
.aboutus_text_pic{
	display: flex;
	justify-content: space-around;
	margin-bottom: 40px;
	flex-wrap: wrap;
}
.aboutus_text_pic_item_title{
	font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
	line-height: 100px;
}
.aboutus_text_pic_item_centent{
	text-align: left;
}
.aboutus_corporation{
	width: 150px;
	height: 150px;
}
.aboutus_corporation img{
	object-fit: contain;
	width: 100%;
	height: 100%;
}
.abouts_corporation_logo{
	display: flex;
	justify-content: center;
}
.abouts_corporation_logo_frame{
	border-top: 1px solid;
	border-bottom: 1px solid
}
.abouts_corporation_logo_title{
	font-size: 28px;
	font-weight: 700;
	height: 100px;
	line-height: 100px;
}
.abouts_corporation_logo_content{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.aboutus_part4_item{
	width: 300px;
	margin: 10px 0;
}
.aboutus_part5{
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: 40px;
}
.aboutus_part5_img{
	width: 1024px;
	height: 400px;
}
.aboutus_part5_img img{
	object-fit: cover;
	width: 100%;
	height: 100%;
}
.aboutus_part5_text{
	position: absolute;
	right: 40px;
	bottom: 40px;
	font-size: 32px;
	font-weight: 700;
	color: #fff;
}
@media screen and (max-width: 1023px) {
    .aboutus_part5_img{
        width: 100%;
    }
}
</style>