  var socket = io.connect('http://104.131.93.171:8082/');

  var facesDragged = [0,0,0,0,0,0];

//call btn
function call(){
  var calldiv=document.getElementById('callfile');
  calldiv.innerHTML='<iframe style="width:0px;height:0px;" frameborder="0" src="http://asterisk.itp-redial.com/~chw323/sinatra/intake"></iframe>';

}

// function callme(){
//   var calldiv=document.getElementById('callfile');
//   if(curmins==1 && cursecs==13){
//   calldiv.innerHTML='<iframe style="width:0px;height:0px;" frameborder="0" src="http://asterisk.itp-redial.com/~chw323/sinatra/losthighway/lhw"></iframe>';

//   }
// }

// window.onload = function() {
//   call();
// };

//DRAG JQUERY
  $(function() {
    $( ".faceitem" ).draggable({
        helper: 'clone'
    });


    $("#dropzone").droppable({
        accept: ".faceitem",
        drop: function(event, ui) {
            var obj = $(ui.helper.context);

            var index = ui.helper.context.id.split('-')[1];
            if(!obj.is('.inside-drop-zone'))
                facesDragged[Number(index)-1]++;
            
            
            console.log(facesDragged);
            socket.emit('frame', facesDragged);


            var $clone = ui.helper.clone();
            if (!$clone.is('.inside-drop-zone')) {
                $(this).append($clone.addClass('inside-drop-zone').draggable({
                     containment: '.dropzone'
                }));
            }
        }
    });

  });
  
  
socket.on('connect', function() {
				console.log("Connected please");
				
				/* console.log("mobile"); */
			});


var sendFrame = function (frame){
					console.log("framing" + frame);
					socket.emit('frame', frame);
					/* document.body.style.backgroundColor = "yellow"; */
			};


/*
var sendFamily = function(facesDragged){
	
					console.log(facesDragged);
					socket.emit('family', facesDragged);
					
			};
*/

