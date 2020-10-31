setInterval(function () {
  var now = moment();
  $("#timeDate").text(now.format("MMM Do YYYY, h:mm:ss a"));
}, 1000);

$("#myModal").modal(options);
