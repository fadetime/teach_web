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
            language: 'English'
        }
    },
    methods:{
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
</style>