let l = "on";
document.getElementById("navbutton").addEventListener("click", function() {

  switch (l) {
    case "off":
      document.querySelector('#navformobile').style.animation = `navfm 0.3s linear 1 forwards`;
      l = "on"
      break;
    case "on":
      document.querySelector('#navformobile').style.animation = `navfm1 0.2s linear  forwards`;
      l = "off"
      break;
  }
});



let mode = "dark";


document.getElementById("switch").addEventListener("click", function() {
  //document.querySelector('#navformobile').style.transform = `translateX(-40vw)`;
  switch (mode) {
    case "light":
      document.querySelector('#switch').style.animation = `switchl 0.2s linear 1 forwards`;
      document.querySelector('#switchfordesk').style.animation = `switchl 0.2s linear 1 forwards`;

      document.querySelector('*').style.color = `white`;
      document.querySelector('*').style.background = `#484848`;
      document.querySelector('.sarvice').style.background = `#474475`;
      document.querySelector('.sarvice:nth-child(2)').style.background = `#474475`;
      document.querySelector('.sarvice:nth-child(3)').style.background = `#474475`;
      document.querySelector('#navformobile').style.background = `#474475`;

      mode = "dark";
      break;
    case "dark":
      document.querySelector('#switch').style.animation = `switchd 0.3s linear 1 forwards`;
      document.querySelector('#switchfordesk').style.animation = `switchd 0.3s linear 1 forwards`;

      document.querySelector('*').style.color = `black`;
      document.querySelector('*').style.background = `white`;
      document.querySelector('#navformobile').style.background = `#8098ff`;
      document.querySelector('.sarvice').style.background = `#ffd5bf`;
      document.querySelector('.sarvice:nth-child(2)').style.background = `#ffd5bf`;
      document.querySelector('.sarvice:nth-child(3)').style.background = `#ffd5bf`;

      mode = "light";
      break;
  }
});

//<!--theme selector for big screen-->

document.getElementById("switchfordesk").addEventListener("click", function() {
  //document.querySelector('#navformobile').style.transform = `translateX(-40vw)`;
  switch (mode) {
    case "light":
      document.querySelector('#switch').style.animation = `switchl 0.2s linear 1 forwards`;
      document.querySelector('#switchfordesk').style.animation = `switchl 0.2s linear 1 forwards`;

      document.querySelector('*').style.color = `white`;
      document.querySelector('*').style.background = `#484848`;
      document.querySelector('.sarvice').style.background = `#474475`;
      document.querySelector('.sarvice:nth-child(2)').style.background = `#474475`;
      document.querySelector('.sarvice:nth-child(3)').style.background = `#474475`;
      document.querySelector('#navformobile').style.background = `#474475`;

      mode = "dark";
      break;
    case "dark":
      document.querySelector('#switch').style.animation = `switchd 0.3s linear 1 forwards`;
      document.querySelector('#switchfordesk').style.animation = `switchd 0.3s linear 1 forwards`;

      document.querySelector('*').style.color = `black`;
      document.querySelector('*').style.background = `white`;
      document.querySelector('#navformobile').style.background = `#8098ff`;
      document.querySelector('.sarvice').style.background = `#ffd5bf`;
      document.querySelector('.sarvice:nth-child(2)').style.background = `#ffd5bf`;
      document.querySelector('.sarvice:nth-child(3)').style.background = `#ffd5bf`;

      mode = "light";
      break;
  }
});