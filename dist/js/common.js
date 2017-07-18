var feedback = (function () {

    //private

    return{
      init: function () {

        var feedback = $('.feedback'),
            cross = $('feedback-cross');

        // $('.feedback-formWrap').on("click", function () {
        //   feedback.fadeOut(600)
        // })
        $('.feedback-cross').on("click", function () {
          feedback.fadeOut(600)
        })
        $('.header-top-popap-button').on("click", function () {
          feedback.fadeIn(600)
        })
      },
      form: function () {

          var msg   = $('#formx').serialize();
          console.log('запрос отправляется');
              $.ajax({
                type: 'POST',
                url: 'popap.php',
                data: msg,
                success: function(data) {
                  $('#results').html(data);
                },
                error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
                }
              });

          }

      }
}());

var writeUs = (function () {

  return {
    form:function () {

        var msg   = $('#formx').serialize();
        console.log('запрос отправляется');
            $.ajax({
              type: 'POST',
              url: 'writeUs.php',
              data: msg,
              success: function(data) {
                $('#results').html(data);
              },
              error:  function(xhr, str){
          alert('Возникла ошибка: ' + xhr.responseCode);
              }
            });

        }
  }

}());


$(document).ready(function(){

  if ($('.feedback').length){
    feedback.init()
  };
});
