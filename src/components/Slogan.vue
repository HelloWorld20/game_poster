<template>
    <section class="slogan"
        :style="{'background-image': `url(${require('imgs/bg-main.png')})`}"
    >
        <div class="slogan__one">
            <div class="slogan__one--1"
                ref="slogan1"
                :style="{'background-image': `url(${require('imgs/text-1-value.png')})`}"
            ></div>
            <div class="slogan__one--2"
                ref="slogan2"
                :style="{'background-image': `url(${require('imgs/text-1-discover.png')})`}"
            ></div>
            <div class="slogan__one--3"
                ref="slogan3"
                :style="{'background-image': `url(${require('imgs/text-1-change.png')})`}"
            ></div>
        </div>
        <div class="slogan__two">
            <div class="slogan__two--1"
                ref="slogan4"
                :style="{'background-image': `url(${require('imgs/text-2-longway.png')})`}"
            ></div>
            <div class="slogan__two--2"
                ref="slogan5"
                :style="{'background-image': `url(${require('imgs/text-2-landscape.png')})`}"
            ></div>
            <div class="slogan__two--3"
                ref="slogan6"
                :style="{'background-image': `url(${require('imgs/text-2-fearless.png')})`}"
            ></div>
            <div class="slogan__two--4"
                ref="slogan7"
                :style="{'background-image': `url(${require('imgs/text-2-sun.png')})`}"
            ></div>
        </div>
        <div class="slogan__arrow"
            v-show="!animating"
            :style="{'background-image': `url(${require('imgs/icon-up.png')})`}"
        ></div>
    </section>
</template>

<script>
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';
import Hammer from 'hammerjs';

let currentStep = 0;
let ready = false;
export default {
	data() {
		return {
			animating: false,
		};
	},
	mounted() {
		this.initGusture();

		if (!this.animating) {
			currentStep++;
			this.runAnimate();
		}
	},
	methods: {
		initGusture() {
			const hammer = new Hammer(this.$el);
            // 启用swipedonw 和 swipeup
			hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
			hammer.on('swipeup', (e) => {
				console.log('gustrue: ', e.type);
				if (!this.animating) {
					currentStep++;
					this.runAnimate();
				}
			});
		},
		runAnimate() {
			switch (currentStep) {
			case 1: this.animationOne(); break;
			case 2: this.animationTwo(); break;
			default: this.nextStep();
			}
		},
		animationOne() {
			if (this.animating) return;
			this.animating = true;
			const tl = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					// setTimeout(() => {
					// 	this.animationTwo();
					// }, 2000);
				},
			});

			tl.to(this.$refs.slogan3, 1, { opacity: 1 })
                .to(this.$refs.slogan2, 1, { opacity: 1 })
                .to(this.$refs.slogan1, 1, { opacity: 1 });
		},
		animationTwo() {
			if (this.animating) return;
			this.animating = true;

			const tl = new TimelineLite({
				onComplete: () => {
					this.animating = false;
					ready = true;
				},
			});

			tl.to([this.$refs.slogan1, this.$refs.slogan2, this.$refs.slogan3], 0.5, { opacity: 0 })
                .to(this.$refs.slogan7, 1, { opacity: 1 })
                .to(this.$refs.slogan6, 1, { opacity: 1 })
                .to(this.$refs.slogan5, 1, { opacity: 1 })
                .to(this.$refs.slogan4, 1, { opacity: 1 });
		},
		nextStep() {
			if (ready) {
				this.$router.replace('Names');
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/extend.scss';

.slogan{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    &__one{
        position: absolute;
        left: 50%;
        top: tw(244);
        width: tw(416);
        height: tw(780);
        display: flex;
        justify-content: space-between;
        transform: translateX(-50%);

        &>div{
            opacity: 0;
            background-position: center top;
            background-size: contain;
            background-repeat: no-repeat;
            width: tw(98);
            height: 100%;
        }

        &--2{
            transform: translateY(tw(60));
        }
        &--3{
            transform: translateY(tw(-122));
        }
    }

    &__two{
        position: absolute;
        top: tw(380);
        left: 50%;
        width: tw(454);
        height: tw(550);
        display: flex;
        justify-content: space-between;
        transform: translateX(-50%);

        &>div{
            opacity: 0;
            background-position: center top;
            background-size: contain;
            background-repeat: no-repeat;
            width: tw(98);
            height: 100%;
        }

        &--2{
            transform: translateY(tw(44));
        }
        &--3{
            transform: translateY(tw(-110));
        }
        &--4{
            transform: translateY(tw(20));
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
