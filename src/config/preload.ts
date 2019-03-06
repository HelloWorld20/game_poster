import { Howl } from 'howler';
import { bus } from '@/config/utils';
let loaded: number = 0;
let totalLen: number;
let percentage = 0;

interface config {
    imgs: Array<string>,
    audios: Object
}

export default class Preload {

	config: config = {
        imgs: [],
        audios: {}
    };
	percentageCB = (percentage: number): void => {};
	loadedCB = (percentage: number): void => {};

	constructor(config, percentageCB, loadedCB) {
		this.config = config;
		this.percentageCB = percentageCB;
		this.loadedCB = loadedCB;
	}

	init() {
        totalLen = this.config.imgs.length + Object.keys(this.config.audios).length;
        this.preloadImg();
        this.preloadAudio();

	}

	preloadImg() {
        // 资源写在@/config/config.js里
        bus.imagesCache = [];
        let imgs: any = this.config.imgs;

		imgs.forEach((v: string, i: number) => {
			const img = new Image();

			img.onerror = img.onload = () => {
				loaded++;

				percentage = loaded / totalLen;
                // 向父组件抛出进度事件
				this.percentageCB(percentage);
                // $emit('percentage', percentage);

				if (loaded >= totalLen) {
                // 向父组件抛出加载完成事件
                // $emit('loaded', percentage);
					this.loadedCB(percentage);
				}
			};

        // 这写法略微有点奇怪。按理来说require只能传入字符串，不能传变量。但是下面的写法又是可以的。所以将就着用着
			img.src = require(`@/assets/${v}`);
			bus.imagesCache[i] = img;
		});
    }

    preloadAudio() {
        bus.musicList = {};

        Object.keys(this.config.audios).forEach(v => {
            let audioConfig = this.config.audios[v]
            bus.musicList[v] = new Howl({
                src: [require(`@/assets/${audioConfig.src}`)],
                loop: audioConfig.loop,
                onload: () => {
                    loaded++;

                    percentage = loaded / totalLen;
                    // 向父组件抛出进度事件
                    this.percentageCB(percentage);
                    // $emit('percentage', percentage);

                    if (loaded >= totalLen) {
                    // 向父组件抛出加载完成事件
                    // $emit('loaded', percentage);
                        this.loadedCB(percentage);
                    }
                },
            });
        })
    }
}

