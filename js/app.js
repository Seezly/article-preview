const $imgBg = document.querySelector('.img');

$imgBg.style.height = window.getComputedStyle($imgBg).width;

window.addEventListener('resize', () => {
    $imgBg.style.height = window.getComputedStyle($imgBg).width;
});