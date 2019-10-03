<template>
    <div id="app">
        <top-bar class="control_width" />
        <web-menu />
        <router-view />
		<bottomBar />
    </div>
</template>
<script>
import topBar from "@/components/topBar.vue";
import webMenu from "@/components/menu.vue";
import bottomBar from "@/components/bottomBar.vue";

export default {
    components: {
        topBar,
        webMenu,
        bottomBar
    }
};
</script>
<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.control_width {
    width: 1024px;
    margin: 0 auto;
}
</style>
