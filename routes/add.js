var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
    console.log("inside addFriend");
    var name = req.query.name;
    var desc = req.query.description;
    data.friends.push({
        'name': name,
        'description': desc,
        'imageURL': 'http://lorempixel.com/400/400/people',
    });
    res.render('index', data);
  };
