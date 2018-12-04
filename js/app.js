var firstMessage = document.querySelector(".first");
var secondMessage = document.querySelector(".second");
var thirdMessage = document.querySelector(".third");
var nameBox = document.querySelector(".username");
var nameEvaluation = document.querySelector(".evaluation");
var lastMessage = document.querySelector(".last");

setTimeout(function(){
  firstMessage.style.display = "block";
}, 1000);

setTimeout(function(){
  secondMessage.style.display = "block";
}, 2000);

setTimeout(function(){
  thirdMessage.style.display = "block";
}, 3000);

setTimeout(function(){
  nameBox.style.display = "block"
}, 4000);

nameBox.addEventListener('keyup', function(event){
  event.preventDefault();
  var name = event.target.value;
  var ENTER_KEY_CODE = 13;

  if(event.keyCode === ENTER_KEY_CODE){
    if(name.length > 1){
      if(name.length <= 6){
        nameEvaluation.textContent = "That's a short name";
        nameEvaluation.style.display = "block";
      }
      else{
        nameEvaluation.textContent = "That's a long name";
        nameEvaluation.style.display = "block";
      }
      setTimeout(function(){
        lastMessage.innerHTML = "Nice to meet you, <span>" + name + "</span>";
        lastMessage.style.display = "block";
      }, 1000);
    }
    else{
      alert("You need to give a name");
    }
  }
});
