(function () {
    //  Change 'Australia' to 'Amsterdam' to test @KingerNL 😉  
    if (Intl.DateTimeFormat().resolvedOptions().timeZone.includes('Australia')) {
        document.body.style.transform = 'rotate(180deg)'
    }
})();

