const app = new Vue({
	el:'#app',
	data:{
		title: 'マウスオーバー',
	},
	methods: {
		imgMouseOver: function(e) {
			const target = e.target;
			let getSrc = target.getAttribute('src');
			target.setAttribute('src',getSrc.replace('_off.','_on.'));
		},
		imgMouseOut: function(e) {
			const target = e.target;
			let getSrc = target.getAttribute('src');
			target.setAttribute('src',getSrc.replace('_on.','_off.'));
		}
	},
});