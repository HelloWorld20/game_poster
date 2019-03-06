<template>
    <section
        class="loading"
        :style="{'background-image': `url(${require('imgs/bg-main.png')})`}"
    >
        <div class="placeholder"></div>
        <div class="loading__progress">
            <div class="loading__progress-gray"
                :style="{'background-image': `url(${require('imgs/bg-progress-gray.png')})`}"
            ></div>
            <div class="loading__progress-white"
                :style="{
                    'background-image': `url(${require('imgs/bg-progress-white.png')})`,
                    'width': progress + '%'
                }"
            ></div>
        </div>
        <div class="loading__text">{{progress}} % </div>
    </section>

</template>

<script>
import { bus } from '@/config/utils';
import Preload from '@/config/preload';
import config from '@/config/config';

const audioLoaded = false;
export default {
	data() {
		return {
			progress: 0,
		};
	},
	created() {
		const preload = new Preload(config, this.percentage, this.loaded);
		preload.init();
	},
	methods: {
		percentage(data) {
			this.progress = parseInt(data * 100, 10);
		},
		loaded() {
			setTimeout(() => {
				bus.musicList.bgm.play();
				this.$router.replace('Home');
			}, 1000);
		},
	},
};

</script>

<style lang='scss' scoped>
@import '../assets/scss/extend.scss';

.loading{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .placeholder{
        height: tw(584);
    }
    &__progress{
        width: tw(268);
        height: tw(32);
        margin: 0 auto;
        position: relative;

        &>div{
            background-position: left;
            background-size: tw(268) tw(32);
            background-repeat: no-repeat;
            width: 100%;height: 100%;
            position: absolute;
        }

        // &-white{
        //     transition: width 1s ease-in-out;
        // }

    }
    &__text{
        color: white;
        font-size: tw(22);
        text-align: center;
        margin-top: tw(56);
    }
}

</style>
