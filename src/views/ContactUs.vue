<template>
    <div id="contactus">
        <div class="contactus_part1">
            <div class="contactus_part1_img">
                <img src="../../public/img/pic/contactus/contactus.jpg">
            </div>
            <div class="contactus_part1_test">
                <span>Contact Us</span>
            </div>
        </div>
        <div class="contactus_part2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2371.678204032875!2d103.83779673795942!3d1.373846265802423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27a90ff22c4adf59!2sFull%20Marks%20Student%20Services!5e0!3m2!1szh-CN!2ssg!4v1570090493607!5m2!1szh-CN!2ssg" width="1024" height="588" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="contactus_part3">
            <div class="contactus_part3_item">
                <div class="contactus_part3_title">
                    <span>Your Name (Required)</span>
                </div>
                <div class="contactus_part3_content">
                    <input type="text" v-model="userName">
                </div>
            </div>
            <div class="contactus_part3_item">
                <div class="contactus_part3_title">
                    <span>Your Email (Required)</span>
                </div>
                <div class="contactus_part3_content">
                    <input type="email" v-model="emailAddress">
                </div>
            </div>
            <div class="contactus_part3_item">
                <div class="contactus_part3_title">
                    <span>Subject</span>
                </div>
                <div class="contactus_part3_content">
                    <input type="text" v-model="subject">
                </div>
            </div>
            <div class="contactus_part3_item">
                <div class="contactus_part3_title">
                    <span>Your Message</span>
                </div>
                <div class="contactus_part3_content">
                    <textarea cols="30" rows="10" v-model="message"></textarea>
                </div>
            </div>
            <div class="contactus_part3_item">
                <div class="contactus_part3_item_button" @click="submitSendMailMethod()">
                    <span>Send</span>
                </div>
            </div>
        </div>
        <div class="contactus_part4">
            <div>
                <div>
                    <span style="font-weight: 700">Address:</span>
                </div>
                <div>
                    <span style="font-size: 14px;">Blk 163 Ang Mo Kio Ave 4 #01-454, Singapore 560163</span>
                </div>
            </div>
            <div>
                <span style="font-weight: 700">Tel: </span><span style="font-size: 14px;">91819841 / 65249397</span>
            </div>
            <div>
                <span style="font-weight: 700">Email: </span><span style="font-size: 14px;">talktofullmarks@gmail.com</span>
            </div>
            <div>
                <div>
                    <span style="font-weight: 700">Opening Hours:</span>
                </div>
                <div>
                    <span style="font-size: 14px;">Mon – Fri (School Term): 1pm – 7pm</span>
                </div>
                <div>
                    <span style="font-size: 14px;">Mon – Fri (School Holiday) 7:30am – 7pm</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    computed:{
        lang(){
            return this.$store.state.language
        }
    },
    data(){
        return{
            userName: null,
            emailAddress: null,
            subject: null,
            message: null
        }
    },
    methods:{
        submitSendMailMethod(){
            if(this.userName === null){
                if(this.lang === 'English'){
                    alert('Please input you name')
                }else{
                    alert('请输入您的姓名')
                }
            }else if(this.emailAddress === null){
                if(this.lang === 'English'){
                    alert('Please input you email Address')
                }else{
                    alert('请输入您的电子邮箱')
                }
            }else if(this.subject === null){
                if(this.lang === 'English'){
                    alert('Please input the subject')
                }else{
                    alert('请输入标题')
                }
            }else if(this.message === null){
                if(this.lang === 'English'){
                    alert('Please input the message')
                }else{
                    alert('请输入信息')
                }
            }else{
                let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;; //正则表达
                if(!reg.test(this.emailAddress)){
                    if(this.lang === 'English'){
                        alert('Wrong email type')
                    }else{
                        alert('邮箱格式错误')
                    }
                }else{
                    this.$store.dispatch('setLoading', true)
                    axios.post('http://127.0.0.1:3000/mail/',{
                        userName: this.userName,
                        emailAddress: this.emailAddress,
                        subject: this.subject,
                        message: this.message
                    })
                    .then(doc =>{
                        this.$store.dispatch('setLoading', false)
                        if(doc.data.code === 0){
                            if(this.lang === 'English'){
                                alert('Send success')
                            }else{
                                alert('发送成功')
                            }
                            this.userName = null
                            this.emailAddress = null
                            this.subject = null
                            this.message = null
                        }else{
                            if(this.lang === 'English'){
                                alert('Send failed,please refresh web and try again')
                            }else{
                                alert('发送失败,请刷新页面重试')
                            }
                        }
                    })
                    .catch(err =>{
                        this.$store.dispatch('setLoading', false)
                        console.log(err)
                        if(this.lang === 'English'){
                            alert('Send failed,please refresh web and try again')
                        }else{
                            alert('发送失败,请刷新页面重试')
                        }
                    })
                }
            }
        }
    }
}
</script>

<style scoped>
.contactus_part1{
    display: flex;
    justify-content: center;
    position: relative;
    margin: 48px 0;
}
.contactus_part1_img{
    width: 1024px;
    height: 200px;
}
.contactus_part1_img img{
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.contactus_part1_test{
    position: absolute;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 200px;
}
.contactus_part3{
    margin: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contactus_part3_item{
    margin-bottom: 20px;
}
.contactus_part3_title{
    font-size: 14px;
    color: #333333;
    line-height: 30px;
    text-align: left;
}
.contactus_part3_content input{
    width: 478px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid rgba(121, 121, 121, 1);
    padding: 0 10px;
}
.contactus_part3_content textarea{
    width: 474px;
    height: 120px;
    border-radius: 5px;
    border: 1px solid rgba(121, 121, 121, 1);
    padding: 5px 10px
}
.contactus_part3_item_button{
    width: 127px;
    height: 40px;
    line-height: 40px;
    background-color: #169bd5;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}
.contactus_part4{
    line-height: 26px;
    margin-bottom: 40px;
}

@media screen and (max-width: 1023px) {
    .contactus_part2 iframe{
        width: 100%;
        height: 300px;
    }
    .contactus_part3_content{
        width: 100%;
    }
    .contactus_part3_content input{
        width: 220px;
    }
    .contactus_part3_content textarea{
        width: 220px;
    }
}
</style>