$('document').ready(() => {
  const quill = new Quill('#post-content', {
    theme: 'snow', // needed to style the code sections of the post
    modules: {
      toolbar: false,
    },
  });
  quill.enable(false); // disable the editor so it is like a div and not a textarea

  $.get('/get_post', (res) => {
    const data = JSON.parse(JSON.parse(res).data);

    $('#post-title').text(data.title);

    data.tags.forEach((tag) => {
      // get the tag array and separate then by commas
      $('#post-tags').append(`${tag}, `);
    });

    const tagsText = $('#post-tags').text();

    // remove the last comma from tags
    $('#post-tags').text(tagsText.substr(0, tagsText.length - 2));

    quill.setContents(data.content);
  });
});
