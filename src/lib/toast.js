const style = `display: block;
        color: white;
        max-width: 60%;
        text-align: center;
        display: absolute;
        padding: 5vw 10vw;
        border-radius: .05rem;
        left: 50%;
        font-size: .22rem;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 9999;
        display: none;
        top: 50%;`;
const bgStyle = `position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        left: 0;
        top: 0;
        border-radius: .05rem;
        z-index: -1;`;

let timer = null;
export default {
	install(Vue, options) {
		/**
         *
         * @param text锛� 瑕佸脊鍑虹殑鏂囧瓧
         * @param timeout锛氳嚜鍔ㄥ叧闂殑鏃堕棿锛堟绉掞級銆傚鏋滀笉鏄痭umber绫诲瀷锛屽垯姘镐箙鏄剧ず鎴栬€呯洿鎺ュ叧闂�
         */
		const toast = function (text, timeout = 2000) {
			let toast = document.getElementById('pa-toast');
			let bg = document.createElement('div');
			bg.setAttribute('style', bgStyle);

			if (typeof timeout === 'number') {
				showToast();
				timer = setTimeout(() => {
					// 鍔ㄧ敾缁撴潫鍚庡垹闄om锛屾竻绌哄彉閲�
					hideToast();
				}, timeout);
			} else if (timeout) {
				showToast();
			} else {
				hideToast();
			}

			function showToast() {
				clearTimeout(timer);
				if (!toast) {
					toast = document.createElement('div');
					toast.setAttribute('id', 'pa-toast');
					toast.setAttribute('style', style);

					document.body.appendChild(toast);
				}
				// innerText浼氱Щ闄g锛屾墍浠ユ瘡娆￠兘瑕佹彃鍏�
				toast.innerText = text;
				toast.appendChild(bg);

				toast.setAttribute('class', 'animated fadeIn faster');

				toast.style.display = 'block';
				toast.style.opacity = '1';
			}

			function hideToast() {
				clearTimeout(timer);
				toast.addEventListener('animationend', removeToast);
				toast.setAttribute('class', 'animated fadeOut faster');
				toast.style.opacity = '0';
			}

			function removeToast() {
				toast.removeEventListener('animationend', removeToast);
				toast.style.display = 'none';
				toast = null;
				bg = null;
			}
		};

		// 娉ㄥ唽鏂规硶
		Vue.prototype.$toast = toast;
		Vue.prototype.$toast = (msg, timer) => {
			toast(msg, timer || 2000);
		};
		Vue.prototype.$showTips = (msg) => {
			toast(msg, true);
		};
		Vue.prototype.$hideTips = () => {
			toast('', false);
		};
	},
};
