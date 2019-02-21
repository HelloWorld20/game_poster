<template>
    <section class="names"
        :style="{'background-image': `url(${require('imgs/bg-main.png')})`}"
    >
        <div class="names__block">
            <div class="names__one">
                <div class="names__one--1"
                    :style="{'background-image': `url(${require('imgs/name/bg-yuminhong.png')})`}"
                ></div>
                <div class="names__one--2"
                    :style="{'background-image': `url(${require('imgs/name/bg-papi.png')})`}"
                ></div>
                <div class="names__one--3"
                    :style="{'background-image': `url(${require('imgs/name/bg-zhangmofan.png')})`}"
                ></div>
                <div class="names__one--4"
                    :style="{'background-image': `url(${require('imgs/name/bg-panyao.png')})`}"
                ></div>
                <div class="names__one--5"
                    :style="{'background-image': `url(${require('imgs/name/bg-fandeng.png')})`}"
                ></div>
                <div class="names__one--6"
                    :style="{'background-image': `url(${require('imgs/name/bg-libeika.png')})`}"
                ></div>
                <div class="names__one--7"
                    :style="{'background-image': `url(${require('imgs/name/bg-liangzhanhua.png')})`}"
                ></div>
                <div class="names__one--8"
                    :style="{'background-image': `url(${require('imgs/name/bg-qinshuo.png')})`}"
                ></div>
            </div>
            <div class="names__input">
                <div class="names__input-me"
                    :style="{'background-image': `url(${require('imgs/name/bg-me.png')})`}"
                ></div>
                <div class="names__input-box">
                    <div class="names__input-box-text">
                        <span>
                            {{names}}
                            <span v-show="blinkShown"></span>
                        </span>
                    </div>
                    <input type="text" v-model="names"
                        class="names__input-box-input"
                        ref="input"
                        autofocus
                        @focus="blinkShown = true"
                        @blur="blinkShown = false"
                    >
                </div>
            </div>
            <div class="names__two">
                <div class="names__two--1"
                    :style="{'background-image': `url(${require('imgs/name/bg-linshao.png')})`}"
                ></div>
                <div class="names__two--2"
                    :style="{'background-image': `url(${require('imgs/name/bg-linan.png')})`}"
                ></div>
                <div class="names__two--3"
                    :style="{'background-image': `url(${require('imgs/name/bg-xuzhibin.png')})`}"
                ></div>
                <div class="names__two--4"
                    :style="{'background-image': `url(${require('imgs/name/bg-songchao.png')})`}"
                ></div>
                <div class="names__two--5"
                    :style="{'background-image': `url(${require('imgs/name/bg-yangdazhi.png')})`}"
                ></div>
                <div class="names__two--6"
                    :style="{'background-image': `url(${require('imgs/name/bg-gudian.png')})`}"
                ></div>
                <div class="names__two--7"
                    :style="{'background-image': `url(${require('imgs/name/bg-tanjing.png')})`}"
                ></div>
            </div>
            <!-- <vue-wave></vue-wave> -->
            <div class="names__btn"
                @click="nextStep"
                :style="{'background-image': `url(${require('imgs/btn-up.png')})`}"
            ></div>
        </div>
    </section>
</template>

<script>
import { bus } from '@/config/utils';
import VueWave from '@/components/childComponents/Wave';

export default {
	data() {
		return {
			names: '',
			blinkShown: false,
		};
	},
	components: { VueWave },
	methods: {
		nextStep() {
			if (this.names)	{
				this.$router.replace('Edit');
			} else {
				this.$refs.input.focus();
			}
		},
	},
	watch: {
		names(val) {
			bus.name = val;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/extend.scss';

.names{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    // padding-top: tw(198);
    display: flex;
    justify-content: center;
    align-items: center;

    &__block{
        width: 100%;
    }

    &__one{
        position: relative;
        width: 100%;
        height: tw(310);
        opacity: .5;
        &>div{
            position: absolute;
            background-position: left center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        &--1{
            animation: shineAnimate();
            left: tw(140);
            top: tw(0);
            width: tw(258);
            height: tw(58);
        }
        &--2{
            animation: shineAnimate();
            left: tw(426);
            top: tw(46);
            width: tw(270);
            height: tw(70);
        }
        &--3{
            animation: shineAnimate();
            left: tw(68);
            top: tw(80);
            width: tw(260);
            height: tw(60);
        }
        &--4{
            animation: shineAnimate();
            left: tw(456);
            top: tw(120);
            width: tw(208);
            height: tw(58);
        }
        &--5{
            animation: shineAnimate();
            left: tw(126);
            top: tw(160);
            width: tw(206);
            height: tw(56);
        }
        &--6{
            animation: shineAnimate();
            left: tw(352);
            top: tw(192);
            width: tw(254);
            height: tw(54);
        }
        &--7{
            animation: shineAnimate();
            left: tw(60);
            top: tw(252);
            width: tw(258);
            height: tw(58);
        }
        &--8{
            animation: shineAnimate();
            left: tw(474);
            top: tw(260);
            width: tw(204);
            height: tw(54);
        }
    }

    &__input{
        height: tw(160);
        width: 100%;
        text-align: center;
        &-me{
            width: tw(108);
            height: tw(47);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        &-box{
            position: relative;
            width: tw(278);
            height: tw(90);
            background-color: black;
            margin: tw(20) auto;
            overflow: hidden;

            &-text{
                color: white;
                width: 100%;
                height: 100%;
                font-size: tw(46);
                line-height: tw(90);
                z-index: 1;
                // text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;

                &>span{
                    position: relative;
                    // line-height: tw(80);
                    display: block;
                    height: tw(80);
                    width: auto;
                    &>span{
                        content: '';
                        position: absolute;
                        width: 2px;
                        height: tw(80);
                        display: block;
                        right: tw(-8);top: 0;
                        background-color: white;
                        animation: blink 1s infinite steps(1, start);
                    }
                }
            }

            &-input{
                z-index: 2;
                width: 100%;height: 100%;
                position: absolute;
                left: 0;top: 0;
                font-size: tw(46);
                line-height: tw(90);
                text-align: center;
                opacity: 0;

            }
        }
    }

    &__two{
        position: relative;
        width: 100%;
        height: tw(278);
        margin-top: tw(12);
        opacity: .5;
        &>div{
            position: absolute;
            width: tw(300);
            height: tw(58);
            background-position: left center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        &--1{
            animation: shineAnimate();
            left: tw(88);
            top: tw(0);
            width: tw(210);
            height: tw(60);
        }
        &--2{
            animation: shineAnimate();
            left: tw(438);
            top: tw(18);
            width: tw(208);
            height: tw(58);
        }
        &--3{
            animation: shineAnimate();
            left: tw(168);
            top: tw(60);
            width: tw(260);
            height: tw(60);
        }
        &--4{
            animation: shineAnimate();
            left: tw(370);
            top: tw(126);
            width: tw(256);
            height: tw(56);
        }
        &--5{
            animation: shineAnimate();
            left: tw(72);
            top: tw(152);
            width: tw(208);
            height: tw(56);
        }
        &--6{
            animation: shineAnimate();
            left: tw(458);
            top: tw(206);
            width: tw(208);
            height: tw(58);
        }
        &--7{
            animation: shineAnimate();
            left: tw(166);
            top: tw(220);
            width: tw(208);
            height: tw(58);
        }
    }

    &__btn{
        margin: tw(94) auto 0;
        width: tw(278);
        height: tw(90);
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        box-shadow: tw(10) tw(10) 0 0 #7a7a7a;
    }

    @keyframes blink {
        0%, 100%{
            background: black;
        }
        50%{
            background: white;
        }
    }
}
</style>

