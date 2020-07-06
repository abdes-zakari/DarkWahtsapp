window.addEventListener('DOMNodeRemoved', function() {
  if (document.getElementById('darkstyle_css') == null) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

    link.id     = 'darkstyle_css';
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = chrome.extension.getURL('css_dark.css');
    link.media  = 'all';

    head.appendChild(link);
  }


  if (document.getElementById('testJs') == null) {
    var body = document.getElementsByTagName('body')[0],
      link = document.createElement('link');

    link.id     = 'testJs';
    link.type   = 'text/javascript';
    link.href   = chrome.extension.getURL('test.js');
    link.media  = 'all';

    body.appendChild(link);
  }
});
