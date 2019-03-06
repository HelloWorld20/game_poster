<template>
    <section class="capture"
        :style="{'background-image': `url(${bgEffect})`}"
    >
        <div class="capture__effect"
            :style="{'background-image': `url(${bgUrl})`}"
        ></div>
        <div class="capture__frame">
            <div class="capture__frame-time">
                <div class="capture__frame-time-year">{{year}}</div>
                <div class="capture__frame-time-month">{{month}}月</div>
                <div class="capture__frame-time-divider"></div>
                <div class="capture__frame-time-day">{{day}}</div>
                <div class="capture__frame-time-week">星期{{week}}</div>
            </div>
            <div class="capture__frame-name">
                致
                <span>{{name}}</span>
            </div>
            <div class="capture__frame-qrcode"
                :style="{'background-image': `url(${require('imgs/bg-qrcode.png')})`}"
            ></div>
        </div>
    </section>
</template>

<script>
import capture from 'html2canvas';
import { bus, getTraditionMonth, getTraditionWeek } from '@/config/utils';

export default {
	data() {
		return {
			name: '',
			year: '',
			month: '',
			day: '',
			week: '',
		};
	},
	props: {
		bgUrl: {
			default: '',
			type: String,
		},
		bgEffect: {
			default: '',
			type: String,
		},
	},
	mounted() {
		this.init();
		this.initEvent();
	},
	watch: {
		bgUrl(val) {
			console.log(val);
		},
	},
	methods: {
		init() {
			this.name = bus.name;
			const now = new Date();
			this.year = now.getFullYear();
			this.month = getTraditionMonth(now.getMonth() + 1);
			this.day = now.getDate();
			this.week = getTraditionWeek(now.getDay());
		},
		initEvent() {
			this.$on('capture', this.capture);
		},
		capture() {
			capture(document.querySelector('.capture')).then((canvas) => {
				const result = canvas.toDataURL();
				bus.posterUrl = result;
				this.$emit('captured', result);
                // console.log(result);
                // document.documentElement.style.background = `url(${result})`;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/extend.scss';
.capture{
    width: 750px;
    height: 1206px;
    background-color: #e3e3e3;
    position: relative;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 84px;

    &__effect{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-position: center top;
        background-size: contain;
        background-repeat: no-repeat;
    }

    left: -99999px;
    top: -99999px;

    // left: -200px;
    // top: -800px;
    // transform: scale(0.3, 0.3);
    // border: 1px solid purple;

    &__frame{
        position: relative;
        margin: 0 auto;
        width: 584px;
        height: 906px;

        &-time{
            position: absolute;
            left: 48px;
            top: 480px;
            width: auto;
            height: 154px;
            color: #ce0e2d;
            text-align: center;

            &-year{
                font-size: 27px;
                line-height: 1;
            }
            &-month{
                font-size: 31px;
                line-height: 1;
                margin-top: 8px;
            }
            &-divider{
                width: 58px;
                height: 2px;
                background-color: #ce0e2d;
                margin: 10px auto 0;
            }
            &-day{
                font-size: 57px;
                line-height: 1;
                margin-top: 0;
            }
            &-week{
                font-size: 21px;
                line-height: 1;
                margin-top: 6px;
            }
        }

        &-name{
            font-size: 36px;
            position: absolute;
            top: 115px;
            right: 156px;
            width: 36px;
            writing-mode: vertical-rl;

            &>span{
                margin-top: 20px;
            }
        }

        &-qrcode{
            position: absolute;
            width: 97px;
            height: 97px;
            right: 6px;
            bottom: -124px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
