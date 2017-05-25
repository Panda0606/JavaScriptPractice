
function getStyle(obj,name){

        if(obj.currentStyle){

          return obj.currentStyle[name];
        }else{

          return  getComputedStyle(obj, false)[name];
        }
      }

function move1(obj,json, fnEnd){
               
               clearInterval(obj.timer);

               var bStop=true;
               obj.timer=setInterval(function(){

               for (var attr in json){
                var cur=0;
               
               if(attr=='opacity'){

                cur=Math.round(parseFloat(getStyle(obj,attr))*100);

                           }else{

                  cur=parseInt(getStyle(obj,attr));
                              }

                  var speed=(json[attr]-cur)/6;
                  speed=speed>0?Math.ceil(speed):Math.floor(speed);
                   
                  if(cur==json[attr]){


                     clearInterval(obj.timer);
                
                       if(fnEnd)fnEnd();
                  }
          
                  bStop=false;

                  if(attr=='opacity'){

                     obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                     obj.style.opacity=(cur+speed)/100 ;


                      }else{
                     
                     obj.style[attr]=cur+speed+'px';
                          }
                
                }
              
               
               },30);

             };
