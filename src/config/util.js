import Vue from 'vue';

export const isWeixinBrowser = () => /micromessenger/i.test(navigator.userAgent);

export const bus = new Vue({
	data() {
		return {
			musicList: {},
		};
	},
});
// 拿到css中 tw(100) px 的值
export const getComputedPx = px => parseInt(getComputedStyle(document.getElementById('_storage')).fontSize, 10);

export const getTraditionMonth = (month) => {

};
