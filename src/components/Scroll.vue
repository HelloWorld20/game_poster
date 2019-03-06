<template>
    <section class="scroll"
        :style="{'background-image': `url(${require('imgs/bg-main.png')})`}"
    >
        <div class="scroll__moving"
            ref="big"
            :style="{'background-image': `url(${require('imgs/bg-logo-large.png')})`}"
        ></div>
        <div class="scroll__logo"
            :style="{'background-image': `url(${require('imgs/bg-logo-gold2.png')})`}"
        ></div>
        <div class="scroll__text">
            <div class="scroll__text--1"
                ref="text1"
                :style="{'background-image': `url(${require('imgs/text-1.1.png')})`}"
            ></div>
            <div class="scroll__text--2"
                ref="text2"
                :style="{'background-image': `url(${require('imgs/text-2.1.png')})`}"
            ></div>
            <div class="scroll__text--3"
                ref="text3"
                :style="{'background-image': `url(${require('imgs/text-2.2.png')})`}"
            ></div>
            <div class="scroll__text--4"
                ref="text4"
                :style="{'background-image': `url(${require('imgs/text-3.1.png')})`}"
            ></div>
            <div class="scroll__text--5"
                ref="text5"
                :style="{'background-image': `url(${require('imgs/text-4.1.png')})`}"
            ></div>
        </div>
        <!-- <transition enter-active-class="fadeIn" leave-active-class="fadeOut"> -->
            <div class="scroll__arrow"
                v-show="!animating"
                :style="{'background-image': `url(${require('imgs/icon-up.png')})`}"
            ></div>
        <!-- </transition> -->
    </section>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import { getComputedPx } from '@/config/utils';
import Hammer from 'hammerjs';

const onepx = () => getComputedPx() / 100;
const BIG_WIDTH = 1521;
const BIG_HEIGHT = 2222;
export default {
	data() {
		return {
			currentStep: 0,
			animating: false,
			ready: false,
		};
	},
	mounted() {
		this.initGusture();
		setTimeout(() => {
			this.currentStep++;
			this.runAnimate();
		}, 1000);
		const result = getComputedPx();
	},
	methods: {
		initGusture() {
			const hammer = new Hammer(this.$el);
            // 启用swipedonw 和 swipeup
			hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

			hammer.on('swipeup', (e) => {
				console.log('gustrue: ', e.type);
				if (!this.animating) {
					this.currentStep++;
					this.runAnimate();
				}
			});
		},
		runAnimate() {
			switch (this.currentStep) {
			case 1: this.animationOne(); break;
			case 2: this.animationTwo(); break;
			case 3: this.animationThree(); break;
			case 4: this.animationFour(); break;
			default: this.nextStep();
			}
		},
		animationOne() {
			if (this.animating) return;
			this.animating = true;
			const tl = new TimelineLite();
			const tlText = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					// setTimeout(() => {
					// 	this.animateTwo();
					// }, 1000);
				},
			});
			tl.fromTo(this.$refs.big, 2, { x: 500 * onepx(), opacity: 0 }, { x: 0, opacity: 0.5 });
			tlText.to(this.$refs.text1, 1, { opacity: 1 });
		},
		animationTwo() {
			if (this.animating) return;
			this.animating = true;
			const tl = new TimelineLite();
			const tlText = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					// setTimeout(() => {
					// 	this.animationThree();
					// }, 2000);
				},
			});

			const result = ((BIG_WIDTH - 433) + 280) * -1 * onepx();

            // 大背景动画移动
			tl.to(this.$refs.big, 3, { x: result });
            // 文字动画
			tlText.to(this.$refs.text1, 1, { opacity: 0, delay: 1 })
                    .to([this.$refs.text2, this.$refs.text3], 1, { opacity: 1 });
		},
		animationThree() {
			if (this.animating) return;
			this.animating = true;
			const tl = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					// setTimeout(() => {
					// 	this.animationFour();
					// }, 2000);
				},
			});
			const tlText = new TimelineLite();
            // 没法量，只能乘个基数，慢慢调
			const x = BIG_WIDTH * -0.32 * onepx();
			const y = BIG_HEIGHT * -0.44 * onepx();

            // 大背景动画移动
			tl.to(this.$refs.big, 3, { x, y });

			tlText.to([this.$refs.text2, this.$refs.text3], 1, { opacity: 0, delay: 1 })
                .to(this.$refs.text4, 1, { opacity: 1 });
		},
		animationFour() {
			if (this.animating) return;
			this.animating = true;
			const tl = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					// setTimeout(() => {
					// 	this.animationFour();
					// }, 2000);
				},
			});
			const tlText = new TimelineLite();

            // 没法量，只能乘个基数，慢慢调
			const x = BIG_WIDTH * -0.71 * onepx();
			const y = BIG_HEIGHT * -0.64 * onepx();

            // 大背景动画移动
			tl.to(this.$refs.big, 3, { x, y });

			tlText.to(this.$refs.text4, 1, { opacity: 0, delay: 1 })
                .to(this.$refs.text5, 1, { opacity: 1 });
		},
		nextStep() {
			this.$router.replace('Slogan');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/extend.scss';
.test{
    width: tw(100);
    height: tw(100);
    position: absolute;
    left: 100px; top: 100px;
    border: 1px solid red;
}
.scroll{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    &__moving{
        opacity: 0;
        width: tw(1521);
        height: tw(2222);
        position: absolute;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        left: tw(280);
        top: tw(360);
    }

    &__logo{
        position: absolute;
        top: tw(110);
        right: tw(66);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: tw(158);
        height: tw(234);
    }

    &__text{
        position: relative;
        width: 100%;
        height: 100%;

        &>div{
            position: absolute;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0;
        }

        &--1{
            left: tw(64);
            top: tw(104);
            width: tw(352);
            height: tw(488);
        }
        &--2{
            left: tw(58);
            top: tw(104);
            width: tw(372);
            height: tw(194);
        }
        &--3{
            right: tw(58);
            bottom: tw(116);
            width: tw(258);
            height: tw(488);
        }
        &--4{
            left: tw(62);
            bottom: tw(200);
            width: tw(316);
            height: tw(408);
        }
        &--5{
            right: tw(58);
            bottom: tw(234);
            width: tw(358);
            height: tw(112);
        }
    }

    &__arrow{
        position: absolute;
        width: tw(84);
        height: tw(46);
        bottom: tw(50);
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        left: 50%;
        margin-left: tw(-84/2);
        @extend .floatAnimate;
    }
}
</style>


