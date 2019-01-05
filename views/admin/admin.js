// ==================== GLOBAL VARIABLES ==================== //

let atuacaoCards = [];
let testimonialCards = [];
let partnerCards = [];

// ========================================================== //

const updateAtuacaoCards = () => {
  $('#home-atuacao-cards').html('');
  atuacaoCards.forEach((card) => {
    $('#home-atuacao-cards').append(`
      <div>
        <b>Título</b>: ${card.title}  
        <b>Texto</b>: ${card.text} 
        <b>Imagem</b>: ${card.image} 
        <b>Link</b>: ${card.link} - <span onclick=window.deleteAtuacaoCard('${card.title}')>🗑</span> 
        - <span onclick=window.editAtuacaoCard('${JSON.stringify(card)}')>✎</span>
      </div>
    `);
  });
};


$('document').ready(() => {
  $.get('/content/home', (data) => {
    $('#home-banner-title').val(data.banner.title);
    $('#home-banner-description').val(data.banner.description);
    $('#home-atuacao-title').val(data.atuacao.title);
    $('#home-atuacao-description').val(data.atuacao.description);
    $('#home-call_to_action-title').val(data.call_to_action.title);
    $('#home-call_to_action-button-text').val(data.call_to_action.button.text);
    $('#home-call_to_action-button-link').val(data.call_to_action.button.link);
    atuacaoCards = data.atuacao.cards.map(a => a);
    testimonialCards = data.testimonials.map(a => a);
    partnerCards = data.partners.map(a => a);
    updateAtuacaoCards();
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

  window.deleteAtuacaoCard = (title) => {
    atuacaoCards = atuacaoCards.filter(card => card.title !== title);
    updateAtuacaoCards();
  };

  window.editAtuacaoCard = (data) => {
    const card = JSON.parse(data);
    window.deleteAtuacaoCard(card.title);
    $('#home-atuacao-card-title').val(card.title);
    $('#home-atuacao-card-text').val(card.text);
    $('#home-atuacao-card-image').val(card.image);
    $('#home-atuacao-card-link').val(card.link);
  };

  $('#home-atuacao-card-button').click(() => {
    atuacaoCards.push({
      title: $('#home-atuacao-card-title').val(),
      text: $('#home-atuacao-card-text').val(),
      image: $('#home-atuacao-card-image').val(),
      link: $('#home-atuacao-card-link').val(),
    });

    // clear inputs
    $('#home-atuacao-card-title').val('');
    $('#home-atuacao-card-text').val('');
    $('#home-atuacao-card-image').val('');
    $('#home-atuacao-card-link').val('');

    updateAtuacaoCards();
  });

  $('#home-partners-card-button').click(() => {

  });

  $('#home-testimonials-card-button').click(() => {

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
        cards: atuacaoCards,
      },
      call_to_action: {
        title: $('#home-call_to_action-title').val(),
        button: {
          text: $('#home-call_to_action-button-text').val(),
          link: $('#home-call_to_action-button-link').val(),
        },
      },
      partners: partnerCards,
      testimonials: testimonialCards,
    }, (res) => {
      if (res === 'ok') window.location.reload();
      else {
        alert('Erro. Detalhes no console.');
        console.log(res);
      }
    });
  });
});
