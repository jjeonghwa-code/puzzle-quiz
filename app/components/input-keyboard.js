import Ember from 'ember';

export default Ember.Component.extend({
  onCharacterPressed() {},
  onDeleteCharacter() {},

  letterRows: Ember.computed(function() {
    let letters = [
      [ ...'qwertyuiop' ],
      [ ...'asdfghjkl' ],
      [ ...'zxcvbnm' ],
    ];

    let rows = letters.map((rowLetters) => {
      return rowLetters.map((letter) => {
        return {
          letter,
          action: 'characterPressed',
        }
      });
    });

    // Add the backspace key.
    rows[0].push({
      letter: '&lArr;',
      action: 'deleteCharacter',
    });

    return rows;
  }),

  actions: {
    keyPressed({ letter, action }) {
      if (action === 'deleteCharacter') {
        return this.get('onDeleteCharacter')();
      }

      return this.get('onCharacterPressed')(letter);
    }
  }
});
