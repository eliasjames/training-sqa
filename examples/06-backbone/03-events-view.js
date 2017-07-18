const OrderedView = Backbone.View.extend({
  changeEnd() {
    this.model.set( 'end', 100 );
  },
  changeStart() {
    this.model.set( 'start', 1 );
  },
  events: {
    'click .change-start': 'changeStart',
    'click .change-end': 'changeEnd'
  },
  initialize() {
    this.listenTo( this.model, 'change', this.render )
  },
  render() {
    let template = Handlebars.compile( $('#ordered-template').html())
    let renderedTemplate = template( this.model.attributes );
    this.$el.html( renderedTemplate );
  }
});

let myView = new OrderedView({ model: myModel });
$( document ).ready( ()=>{
  $( '#message-area' ).append( myView.el );
  myView.render();
});
