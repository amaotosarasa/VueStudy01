const app = new Vue({
	el:'#app',
	data: {
		message: ''
	},
	created: function() {

	},
	methods: {
		onClick:function(){
			setInterval(()=>{
				this.message = new Date().toLocaleString();
			},1000);
		}
	},
});