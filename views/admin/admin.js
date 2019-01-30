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

const updatePartnerCards = () => {
  $('#home-partners-cards').html('');
  partnerCards.forEach((card) => {
    $('#home-partners-cards').append(`
      <div>
        <b>Imagem</b>: ${card.image} 
        <b>Link</b>: ${card.link} - <span onclick=window.deletePartnerCard('${card.link}')>🗑</span> 
        - <span onclick=window.editPartnerCard('${JSON.stringify(card)}')>✎</span>
      </div>
    `);
  });
};

const updateTestimonialCards = () => {
  $('#home-testimonials-cards').html('');
  testimonialCards.forEach((card) => {
    $('#home-testimonials-cards').append(`
      <div>
        <b>Autor</b>: ${card.author} 
        <b>Texto</b>: ${card.text} 
        <b>Negócio</b>: ${card.business} - <span onclick=window.deleteTestimonialCard('${card.author}')>🗑</span> 
        - <span onclick=window.editTestimonialCard('${JSON.stringify(card)}')>✎</span>
      </div>
    `);
  });
};


$('document').ready(() => {
  $.get('/vt-admin/content/home', (data) => {
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
    updatePartnerCards();
    updateTestimonialCards();
  });

  $('#post-button').click(() => {
    const tags = $('#post-tags-input').val().split(',');
    const newTags = tags.map(tag => tag.trim());

    const data = JSON.stringify({
      title: $('#post-title-input').val(),
      tags: newTags,
      content: quill.getContents(),
    });

    $.post('/vt-admin/posts/create', {
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

  window.deletePartnerCard = (link) => {
    partnerCards = partnerCards.filter(card => card.link !== link);
    updatePartnerCards();
  };

  window.deleteTestimonialCard = (author) => {
    testimonialCards = testimonialCards.filter(card => card.author !== author);
    updateTestimonialCards();
  };

  window.editAtuacaoCard = (data) => {
    const card = JSON.parse(data);
    window.deleteAtuacaoCard(card.title);
    $('#home-atuacao-card-title').val(card.title);
    $('#home-atuacao-card-text').val(card.text);
    $('#home-atuacao-card-image').val(card.image);
    $('#home-atuacao-card-link').val(card.link);
  };

  window.editPartnerCard = (data) => {
    const card = JSON.parse(data);
    window.deletePartnerCard(card.link);
    $('#home-partners-card-image').val(card.image);
    $('#home-partners-card-link').val(card.link);
  };

  window.editTestimonialCard = (data) => {
    const card = JSON.parse(data);
    window.deleteTestimonialCard(card.author);
    $('#home-testimonials-card-author').val(card.author);
    $('#home-testimonials-card-text').val(card.text);
    $('#home-testimonials-card-business').val(card.business);
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
    partnerCards.push({
      image: $('#home-partners-card-image').val(),
      link: $('#home-partners-card-link').val(),
    });
    console.log(partnerCards);

    // clear inputs
    $('#home-partners-card-image').val('');
    $('#home-partners-card-link').val('');

    updatePartnerCards();
  });

  $('#home-testimonials-card-button').click(() => {
    testimonialCards.push({
      author: $('#home-testimonials-card-author').val(),
      text: $('#home-testimonials-card-text').val(),
      business: $('#home-testimonials-card-business').val(),
    });

    // clear inputs
    $('#home-testimonials-card-author').val('');
    $('#home-testimonials-card-text').val('');
    $('#home-testimonials-card-business').val('');

    updateTestimonialCards();
  });

  $('#update-home-button').click(() => {
    $.post('/vt-admin/content/home', {
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
