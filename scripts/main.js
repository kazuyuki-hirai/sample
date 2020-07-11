var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hiroshi.jpg') {
      myImage.setAttribute ('src','images/hiroshi2.jpg');
    } else {
      myImage.setAttribute ('src','images/hiroshi.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '阿部寛のHP はすばらしいよ、' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '阿部寛のHP はすばらしいよ、' + storedName;
} 

myButton.onclick = function() {
    setUserName();
}