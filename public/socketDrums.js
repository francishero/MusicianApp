//var socket = io();
function drumsEmit() {
// Instead of previously just emitting the pattern. We now also emit the room name together.
  socket.emit('drums', 
  { room: document.getElementById('room').value,
  	pattern: drumSequencer.matrix.pattern});
}

for(let cell of $('#drums div').children())
{
  cell.addEventListener('mouseup', drumsEmit);
  cell.addEventListener('touchend', drumsEmit);
}

$(document).on('mouseup', drumsEmit);

socket.on('drums', function( data ) {
  drumSequencer.matrix.set.all(data);
  //console.log(data);
});