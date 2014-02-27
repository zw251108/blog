Blog.DetailRoute = Ember.Route.extend({
	model: function( params ){
		return this.get('store').find('feedback', params.story_id);
	}
});