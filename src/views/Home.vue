<template>
    <div class="home">
        <header class="header">
            <img src="@imgs/logo.png"
                 alt="">
        </header>
        <section class="section"></section>
        <footer class="footer"></footer>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {},
    mounted() {}
};
</script>
<style lang="less" scoped>
.home {
    .page(red);
}
</style>
