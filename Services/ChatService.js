var Service = useRoot("/System/Service.js");

function myService(port){
this.users = [
{ name : "Igor", status: "offline"},
{ name : "Caroline", status: "online"},
{ name : "Alex", status: "online"}
];
this.messages = [{messageText: "message1"}, {messageText:"message2"}];
var self = this;
// это публичная функция:
this.GetUsers = function(status) {
  return self.getUsersList(status);
};
this.GetMessages = function() {
  return self.getMessagesList();
};
this.AddMessages = function(text) {
  return self.addMessagesList(text);
};
return Service.call(this, port, "myService");
}

myService.serviceId = "MyService";

Inherit(myService, Service, {
//... тут какие-то внутренние методы сервиса
getUsersList : function(status){
var result = [];
for(var i=0; i<this.users.length; i++)
if(this.users[i].status==status) result.push(this.users[i]);
return result;
},

getMessagesList : function(){
  var result = [];
  for(var i=0; i<this.messages.length; i++){
    result.push(this.messages[i]);
  }
  console.log("get messages");
  return result;
},

addMessagesList : function(text){
  this.messages.push({messageText: text});
  console.log("add messages");
  return true;
}
});

module.exports = myService;
