window.addEventListener("load", (event) => {
    
    const header = document.querySelector('header');
    header.style.opacity = 0;

    setTimeout(() => {
        header.style.transition = 'all 1s ease';
        header.style.opacity = 1;
    }, 1000);

    const summary = document.querySelector('.summary');
    summary.style.opacity = 0;

    setTimeout(() => {
        summary.style.transition = 'all 1.5s ease';
        summary.style.opacity = 1;
    }, 1500);

    const content = document.querySelector('.content');
    content.style.opacity = 0;

    setTimeout(() => {
        content.style.transition = 'all 2s ease';
        content.style.opacity = 1;
    }, 2000);

    const img = document.querySelector('.img img');
    img.style.opacity = 0;

    setTimeout(() => {
        img.style.transition = 'all 2.5s ease';
        img.style.opacity = 1;
    }, 2500);

});

