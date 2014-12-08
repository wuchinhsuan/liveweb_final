// HTTP Portion
var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8082);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	//console.log("The Request is: " + parsedUrl.pathname);
	
	// Read index.html
	
	fs.readFile(__dirname + parsedUrl.pathname, 
		// Callback function for reading
		function (err, data) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}



// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);
// var cid=0;
var idarray=[];
var useridarray=[];

					for (var i = 0; i < 6; i++) {
						idarray[i] = null;
							
					}


// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
	// We are given a websocket object in our function
	function (socket) {
	
		// console.log("We have a new client: " + socket.id);

		// if (idarray.indexOf(socket.id) != -1){}
		// 	else{
		// 			//idarray.push(socket.id)
		// 			for (var i = 0; i < 6; i++) {
		// 				if (idarray[i] == null) {
		// 					idarray[i] = socket.id;
		// 					break;
		// 				}
		// 			}
		// 		}
		// var clientid=socket.id;


		//user version
		// if (useridarray.indexOf(userid) != -1){}
		// 	else{
		// 			useridarray.push(userid)
		// 		}
		// var userclientid=userid;


		// When this user "send" from clientside javascript, we get a "message"
		// client side: socket.send("the message");  or socket.emit('message', "the message");

		socket.on('databack', function(data) {
		console.log(socket.id+"send");
		// Data comes in as whatever was sent, including objects
		// var newvideo={};
		// newvideo.clientid=socket.id;
		// newvideo.array=idarray;
		// // newvideo.userid=randomid;
		// io.sockets.emit('imageback',newvideo);

		//user version
		// var usernewvideo={};
		// usernewvideo.clientid=userid;
		// usernewvideo.array=useridarray;
		// io.sockets.emit('imageback',usernewvideo);
		// console.log(userid);
		});
		// cid++;


		//抓嘴巴mouth
		socket.on('ppl', function(ppldata) {
			console.log("Received: 'ppl' " + ppldata);
			io.sockets.emit('ppl', ppldata);
		});
		// //nose
		// socket.on('nose', function(nosedata) {
		// 	console.log("Received: 'nose' " + nosedata);
		// 	io.sockets.emit('nose', nosedata);
		// });

		// socket.on('eyebrow', function(eyebrowdata) {
		// 	console.log("Received: 'eyebrow' " + eyebrowdata);
		// 	io.sockets.emit('eyebrow', eyebrowdata);
		// });

		// socket.on('leye', function(leyedata) {
		// 	console.log("Received: 'leye' " + leyedata);
		// 	io.sockets.emit('leye', leyedata);
		// });

		// socket.on('reye', function(reyedata) {
		// 	console.log("Received: 'reye' " + reyedata);
		// 	io.sockets.emit('reye', reyedata);
		// });

		// 		socket.on('sharon', function(sharondata) {
		// 	console.log("Received: 'sharon' " + sharondata);
		// 	io.sockets.emit('sharon', sharondata);
		// });
		socket.on('frame', function(data) {
			// Data comes in as whatever was sent, including objects
			console.log("Received: 'frame' " + data);
			
			// Send it to all of the clients
			io.emit('frame', data);
			/* socket.broadcast.emit('backcolor', data); */
		});


		
socket.on('disconnect', function() {
			console.log("Client has disconnected");
			var index = idarray.indexOf(socket.id);
			//idarray.splice(index, 1);
			idarray[index] = null;
		});
	}
);

