'use strict'

function scrollMessages(){
  $("#messageList").scrollTop($("#messageList")[0].scrollHeight);
}

function refreshMessages(event){
  var serv = event.data.param1;
  var Messages;
  serv.GetMessages(function(res){
    Messages=res;
    for(var i=0; i<Messages.length;i++){
      $('#messageList').append("<li>"+Messages[i].messageText+"</li>");
  }
   scrollMessages();
 });
}

function sendMessages(event){
  var serv = event.data.param1;
  var messageText = $("#messageInput").val();
  serv.AddMessages(messageText,function(res){
});
 $("#messageInput").val("");
}

    WS.DOMload(function(){
        ServicesManager.onconnected = function(){
            ServicesManager.GetService("ChatService", function(service, err){
                //Тут вам доступен ваш сервис, или Null, если ошибка
                if (service){

              $("#refreshButton").bind('click', { param1: service }, refreshMessages);
              $("#sendButton").bind('click', { param1: service }, sendMessages);
              scrollMessages();
                           }
                        });

                    return;
                }
    });
