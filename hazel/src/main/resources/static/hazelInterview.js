var stompClient;
var roomId = localStorage.getItem('roomId');
var clientId;
var intervieweeClientId;
function onKeyChangeSendMessage(){
	
}



function sendEntireCodeText(){
	
}

$(document).ready(function(){
	console.log("jquery aaaworkgin");
	if(!roomId){
		roomId=(window.location.href).split("/")[4];
	}
	clientId = Math.floor(Math.random() * 10000000000000001) + new Date();
	$("#codeTextArea").on("keyup", function(e){
		  sendMessageToQueue(e);
		});
	var socket = new SockJS('/hazel-websocket');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) {
		//setConnected(true);
		console.log('Connected: ' + frame);
		stompClient.subscribe('/topic/sub/' + (roomId), function(
				greeting) {
			console.log((greeting));//write here what to do on UI - callback acts as notify response - onmessage
			intervieweeClientId=JSON.parse(greeting.body).clientId;
			if(intervieweeClientId!=clientId){
				$("#codeTextArea").prop('disabled', true);
				$("#codeTextArea").val(JSON.parse(greeting.body).message);
			}
			// console.log(JSON.parse(greeting.body));//write here what to do on UI - callback acts as notify response - onmessage
		});
	});
	});
function sendMessageToQueue(e){
	if(localStorage.getItem('isClient')==='yes'+roomId)
	stompClient.send("/hazelApp/hello/"+roomId, {}, JSON.stringify({'message': $("#codeTextArea").val(),'clientId' : clientId}));
}