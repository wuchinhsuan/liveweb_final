  var socket = io.connect('http://104.131.39.173:8080/');

// socket.on('databack', function(data) {
// socket.emit('databack',facesDragged);
//         document.getElementById('pplmessages').innerHTML = "" + data + 
//  + "" + document.getElementById('pplmessages').innerHTML;
//  console.log("Received"+data)
// });

  socket.on('connect', function(){
  	console.log("connected bitch");
  });
  


socket.on('databack', function(data) {
	console.log(data);
	


});



// socket.emit('databack',facesDragged);
//         document.getElementById('pplmessages').innerHTML = "" + data + 
//  + "" + document.getElementById('pplmessages').innerHTML;
//  console.log("Received"+data)
// });
