import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');
  this.route('questions', function() {
    this.route('question', { path: 'questions/:questionNumber' });
  });
});

export default Router;
