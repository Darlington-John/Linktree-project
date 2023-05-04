function myWelcome() {
    let welcometxt;
    let user = prompt(
        'Please enter your name for more perfornance',
        'Darlington',
    );
    if (user == null || user == '') {
        welcometxt = ' You cancelled the prompt';
    } else {
        welcometxt = 'Hello ' + user + ' Welcome to Darlinton.com';
    }
    document.getElementById('welcome-text').innerHTML = welcometxt;
}