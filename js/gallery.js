$(document).ready(function () {


  let name_img;
  let second_name_img; // перехідна змінна для призначення правильного значення section_img
  let section_img;

  let prev = 'gallery-photos__arrow-prev';
  let next = 'gallery-photos__arrow-next';
  let img = 'gallery-photos__center img';

  $('.gallery-center div img').click(function () {
    $('body').css('overflow', 'hidden');

    let src_img = $(this).attr('src'); // img/man-repairs-motorcycle-gallery2.png

    section_img = 'img/' + src_img; // img/img/man-repairs-motorcycle-gallery2.png
    second_name_img = src_img.split('.')[0].split('');
    name_img = second_name_img[second_name_img.length - 1]; // 2

    $(img).attr('src', section_img); // збираємо шлях до картинки що підставляється

    if (name_img > 1) { $(prev).show(); }
    if (name_img < 6) { $(next).show(); }

    $('.gallery-photos').fadeIn(300, function () {
      $('.gallery-photos__blok').fadeIn(300);
    });

  });

  $(prev).click(function () {
    --name_img;
    if (name_img == 1) { $(prev).hide(); }
    if (name_img < 6) { $(next).show(); }

    $(img).attr('src', 'img/' + src_img + '.png');

  });

  $(next).click(function () {
    ++name_img;

    if (name_img == 6) { $(next).hide(); }
    if (name_img > 1) { $(prev).show(); }

    $(img).attr('src', 'img/' + src_img + '.png');

  });

  $('.gallery-photos__close').click(function () {

    $('body').css('overfiow', 'auto');

    $('.gallery-photos__block').fadeOut(300, function () {
      $('gallery-photos').fadeOut(300);
    });
    $(prev).hide();
    $(next).hide();
  });

})();

