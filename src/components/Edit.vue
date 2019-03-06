<template>
    <section class="edit"
        :style="{'background-image': `url(${bgEffect})`}"
        @click="changeEffect"
    >
        <!-- <div class="wrap"> -->
        <div class="wrap">
            <div class="edit__effect"
                :style="{'background-image': `url(${bgUrl})`}"
            >
                <div class="edit__frame">
                    <div class="edit__frame-time">
                        <div class="edit__frame-time-year">{{year}}</div>
                        <div class="edit__frame-time-month">{{month}}月</div>
                        <div class="edit__frame-time-divider"></div>
                        <div class="edit__frame-time-day">{{day}}</div>
                        <div class="edit__frame-time-week">星期{{week}}</div>
                    </div>
                    <div class="edit__frame-name">
                        致
                        <span>{{name}}</span>
                    </div>
                    <div class="edit__frame-qrcode"
                        :style="{'background-image': `url(${require('imgs/bg-qrcode.png')})`}"
                    ></div>
                </div>
            </div>
        </div>

        <!-- </div> -->
        <vue-capture
            :bgUrl="bgUrl"
            :bgEffect="bgEffect"
            ref="capture"
            @captured="captured"
        ></vue-capture>
        <img class="capturedImg" :src="capturedImg">
        <vue-wave v-if="showWave"></vue-wave>
    </section>
</template>

<script>
import { bus, getTraditionMonth, getTraditionWeek } from '@/config/utils';
import VueCapture from '@/components/childComponents/Capture';
import VueWave from '@/components/childComponents/Wave';

let currentEffectIndex = 0;

export default {
	data() {
		return {
			name: '',
			bgUrl: '',
			bgEffect: '',
			year: '',
			month: '',
			day: '',
			week: '',
			showWave: true,
			capturedImg: '',
		};
	},
	components: { VueCapture, VueWave },
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.name = bus.name;
			this.bgUrl = require('imgs/bg-frame-1.png');
			this.bgEffect = '';

			const now = new Date();

			const day = now.getDate();


			this.year = now.getFullYear();
			this.month = getTraditionMonth(now.getMonth() + 1);
			this.day = day < 10 ? `0${day}` : `${day}`;
			this.week = getTraditionWeek(now.getDay());
		},
		changeEffect() {
			this.$showTips('加载中...');
			this.showWave = false;
			if (currentEffectIndex++ > 8) {
				currentEffectIndex = 1;
			}
			this.bgUrl = require(`imgs/bg-frame-effect-${currentEffectIndex}.png`);
			this.bgEffect = require(`imgs/bg-effect-${currentEffectIndex}.png`);
            // 触发截图
			this.$refs.capture.$emit('capture');
		},
		captured(data) {
			this.capturedImg = data;
			setTimeout(() => {
				this.$hideTips();
			}, 500);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/extend.scss';
.capturedImg{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0;
    left: 0;top: 0;
}
.edit{
    width: 100%;
    height: 100%;
    background-color: #e3e3e3;
    position: relative;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    // padding-top: tw(84);
    // padding-top: tw(150);

    .wrap{
        width: 100%;height: 100%;display:flex;
        justify-content: center;
        align-items: center;
    }

    &__effect{
        // position: absolute;
        // left: 0;
        // top: 0;
        // width: 100%;
        // height: 100%;
        width: tw(750);
        height: tw(1206);
        background-position: center top;
        background-size: contain;
        background-repeat: no-repeat;
    }

    &__frame{
        position: relative;
        margin: 0 auto;
        transform: translateY(tw(84));
        width: tw(584);
        height: tw(906);

        &-time{
            position: absolute;
            left: tw(48);
            top: tw(480);
            width: auto;
            height: tw(154);
            color: #ce0e2d;
            text-align: center;

            &-year{
                font-size: tw(27);
                line-height: 1;
            }
            &-month{
                font-size: tw(31);
                line-height: 1;
                margin-top: tw(8);
            }
            &-divider{
                width: tw(58);
                height: tw(2);
                background-color: #ce0e2d;
                margin: tw(10) auto 0;
            }
            &-day{
                font-size: tw(57);
                line-height: 1;
                margin-top: tw(2);
            }
            &-week{
                font-size: tw(21);
                line-height: 1;
                margin-top: tw(6);
            }
        }

        &-name{
            font-size: tw(36);
            position: absolute;
            top: tw(115);
            right: tw(156);
            width: tw(36);
            writing-mode: vertical-rl;

            &>span{
                margin-top: tw(20);
            }
        }

        &-qrcode{
            position: absolute;
            width: tw(97);
            height: tw(97);
            right: tw(6);
            bottom: tw(-124);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
