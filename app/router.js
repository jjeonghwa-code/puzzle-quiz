import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');
  this.route('questions', function() {
    this.route('question', { path: ':questionNumber' });
  });
  this.route('anagram');
  this.route('prize');
});

export default Router;
