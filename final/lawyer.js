  var socket = io.connect('http://104.131.93.171:8082/');

// socket.on('databack', function(data) {
// socket.emit('databack',facesDragged);
//         document.getElementById('pplmessages').innerHTML = "" + data + 
//  + "" + document.getElementById('pplmessages').innerHTML;
//  console.log("Received"+data)
// });

  socket.on('connect', function(){
  	console.log("connected bitch");
  });
  
socket.on ('frame', function(data){
			var f = data;
				console.log(data);
				fr(f);
				

											
			});
function fr(data){
				   facesDragged = data;
				   document.getElementById("messages").innerHTML = data;			};

