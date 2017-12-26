export default function() {
  this.transition(
    this.fromRoute('welcome'),
    this.toRoute('questions'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('questions'),
    this.toRoute('anagram'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('anagram'),
    this.toRoute('prize'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
