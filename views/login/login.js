$('document').ready(() => {
  $('#login-button').click(() => {
    $.post('/login', {
      username: $('input[name=username]').val(),
      password: $('input[name=password]').val(),
    }, (res) => {
      if (res.status === 'error') {
        console.log(res.msg);
        return;
      }
      if (res.status === 'ok') {
        document.cookie = `sessionToken=${res.msg}`;
        window.location.replace('/admin');
      }
    });
  });
});
