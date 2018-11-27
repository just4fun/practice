$(() => new GitHub());

class GitHub {
  constructor() {
    this.initEventListeners();
  }

  initEventListeners() {
    const $button = $('.form__submit');
    $button.on('click', this.handleGo.bind(this));
  }

  handleGo(e) {
    e.preventDefault();

    const $input = $('.form__input');
    const userName = $input.val().trim();
    if (!userName) {
      alert('Please input any GitHub account');
      return;
    }

    const $result = $('.result');
    $result.text('Loading...');

    $.get(`https://api.github.com/users/${userName}/repos`)
      .then(data => {
        if (!data || data.length === 0) {
          $result.text('No result.');
        } else {
          let repoList = '<ul>';
          data.forEach(repo => {
            repoList += `<li>${repo.name}</li>`;
          })
          repoList += '</ul>';

          // Just change dom once, DO NOT change dom in loop.
          $result.html(repoList);
        }
      })
      .fail(error => {
        $result.text('No result.');
      });
  }
}
