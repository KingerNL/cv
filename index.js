function pageSwitch(page){
    $(".loader-wrapper").fadeIn("slow")
    setTimeout(()=>{window.location = page;},1100)
  }