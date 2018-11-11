$('document').ready(() => {
  $('#post-button').click(() => {
    const tags = $('#post-tags-input').val().split(',');
    const newTags = tags.map(tag => tag.trim());

    const data = JSON.stringify({
      title: $('#post-title-input').val(),
      tags: newTags,
      content: quill.getContents(),
    });

    $.post('/create_post', { data }, (res) => {
      if (res === 'ok') window.location.replace('/blog_post');
    });
  });
});