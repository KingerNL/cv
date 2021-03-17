(function () {
    //  Change 'Australia' to 'Amsterdam' to test @KingerNL 😉  
    if (Intl.DateTimeFormat().resolvedOptions().timeZone.includes('Australia')) {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
        document.body.style.overflow = 'hidden'
        document.body.style.transform = 'rotate(180deg)'
    }
})();

