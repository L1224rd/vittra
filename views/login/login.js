$('document').ready(() => {
  $('#login-button').click(() => {
    $.post('/login', {
      username: $('input[name=username]').val(),
      password: $('input[name=password]').val(),
    }, (res) => {
      if (res === 'error') return;
      document.cookie = `sessionToken=${res}`;
      window.location.replace('/');
    });
  });
});
