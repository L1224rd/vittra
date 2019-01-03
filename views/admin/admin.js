$('document').ready(() => {
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
});