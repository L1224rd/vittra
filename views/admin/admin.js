$('document').ready(() => {
  $.get('/content/home', (data) => {
    $('#home-banner-title').val(data.banner.title);
    $('#home-banner-description').val(data.banner.description);
    $('#home-atuacao-title').val(data.atuacao.title);
    $('#home-atuacao-description').val(data.atuacao.description);
    $('#home-call_to_action-title').val(data.call_to_action.title);
    $('#home-call_to_action-button-text').val(data.call_to_action.button.text);
    $('#home-call_to_action-button-link').val(data.call_to_action.button.link);
  });

  $('#post-button').click(() => {
    const tags = $('#post-tags-input').val().split(',');
    const newTags = tags.map(tag => tag.trim());

    const data = JSON.stringify({
      title: $('#post-title-input').val(),
      tags: newTags,
      content: quill.getContents(),
    });

    $.post('/posts/create', {
      data,
      creationTime: new Date().getTime(),
    }, (res) => {
      if (res !== 'ok') {
        alert('Error ao criar post. Detalhes no console.');
        console.log(res);
        return;
      }
      alert('Post criado com Sucessso!');
      window.location.reload();
    });
  });

  $('#update-home-button').click(() => {
    $.post('/content/home', {
      banner: {
        title: $('#home-banner-title').val(),
        description: $('#home-banner-description').val(),
      },
      atuacao: {
        title: $('#home-atuacao-title').val(),
        description: $('#home-atuacao-description').val(),
        cards: [],
      },
      call_to_action: {
        title: $('#home-call_to_action-title').val(),
        button: {
          text: $('#home-call_to_action-button-text').val(),
          link: $('#home-call_to_action-button-link').val(),
        },
      },
      partners: [],
      testmonials: [],
    }, (res) => {
      if (res === 'ok') window.location.reload();
      else console.log(res);
    });
  });
});
