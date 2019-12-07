<template>
    <div id="app">
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    .page();
}
</style>
