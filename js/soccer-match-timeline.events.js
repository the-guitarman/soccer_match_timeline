$(document).ready(function() {
  $(document)
    .on('click', '.flat-checkbox label', function() {
    	$(this).toggleClass('checked');
    	var checkbox = $(this).parent().find('input');
    	if (checkbox.prop('checked') === 'checked' || checkbox.attr('checked') === 'checked') {
    		checkbox.removeProp('checked').removeAttr('checked');
    	} else {
    		checkbox.prop('checked', true).attr('checked', 'checked');
    	}
    })
	.on('match-event:add', matchEventsElSelector, function(event, matchEvent) {
      var self = $(this);
      var matchEvents = self.data('match-events') || [];
      self.trigger('match-event:beforeAdd', [matchEvent, matchEvents]);
      matchEvents.push(matchEvent);
      self.data('match-events', matchEvents);
      matchEventsRenderer.init();
      self.trigger('match-event:afterAdd', [matchEvent, matchEvents]);
    })
    .on('match-event:remove', matchEventsElSelector, function(event, removedElementIndex) {
      var self = $(this);
      var matchEvents = self.data('match-events') || [];
      var removedElement = matchEvents.splice(removedElementIndex, 1)[0];
      self.trigger('match-event:beforeRemove', [removedElementIndex, removedElement, matchEvents]);
      self.data('match-events', matchEvents);
      matchEventsRenderer.init();
      self.trigger('match-event:afterRemove', [removedElementIndex, removedElement, matchEvents]);
    })
    .on('match-event:afterAdd', matchEventsElSelector, function(event, matchEvent, matchEvents) {
      matchEventButtonHandler.switchButtons();
      matchEventButtonHandler.hideEventForm();
    })
    .on('match-event:afterRemove', matchEventsElSelector, function(event, removedElementIndex, removedElement, matchEvents) {
      matchEventButtonHandler.switchButtons();
      matchEventButtonHandler.hideEventForm();
    });
});