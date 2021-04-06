let isLocalhost = ''
if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
    isLocalhost = '.html'

function pageSwitch(page){
    $(".loader-wrapper").fadeIn("slow")
    setTimeout(()=>{window.location = page + isLocalhost}, 700)
  }

  setTimeout(function(){$(".loader-wrapper").fadeOut("slow")  }, 500)
