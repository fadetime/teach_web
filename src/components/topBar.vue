<template>
    <div id="topbar">
        <div>
            <img src="../../public/img/pic/toplogo.png">
        </div>
        <div class="topbar_right">
            <div class="topbar_right_button_text">
                <div class="topbar_right_item">
                    <div class="topbar_right_item_left">
                        <span v-if="lang === 'English'">Phone/Fax:</span>
                        <span v-else>电话/传真:</span>
                    </div>
                    <div class="topbar_right_item_right">
                        <span>6910 7111 / 6910 1710 (Bedok North)</span>
                    </div>
                </div>
                <div class="topbar_right_item">
                    <div class="topbar_right_item_left"></div>
                    <div class="topbar_right_item_right">
                        <span>6951 3541/ 6951 3561 (Bukit Timah)</span>
                    </div>
                </div>
                <div class="topbar_right_item">
                    <div class="topbar_right_item_left">
                        <span v-if="lang === 'English'">Email:</span>
                        <span v-else>邮箱:</span>
                    </div>
                    <div class="topbar_right_item_right">
                        <span>enquiry@thenextlap.com.sg</span>
                    </div>
                </div>
            </div>
            <div class="topbar_right_button">
                <select v-model="language" @change="changeLangrageMethod()">
                    <option class="u43_input_option" value="English">English</option>
                    <option class="u43_input_option" value="Chinese">Chinese</option>
                </select>
            </div>
        </div>
        <div class="top_small_menu" @click="switchPhoneMenuMethod()">
            <img src="../../public/img/icons/3line.svg">
        </div>
        <transition name="times-transition-change-back" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
            <div v-if="showPhoneMenu" class="top_small_phone_menu_back" @click="closePhoneMenuMethod()"></div>
        </transition>
        <transition name="times-transition-change" enter-active-class="animated slideInRight faster" leave-active-class="animated slideOutRight faster">
            <div v-if="showPhoneMenu" class="top_small_phone_menu">
                <div class="top_small_phone_menu_top">
                    <div class="webmenu_item" @click="goRouterMethod('aboutUs')">
                        <span>About Us</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('curriculum')">
                        <span>Our Curriculum</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('Activities')">
                        <span>Activities</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('Promotions')">
                        <span>Promotions</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('Gallery')">
                        <span>Gallery</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('Career')">
                        <span>Career</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('Reviews')">
                        <span>Reviews</span>
                    </div>
                    <div class="webmenu_item" @click="goRouterMethod('ContactUs')">
                        <span>Contact Us</span>
                    </div>
                </div>
                <div class="top_small_phone_menu_bottom">
                    <div>
                        <div class="top_small_phone_menu_bottom_frame_top">
                            <div class="icon_phone"></div>
                        </div>
                        <div>
                            <div>
                                6910 7111 / 6910 1710 (Bedok North)
                            </div>
                            <div>
                                6951 3541/ 6951 3561 (Bukit Timah)
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="top_small_phone_menu_bottom_frame_top">
                            <div class="icon_mail"></div>
                        </div>
                        <div>
                            <div>
                                enquiry@thenextlap.com.sg
                            </div>
                        </div>
                    </div>
                    <div class="top_changelang">
                        <div class="top_changelang_frame" @click="changeLangeMethod()">
                            <div class="icon_translate"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    mounted(){
        this.language = this.lang
    },
    computed:{
        lang(){
            return this.$store.state.language
        }
    },
    data(){
        return{
            language: 'English',
            showPhoneMenu: false
        }
    },
    methods:{
        goRouterMethod(item){
            switch(item){
                case 'ContactUs':
                    this.$router.push('/ContactUs')
                    break
                case 'curriculum':
                    this.$router.push('/curriculum')
                    break
                case 'Activities':
                    this.$router.push('/Activities')
                    break
                case 'Promotions':
                    this.$router.push('/Promotions')
                    break
                case 'Gallery':
                    this.$router.push('/Gallery')
                    break
                case 'Career':
                    this.$router.push('/Career')
                    break
                case 'Reviews':
                    this.$router.push('/Reviews')
                    break
                default :
                    this.$router.push('/')
                    break
            }
            this.showPhoneMenu = false
        },
        closePhoneMenuMethod(){
            this.showPhoneMenu = false
        },
        switchPhoneMenuMethod(){
            this.showPhoneMenu = !this.showPhoneMenu
        },
        changeLangeMethod(){
            if(this.lang === 'English'){
                this.language = 'Chinese'
            }else{
                this.language = 'English'
            }
            this.$store.dispatch('setLanguage', this.language)
            this.showPhoneMenu = false
        },
        changeLangrageMethod(){
            this.$store.dispatch('setLanguage', this.language)
            console.log(this.lang)
        }
    }
}
</script>

<style scoped>
#topbar{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #333333;
}
.topbar_right{
    display: flex;
}
.topbar_right_item{
    display: flex;
}
.topbar_right_item_left{
    width: 62px;
    text-align: right;
    line-height: 20px;
}
.topbar_right_item_right{
    width: 200px;
    text-align: left;
    padding-left: 10px;
    line-height: 20px;
}
.topbar_right_button_text{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.topbar_right_button{
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top_small_menu{
    display: none;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 23;
    background-color: #fff;
    border-radius: 5px;
}
.top_small_menu img{
    width: 48px;
}
.top_small_phone_menu_back{
    background-color: rgba(0,0,0,.12);
    position: fixed;
    top: 0;
    left: 0;
    right: 0px;
    bottom: 0;
    z-index: 24;
}
.top_small_phone_menu{
    background-color: #0074c8;
    position: fixed;
    top: 0;
    right: -1px;
    bottom: 0;
    z-index: 25;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.top_small_phone_menu_top{
    color: #fff;
    line-height: 26px;
    padding: 30px;
    font-size: 16px;
    text-align: right;
}
.top_small_phone_menu_bottom{
    color: #fff;
    padding: 30px;
    border-top: 1px solid #fff;
}
.top_small_phone_menu_bottom_frame_top{
    display: flex;
    justify-content: center;
}
.icon_phone{
    mask-image: url(../../public/img/icons/phone.svg);
    background-color: #fff;
    mask-size: 24px;
    height: 24px;
    width: 24px;
    mask-repeat: no-repeat;
}
.icon_mail{
    mask-image: url(../../public/img/icons/mail.svg);
    background-color: #fff;
    mask-size: 24px;
    height: 24px;
    width: 24px;
    mask-repeat: no-repeat;
}
.icon_translate{
    mask-image: url(../../public/img/icons/translate.svg);
    background-color: #fff;
    mask-size: 24px;
    height: 24px;
    width: 24px;
    mask-repeat: no-repeat;
}
.top_changelang{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.top_changelang_frame{
    border: 2px solid #fff;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
@media screen and (max-width: 1023px) {
    .topbar_right{
        display: none;
    }
    .top_small_menu{
        display: block;
    }
}
</style>