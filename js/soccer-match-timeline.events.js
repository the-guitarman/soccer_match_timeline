$(document).ready(function() {
  $(document)
	.on('match-event:add', '#match-timeline', function(event, matchEvent) {
      var self = $(this);
      var matchEvents = self.data('match-events') || [];
      self.trigger('match-event:beforeAdd', matchEvent, matchEvents);
      matchEvents.push(matchEvent);
      self.data('match-events', matchEvents);
      matchEventsRenderer.init();
      self.trigger('match-event:afterAdd', matchEvent, matchEvents);
    })
    .on('match-event:remove', '#match-timeline', function(event, removedElementIndex) {
      var self = $(this);
      var matchEvents = self.data('match-events') || [];
      var removedElement = matchEvents.splice(removedElementIndex, 1)[0];
      self.trigger('match-event:beforeRemove', removedElementIndex, removedElement, matchEvents);
      self.data('match-events', matchEvents);
      matchEventsRenderer.init();
      self.trigger('match-event:afterRemove', removedElementIndex, removedElement, matchEvents);
    })
});