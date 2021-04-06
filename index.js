let isLocalhost = ''
if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    isLocalhost = '.html'

function pageSwitch(page){
    $(".loader-wrapper").fadeIn("normal")
    setTimeout(()=>{window.location = page + isLocalhost}, 400)
  }

  setTimeout(function(){$(".loader-wrapper").fadeOut("normal")  }, 400)
