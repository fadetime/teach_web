<template>
    <div id="webmenu">
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
</template>
<script>
export default {
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
        }
    }
}
</script>
<style scoped>
#webmenu{
    width: 100%;
    background-color: #0074c8;
    color: #fff;
    display: flex;
    justify-content: center;
}
.webmenu_item{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    width: 120px;
    cursor: pointer;
}
</style>