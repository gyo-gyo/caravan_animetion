
 
        $(function () {
            var pagetop = $('.top-bt');
            $(window).scroll(function () {
                 if ($(this).scrollTop() > 100) { //100ｐｘ下げたら出るようになるよ！
                    pagetop.fadeIn();
                }
                else {
                    pagetop.fadeOut();
                }
            });
            pagetop.click(function () {
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
            });
        });

        $('.modal_btn').on('click', function (){
          var target = $(this).data('target');
          console.log("target");
          var modal = document.getElementById(target);
          
        $('body').addClass('fixed');
        $(modal).fadeIn();
        });
    

    $('.modal_close').on('click', function ()
    {
        $('body').removeClass('fixed');
        $('.modal').fadeOut();
    });


// $(function () {
//   $('#openModal').click(function () {
//       $('#modalArea').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal1').click(function(){
//       $('#modalArea1').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea1').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal2').click(function(){
//       $('#modalArea2').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea2').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal3').click(function(){
//       $('#modalArea3').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea3').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal4').click(function(){
//       $('#modalArea4').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea4').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal5').click(function(){
//       $('#modalArea5').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea5').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal6').click(function(){
//       $('#modalArea6').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea6').fadeOut();
//   });
// });

// $(function () {
//   $('#openModal7').click(function(){
//       $('#modalArea7').fadeIn();
//   });
//   $('#closeModal , #modalBg').click(function(){
//     $('#modalArea7').fadeOut();
//   });
// });



// バニラJS


