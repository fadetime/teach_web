<template>
    <div id="loading" v-if="isShowLoading">
        <div class="loading_frame">
            <img src="../../public/img/icons/loading.gif">
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        isShowLoading(){
            return this.$store.state.showLoading
        }
    },
}
</script>

<style scoped>
#loading{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading_frame{
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loading_frame img{
    width: 100px;
    height: 100px;
}
</style>
