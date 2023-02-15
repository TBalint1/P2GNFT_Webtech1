window.addEventListener("load", (event) => {

    const header = document.querySelector('header');
    header.style.opacity = 0;

    setTimeout(() => {
        header.style.transition = 'all 1s ease';
        header.style.opacity = 1;
    }, 1000);

    const recipe1 = document.getElementById('recipe1');
    recipe1.style.opacity = 0;

    setTimeout(() => {
        recipe1.style.transition = 'all 1.5s ease';
        recipe1.style.opacity = 1;
    }, 1500);

    const recipe2 = document.getElementById('recipe2');
    recipe2.style.opacity = 0;

    setTimeout(() => {
        recipe2.style.transition = 'all 2s ease';
        recipe2.style.opacity = 1;
    }, 2000);

    const recipe3 = document.getElementById('recipe3');
    recipe3.style.opacity = 0;

    setTimeout(() => {
        recipe3.style.transition = 'all 2.5s ease';
        recipe3.style.opacity = 1;
    }, 2500);

});

