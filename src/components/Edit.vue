<template>
    <section class="edit" ref="posterBody">
        {{name}}
    </section>
</template>

<script>
import capture from 'html2canvas';
import { bus } from '@/config/utils';

export default {
	data() {
		return {
			name: '',
		};
	},
	mounted() {
		this.name = bus.name;
	},
	methods: {

		capture() {
			capture(document.querySelector('.edit')).then((canvas) => {
				const result = canvas.toDataURL();
				bus.posterUrl = result;
                // console.log(result);
                // document.documentElement.style.background = `url(${result})`;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.edit{
    width: 100%;
    height: 100%;
}
</style>
