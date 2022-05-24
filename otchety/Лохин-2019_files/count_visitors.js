function count_visitors(url)
{
   var url2 = url.replace('&','*');
   $.ajax({
   type: "POST",
   url: "../banner_db/count_visitors.php",
   data: "url="+url2,
   success: function(msg)
   {
     //alert(msg)
   }
  })
}