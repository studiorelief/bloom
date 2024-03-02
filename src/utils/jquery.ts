import $ from 'jquery';

// Replace span-wrapper by span-element
export function swipeElement() {
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

// V1
export function spanCMS() {
  $(document).ready(function () {
    $('.switch-cms').html(function (_, html) {
      return html.replace(/-(.*?)-/g, '<span class="span-wrapper">$1</span>');
    });
    swipeElement();
  });
}

// Hide CMS if empty
export function hideEmpty() {
  $('.w-dyn-empty').each(function () {
    $(this).closest('section').hide(); // Cible spécifiquement l'élément <section> le plus proche
  });
}

// Filter Blog & Ressources
export function blogCategories() {
  $('.cards_a-link.is-reset').click(function () {
    $('#filter-all').addClass('is-active');
  });
  $('.cards_radio-filter').click(function () {
    $('#filter-all').removeClass('is-active');
  });
}

// Copy clipboard URL
export function copyBlog() {
  const button = document.querySelector('.blog-i_social-link.is-url');

  if (button) {
    button.addEventListener('click', function () {
      const textarea = document.createElement('textarea');
      textarea.value = window.location.href;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });
  } else {
  }
}
