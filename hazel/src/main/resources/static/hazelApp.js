var roomId;
var stompClient;
var clientId;
function createInterviewSession() {
	if (!roomId) {
		
		//ajax call to get uid
		console.log("sending req for new room");
		$.ajax({
			url : "/genRoomId",
			success : function(result) {
				roomId = result;
				//subscribe to /topic/{result}
				console.log(result);
				localStorage.setItem('roomId',roomId);
				window.location.replace("http://localhost:8080/interview/"
						+ result);
				localStorage.setItem('isClient','yes'+result);
			}
		});
	}
}

function getCurrentRoomId(){
	console.log(roomId);
	return roomId;
}