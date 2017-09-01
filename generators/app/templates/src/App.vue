<template>
    <div id="app">
        <!-- 路由出口 -->
        <div class="content">
             <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    :root{
        --bc:#fefefe;
        --h: 80px;
    }
    .nav{
        height: var(--h);
        line-height: var(--h);
        background-color: var(--bc);
    }

</style>

<script>
export default {
}
</script>

  