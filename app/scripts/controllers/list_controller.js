Blog.ListRoute = Ember.Route.extend({
	model : function(){
		return this.get('store').findAll('feedback');
	}
});