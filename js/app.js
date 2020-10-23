const $imgAuthor = document.querySelector('.content__author__img'),
    $imgBg = document.querySelector('.img');

$imgAuthor.style.height = window.getComputedStyle($imgAuthor).width;
$imgBg.style.height = window.getComputedStyle($imgBg).width;

window.addEventListener('resize', () => {
    $imgAuthor.style.height = window.getComputedStyle($imgAuthor).width;
    $imgBg.style.height = window.getComputedStyle($imgBg).width;
});