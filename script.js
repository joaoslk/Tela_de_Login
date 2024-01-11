const mode = document.getElementById('icon_mode');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form')
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        //mode dark
        form.classList.add('dark')
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark')
});