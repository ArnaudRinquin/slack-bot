module.exports = function(req, res){

  var trigger = req.body.trigger_word;
  var text = req.body.text;

  // just remove the trigger word
  var response = text.slice(trigger.length + 1);

  res.json({
    text: response
  });
};
