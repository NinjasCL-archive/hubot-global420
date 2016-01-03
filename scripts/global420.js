// Description:
//  Global 420
//
// Dependencies:
//  None
//
// Configuration:
//   None
//
// Commands:
//   @robot 420
//
// Author:
//   Camilo Castro - clsource © 2016
//
// https://github.com/NinjasCL/hubot-global420
// MIT LICENCE
//
// Based on https://github.com/thedod/global420

var global420 = require('./helpers/global420');
global420 = global420.global420;

var random = require('./helpers/random');

// Put random jokes here
var jokes = [
  "I want to live in Jamaica",
  "I'm gonna smoke'a de ganja until I go blind",
];

module.exports = function(robot) {

  robot.respond(/420/i, function(res) {

    var info = global420.next420();

    var message = "";
    var places = "";
    var place = null;

    if (info.minutes === 0) {

      message = "Yay! it's 4:20 PM in:";

    } else if (info.minutes === 1) {

      message = "Just 1 minute for 4:20 PM in:";

    } else {

      message = "Hang in There!, Only " + info.minutes + " More minutes for 4:20 PM in:";

    }

    for(var i = 0; i < info.places.length; i++) {
      place = "- " + info.places[i];
      places = places + place + "\n";
    }

    var joke = random.item(jokes);

    message = message + "\n\n" + places + "\n\n" + joke;

    res.send(message);

  });
};
