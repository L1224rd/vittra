// $('document').ready(() => {
//   $('form').submit((e) => {
//     e.preventDefault();
//     const formData = new FormData($(e.target));
//     console.log((formData));

//     $.ajax({
//       url: '/uploads',
//       type: 'POST',
//       dataType: 'json',
//       data: formData,
//       success: (res) => {
//         console.log(res);
//       },
//       cache: false,
//       contentType: false,
//       processData: false,
//     });
//   });

//   $('input[type=file]').change((e) => {
//     if ($(e.target).val().length) {
//       $(e.target).parent().parent().submit();
//     }
//   });
// });
