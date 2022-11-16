$(document).ready(() => {
    let typingElement = $('.typing');
  
    typingElement.on('click', (e) => {
      typingElement.removeClass('animate');
      setTimeout(() => typingElement.addClass('animate'), 1);
    })
  });

  $(function() {
    var data = [
    { 
      action: 'type',
      strings: ["npm install -g mimik^400"],
      output: '<span class="gray">+mimik@0.10.2 installed</span><br>&nbsp;',
      postDelay: 1000
    },
    { 
      action: 'type',
      strings: ["cd tests^400"],
      output: ' ',
      postDelay: 1000
    },
    { 
      action: 'type',
      //clear: true,
      strings: ['mimik run^400'],
      output: $('.mimik-run-output').html()
    },
    { 
      action: 'type',
      strings: ["that was easy!", ''],
      postDelay: 2000
    }
    
  ];
    runScripts(data, 0);
  });