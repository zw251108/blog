//Blog.ApplicationAdapter = DS.FixtureAdapter;

Blog.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'stories'
});

Blog.Feedback = DS.Model.extend({
	email: DS.attr('string'),
	name: DS.attr('string'),
	title: DS.attr('string'),
	excerpt: DS.attr('string'),
	submittedOn: DS.attr('date')
});