
(function () {
    const timezones = [
        'Australia/Lord_Howe',
        'Australia/Hobart',
        'Australia/Currie',
        'Australia/Melbourne',
        'Australia/Sydney',
        'Australia/Broken_Hill',
        'Australia/Brisbane',
        'Australia/Lindeman',
        'Australia/Adelaide',
        'Australia/Darwin',
        'Australia/Perth',
        'Australia/Eucla',
        // 'Europe/Amsterdam' // Enable this to test in your own timezone 😏
    ]
    if (timezones.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)) {
        document.body.style.transform = 'rotate(180deg)'
        document.body.style.margin = 0              // This is only here because Mart can't code KEKW
        document.body.style.height = '100vh'        // This is only here because Mart can't code KEKW
    }
})();
