'use strict'

    WS.DOMload(function(){
        ServicesManager.onconnected = function(){
            ServicesManager.GetService("ChatService", function(service, err){
                //Тут вам доступен ваш сервис, или Null, если ошибка
                if (service){
                   // ServicesManager.StartService("ChatService.js", function(service, err){
                   var Users;
                        service.GetUsers("online", function(res){
                        Users = res;
                        console.log(res);
          for (var user = 0; user < res.length; user++) {
    //				document.write(res[user].name);
            console.log(res[user].name);
            $("#userList").append("<li>"+res[user].name+"</li>")
          }
                        });
                   //     console.log(service);
                   // });
                    return;
                }
                console.log(service);
            })
        };
    });
