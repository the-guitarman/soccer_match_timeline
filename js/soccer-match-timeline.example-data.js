$(document).ready(function() {
	var jsonData = '[' +
		'{"type":"kick-off","event":"Kick-Off","text":"12:30 am","minute":"0","position":"bottom","datetime":"2016-04-03T12:32:51.232Z","eventIndex":0,"lastEventIndex":8,"eventHeight":0,"halfTime":1},' +
		'{"type":"goal","text":"1:0 Steve A. (4)","minute":"26","position":"left","datetime":"2016-04-03T12:58:51.232Z","eventIndex":1,"lastEventIndex":8,"eventHeight":26,"halfTime":1,"typeTranslation":"Goal"},' +
		'{"type":"half-time-break","event":"Half-Time-Break","text":"1:16 pm<br />Match Score: 1:0","minute":"46","position":"top","datetime":"2016-04-03T13:18:51.232Z","eventIndex":2,"lastEventIndex":8,"eventHeight":20,"halfTime":1},' +
		'{"type":"kick-off","event":"Kick-Off","text":"1:32 pm","minute":"45","position":"bottom","datetime":"2016-04-03T13:32:51.232Z","eventIndex":3,"lastEventIndex":8,"eventHeight":-1,"halfTime":2},' +
		'{"type":"foul-yellow","text":"Steve A. (4)","minute":"47","position":"right","datetime":"2016-04-03T13:34:51.232Z","eventIndex":4,"lastEventIndex":8,"eventHeight":2,"halfTime":2},' +
		'{"type":"foul-yellow","text":"Bob W. (10)","minute":"48","position":"left","datetime":"2016-04-03T13:35:51.232Z","eventIndex":5,"lastEventIndex":8,"eventHeight":1,"halfTime":2},' +
		'{"type":"foul-yellow-red","text":"Steve A. (4)","minute":"50","position":"right","datetime":"2016-04-03T13:37:51.232Z","eventIndex":6,"lastEventIndex":8,"eventHeight":2,"halfTime":2},' +
		'{"type":"foul-red","text":"Bob Carter(8)","minute":"60","position":"left","datetime":"2016-04-03T13:47:51.232Z","eventIndex":7,"lastEventIndex":8,"eventHeight":10,"halfTime":2},' +
		'{"type":"final-whistle","event":"Final Whistle","text":"2:19 pm<br />Final Score: 1:0","minute":"93","position":"top","datetime":"2016-04-03T14:20:51.232Z","eventIndex":8,"lastEventIndex":8,"eventHeight":33,"halfTime":2}' +

        //'{"type":"timeline+minute","minute":"93","position":"top","datetime":"2016-04-03T14:20:51.232Z"}' +
	']';
    var data     = JSON.parse(jsonData);

    $('.js-match-events').data('match-events', data);
});