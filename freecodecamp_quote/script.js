
/*$(document).ready(function(){
    var quote_text = json.quoteText;
    var quote_author = json.quoteAuthor;
  $('.quote-enter').click(function(){

      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",function(json){
          var quote_text = json.quoteText;
          var quote_author = json.quoteAuthor;
            if(quote_author === '')
            {
                quote_author = 'Unknown'
            }
          $('.quote-text').html("<p>"+quote_text+"</p>>");
          $('.quote-author').html(quote_author);
          test = json;

      });
  });
}); */


var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data){
    $('.quote-text').text(data.quoteText);
    if(data.quoteAuthor === '')
    {
        data.quoteAuthor = 'Unknown';
    }

    $('.quote-author').text('Author:  ' +  data.quoteAuthor);
};
$(document).ready(function(){
    $.getJSON(url, getQuote, 'jsonp');

});

$('.quote-enter').click(function(){
    $.getJSON(url,getQuote,'jsonp');
});


