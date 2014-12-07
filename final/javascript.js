  var socket = io.connect('http://104.131.39.173:8080/');

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


            var $clone = ui.helper.clone();
            if (!$clone.is('.inside-drop-zone')) {
                $(this).append($clone.addClass('inside-drop-zone').draggable({
                     containment: '.dropzone'
                }));
            }
        }
    });

  });

socket.on('databack', function() {
    socket.emit('ppl',facesDragged);
});

