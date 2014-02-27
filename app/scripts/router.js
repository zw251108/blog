Blog.Router.map(function (){
	// Add your routes here
	this.resource('feedback', {
		path: 'fb/new'
	});
	this.resource('list', {
		path: 'fb/list'
	}, function (){
		// 嵌套路由
		this.resource('detail', {
			//:fb_id 部分叫做动态字段，因为相应的报道 id 会被注入URL
			path: '/detail/:fb_id'
		});
	});
});
