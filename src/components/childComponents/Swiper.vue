<template>
    <!-- Slider main container -->
    <div ref="swiper" class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <!-- <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div> -->
            <div class="swiper-slide"
                :key="key"
                v-for="(item, key) in data"
            >{{item}}</div>
        </div>
        <!-- If we need pagination -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- If we need navigation buttons -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

let mySwiper = null;
export default {
	props: {
		data: {
			type: Array,
			default: () => [
				'slide1', 'slide2', 'slide3',
			],
		},
		value: {
			type: Number,
			default: 0,
		},
	},
	mounted() {
		mySwiper = new Swiper(this.$refs.swiper, {
            // Optional parameters
			direction: 'vertical',
			// loop: true,

            // // If we need pagination
			// pagination: {
			// 	el: '.swiper-pagination',
			// },

            // // Navigation arrows
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },

            // // And if we need scrollbar
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
            // },
			on: {
				slideChange: () => {
					this.$emit('input', mySwiper.realIndex);
				},
			},
		});

		this.$nextTick(() => {
			if (this.value !== 0) {
				mySwiper.slideTo(this.value, 0);
			}
		});
	},
	watch: {
		value() {
			mySwiper.slideTo(this.value);
		},
	},
};
</script>

<style lang="scss" scoped>

.swiper-container {
    width: 100%;
    height: 50%;
    overflow: hidden;
}
</style>
