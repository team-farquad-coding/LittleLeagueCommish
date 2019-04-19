//controller pages hold the functions, queries etc.

const game = require('../models/game');

//display a list of all games
exports.game_list = function(req, res, next){
    game.find({})
    .populate("game_date")
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("home", { game_list: result });
    });
};

// Display detail page for a specific game.
exports.game_detail = function(req, res) {
    game.find({game_date: req.params.game_date})
    .populate("game_date")
    .populate("home")
    .populate("visitors")
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("home", { spec_game: result });
    });
};

// Display game create form on GET.
exports.game_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game create GET');
};

// Handle game create on POST.
exports.game_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game create POST');
};

// Display game delete form on GET.
exports.game_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game delete GET');
};

// Handle game delete on POST.
exports.game_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game delete POST');
};

// Display game update form on GET.
exports.game_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game update GET');
};

// Handle game update on POST.
exports.game_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game update POST');
};