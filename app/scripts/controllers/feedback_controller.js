Blog.FeedbackController = Ember.ObjectController.extend({
	actions: {
		save: function(){
			var store = this.get('store'),    // 调用本地存储
				fb = store.createRecord('feedback', {
					email: $('#email').val(),
					name: $('#name').val(),
					title: $('#title').val(),
					excerpt: $('#excerpt').val(),
					submittedOn: new Date()
				});

			fb.save();
			this.transitionToRoute('list');    // url 跳转
		}
	}
});