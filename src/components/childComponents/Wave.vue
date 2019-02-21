<template>
    <div class="animateWave">
        <div class="animateWave-item" style="animation-delay: .4s"></div>
        <div class="animateWave-item" style="animation-delay: .8s"></div>
        <div class="animateWave-item" style="animation-delay: 1.2s"></div>
        <div class="animateWave-item" style="animation-delay: 1.6s"></div>
        <div class="animateWave-item" style="animation-delay: 2s"></div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/extend.scss';

.animateWave{
    position: fixed;
    left: 50%;top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-item{
        position: absolute;
        border-radius: 100%;
        transform-origin: center;
        border: 1px solid white;
        animation: wave 2s ease-in infinite;
    }
}

@keyframes wave {
    0%{
        width: 0;height: 0;
        opacity: 1;
    }

    100%{
        width: 100px;
        height: 100px;
        opacity: 0;
    }
}
</style>
