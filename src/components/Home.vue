<template>
    <section class="main"
        :style="{'background-image': `url(${require('imgs/bg-main.png')})`}"
    >
        <div class="main__slogan">
            <div class="main__slogan-guid"
                ref="guid"
                :style="{'background-image': `url(${require('imgs/text-0-needguid.png')})`}"
            ></div>
            <div class="main__slogan-mention"
                ref="mention"
                :style="{'background-image': `url(${require('imgs/text-0-mention.png')})`}"
            ></div>
            <div class="main__slogan-noname"
                ref="noname"
                :style="{'background-image': `url(${require('imgs/text-0-noname.png')})`}"
            ></div>
            <div class="main__slogan-many"
                ref="many"
                :style="{'background-image': `url(${require('imgs/text-0-many.png')})`}"
            ></div>
            <div class="main__slogan-newworld"
                ref="newworld"
                :style="{'background-image': `url(${require('imgs/text-0-newworld.png')})`}"
            ></div>
        </div>
        <div class="main__logo"
            ref="logo"
            :style="{'background-image': `url(${require('imgs/bg-logo.png')})`}"
        ></div>
        <div class="main__center">
            <div class="main__center-change"
                ref="change"
                :style="{'background-image': `url(${require('imgs/text-change.png')})`}"
            ></div>
            <div class="main__center-small"
                ref="small"
                :style="{'background-image': `url(${require('imgs/bg-logo-gold.png')})`}"
            ></div>
        </div>
        <div class="main__arrow"
            ref="arrow"
            :style="{'background-image': `url(${require('imgs/icon-up.png')})`}"
        ></div>
    </section>
</template>

<script>
import { TimelineLite } from 'gsap/TweenMax';
import Hammer from 'hammerjs';

export default {
	data() {
		return {
			ready: false,
		};
	},
	mounted() {
		this.initGusture();
		this.animate();
	},
	methods: {
		initGusture() {
			const hammer = new Hammer(this.$el);
            // 启用swipedonw 和 swipeup
			hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

			hammer.on('swipeup', (e) => {
				if (this.ready) {
					this.$router.replace('Scroll');
				}
				console.log('gustrue: ', e.type);
			});
		},
		animate() {
			const tl = new TimelineLite({
				onComplete: this.onComplete,
			});
			tl.fromTo(this.$refs.logo, 3, { scale: 4, opacity: 0.5 }, { scale: 1, opacity: 1 })
                .to(this.$refs.newworld, 0.7, { opacity: 1 })
                .to(this.$refs.many, 0.7, { opacity: 1 })
                .to(this.$refs.noname, 0.7, { opacity: 1 })
                .to(this.$refs.mention, 0.7, { opacity: 1 })
                .to(this.$refs.guid, 0.7, { opacity: 1 })
                .addLabel('sloganEnd', '+=0.5')
                .to(this.$refs.change, 1, { opacity: 1 })
                .fromTo(this.$refs.small, 1, { scale: 0 }, { opacity: 1, scale: 1 }, 'sloganEnd')
                .to(this.$refs.arrow, 0.5, { opacity: 1 });
		},
		onComplete() {
			this.ready = true;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/extend.scss';

.main{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    &__slogan{
        &>div{
            width: tw(94);
            height: tw(570);
            position: absolute;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: contain;
            opacity: 0;
        }
        &-guid{
            left: tw(56);
            top: tw(382);
        }
        &-mention{
            left: tw(194);
            top: tw(492);
        }
        &-noname{
            left: tw(330);
            top: tw(348);
        }
        &-many{
            left: tw(470);
            top: tw(720);
        }
        &-newworld{
            left: tw(594);
            top: tw(466);
        }
    }

    &__logo{
        position: absolute;
        right: tw(20);
        top: tw(100);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: tw(566);
        height: tw(820);
    }

    &__center{
        width: 100%;
        height: 0;
        position: relative;
        padding-top: tw(530);
        &>div{
            opacity: 0;
        }
        &-change{
            margin: 0 auto;
            width: tw(36);
            height: tw(404);
            background-position: top;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &-small{
            margin: tw(24) auto;
            width: tw(74);
            height: tw(106);
            background-position: top;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }

    &__arrow{
        position: absolute;
        opacity: 0;
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

