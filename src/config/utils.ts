import Vue from 'vue';

export const isWeixinBrowser = () => /micromessenger/i.test(navigator.userAgent);

export const bus = new Vue({
	data() {
		return {
            name: '和小明',
            musicList: {},
            imagesCache: {},
		};
	},
});
// 拿到css中 tw(100) px 的值
export const getComputedPx = (px: number) : number => parseInt(getComputedStyle(document.getElementById('_storage')).fontSize, 10);

export const getTraditionMonth = (month: number): String => {
    return ['壹','贰','叁','肆','伍','陆','柒','捌','玖','拾','拾壹','拾贰'][month]
};

export const getTraditionWeek = (week: number): String => {
    return ['一','二','三','四','五','六','日'][week]
}
