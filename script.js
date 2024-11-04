document.addEventListener('click', function(event) {

    const overlay = document.getElementById('overlay');
    if (overlay.style.display !== 'none') {

        overlay.style.display = 'none';

        document.getElementById('main-content').style.display = 'block';
    }
});
