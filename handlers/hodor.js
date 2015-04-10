var HODOR_QUOTES = [
  "Hodor.",
  "Hodor !",
  "Hodor ?",
  "Hodor ! Hodor ! Hodor !"
];

module.exports = function(mustContainHodor){

  return function(req, res){

    var text = req.body.text;
    var isBot = req.body.user_id === "USLACKBOT";
    var containsHodor = text.toLowerCase().indexOf('hodor') > -1;

    if (isBot || (mustContainHodor && !containsHodor)) {
      res.send(''); // Will be ignored by Slack
      return;
    };

    var quote = HODOR_QUOTES[parseInt(Math.random() * HODOR_QUOTES.length)];

    res.json({
      text: quote
    });
  };
}
