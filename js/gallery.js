$(document).ready(function () {


  let name_img;
  let second_name_img; // перехідна змінна для призначення правильного значення section_img
  let section_img;

  let prev = 'galerry-photos__arrow-prev';
  let next = 'galerry-photos__arrow-next';
  let img = 'galerry-photos__center img';

  $('.gallery__main__images__box  div  img').click(function () {
    $('body').css('overflow', 'hidden');

    let src_img = $(this).attr('src'); // img/man-repairs-motorcycle-gallery2.png

    section_img = 'img/' + src_img; // img/img/man-repairs-motorcycle-gallery2.png
    second_name_img = src_img.split('.')[0].split('');
    name_img = second_name_img[second_name_img.length - 1]; // 2

    $(img).attr('src', section_img); // збираємо шлях до картинки що підставляється

    if (name_img > 1) { $(prev).show(); }
    if (name_img < 6) { $(next).show(); }

    $('.galerry-photos').fadeIn(300, function () {
      $('.galerry-photos__block').fadeIn(300);
    });

  });

  $(prev).click(function () {
    --section_img;
    alert(section_img);
    if (name_img == 1) { $(prev).hide(); }
    if (name_img < 6) { $(next).show(); }

    $(img).attr('src', section_img);

  });

  $(next).click(function () {
    ++section_img;

    if (name_img == 6) { $(next).hide(); }
    if (name_img > 1) { $(prev).show(); }

    $(img).attr('src', section_img);

  });

  $('.galerry-photos__close').click(function () {

    $('body').css('overflow', 'auto');

    $('.galerry-photos__block').fadeOut(300, function () {
      $('galerry-photos').fadeOut(300);
    });
    $(prev).hide();
    $(next).hide();
  });

});

