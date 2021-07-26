window.onload = () => {
  document.querySelectorAll('.MyNav > button')[0].onclick = () => {
    var btn = document.querySelectorAll('.MyNav > button')[0];
    if (btn.getAttribute('state') === 'true') {
      document.querySelectorAll('.MyNav')[0].style.transition = 'all 1.4s';
      document.querySelectorAll('.MyNav')[0].style.maxHeight = '450px';
      btn.setAttribute('state', 'false');
    } else {
      document.querySelectorAll('.MyNav')[0].style.transition = 'all .5s';
      document.querySelectorAll('.MyNav')[0].style.maxHeight = '40px';
      btn.setAttribute('state', 'true');
    }
  }
}