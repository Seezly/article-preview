const $imgBg = document.querySelector('.img'),
        $mainHeight = document.querySelector('.main');

const $author = document.querySelector('.content__author');

const $img = document.querySelector('.content__author__img'),
        $nameDate = document.querySelector('.content__author__name-date');

const $shareBtn = document.querySelector('.content__author__share__img'),
        $share = document.querySelector('.content__author__share'),
        $shareActive = document.querySelector('.content__author__share-active'),
        $shareTriangle = document.querySelector('.content__author__share-active__triangle'),
        $shareImgBtn = document.querySelector('.content__author__share__img'),
        $shareImg = document.querySelector('.content__author__share__img-share');

function media() {
    if (matchMedia("(max-width: 1023px)")) {
        if ($shareActive.classList.contains('none')) {
            $shareActive.classList.remove('none');
            $shareActive.classList.add('share-active-media');
            $shareImgBtn.classList.add('img-media');
            $share.classList.add('share-media');
            $author.classList.add('author-media');
            $shareTriangle.style.display = 'none';
            $img.style.display = 'none';
            $nameDate.style.display = 'none';
        } else{
            $shareActive.classList.add('none');
            $shareActive.classList.remove('share-active-media');
            $shareImgBtn.classList.remove('img-media');
            $share.classList.add('share-media');
            $author.classList.remove('author-media');
            $shareTriangle.style.display = 'block';
            $img.style.display = 'flex';
            $nameDate.style.display = 'flex';
        }
    } else {
        if ($shareActive.classList.contains('none')) {
            $shareActive.classList.remove('none');
        } else{
            $share.classList.add('none');
        }
    }


}

document.addEventListener('DOMContentLoaded', () => {
    $imgBg.style.height = getComputedStyle($mainHeight).height;
});

window.addEventListener('resize', () => {
    $imgBg.style.height = getComputedStyle($mainHeight).height;
});

$shareBtn.addEventListener('click', media);

$shareBtn.addEventListener('mouseover', () => {
    $shareImg.src = "./images/icon-share-hover.svg";
});

$shareBtn.addEventListener('mouseout', () => {
    $shareImg.src = "./images/icon-share.svg";
});