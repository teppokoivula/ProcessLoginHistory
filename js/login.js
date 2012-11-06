$(function() {

      // check for flash support
      var flash = 0;
      try {
          var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
          if (fo) flash = 1;
      } catch(e) {
          if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) flash = 1;
      }

      // add viewport meta tag
      $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />');

      // login form extra fields
      $('form#ProcessLoginForm').append('<input type="hidden" name="javascript" value="1" />');
      $('form#ProcessLoginForm').append('<input type="hidden" name="flash" value="'+flash+'" />');
      $('form#ProcessLoginForm').append('<input type="hidden" name="screen" value="'+screen.width+'x'+screen.height+'" />');
      $('form#ProcessLoginForm').append('<input type="hidden" name="window" value="'+window.innerWidth+'x'+window.innerHeight+'" />');

});