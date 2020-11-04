const $shareBtn = document.querySelector('.content__author__share__img'),
        $shareActive = document.querySelector('.content__author__share-active'),
        $shareImg = document.querySelector('.content__author__share__img-share'),
        $author = document.querySelector('.content__author'),
        $authorImg = document.querySelector('.content__author__img'),
        $date = document.querySelector('.content__author__name-date');

function btnClicked() {
    
    if ($shareActive.classList.contains('none')) {
        $shareActive.classList.remove('none');
        $shareBtn.classList.add('active');
        $authorImg.classList.add('none');
        $date.classList.add('none');
        $author.style.margin = 0;
    } else {
        $shareActive.classList.add('none');
        $shareBtn.classList.remove('active');
        $authorImg.classList.remove('none');
        $date.classList.remove('none');
        $author.style.margin = '0 2.5rem 1rem 2.5rem';
    }
}

$shareBtn.addEventListener('click', btnClicked);

$shareBtn.addEventListener('mouseover', () => {
    $shareImg.src = "./images/icon-share-hover.svg";
});

$shareBtn.addEventListener('mouseout', () => {
    $shareImg.src = "./images/icon-share.svg";
});