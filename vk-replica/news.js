const getNewsItem = (data) => `
  <div class="news__item">
     <div class="news__header">
      <h3>${data.header}</h3>
      <time datetime="${data.date}">${data.date}</time>
    </div>
    <div class="hashtags">
      ${Array.isArray(data.hashtags) && data.hashtags.map((tag) => `<a href="">#${tag}</a>`)}
    </div>
    <p>${data.text}</p>
    <span>${data.sign}</span>
    <span>тел. ${data.phone}</span>
  </div>
`;

const news = document.querySelector(`.news`);
const newsPostForm = document.querySelector(`.publisher-wrap`);
const newsRead = document.querySelector(`#news-read`);
const newsPost = document.querySelector(`#news-post`);
const publisher = document.querySelector(`#publisher`);
const captcha1 = document.querySelector(`#captcha1`);
const captcha2 = document.querySelector(`#captcha2`);
const captcha3 = document.querySelector(`#captcha3`);
const captchaid = document.querySelector(`#captchaid`);

const onMenuItemClick = () => {
  newsPostForm.classList.toggle(`visually-hidden`);
  news.classList.toggle(`visually-hidden`);
  newsRead.classList.toggle(`control__item--active`);
  newsPost.classList.toggle(`control__item--active`);

  fetch(`http://localhost/captcha`).then((res) => res.json()).then((data) => {
    captcha1.src = `./capcha/${data.num1}.PNG`;
    captcha2.src = `./capcha/${data.mark}.PNG`;
    captcha3.src = `./capcha/${data.num2}.PNG`;
    captchaid.value = data.id;
    console.log(data);
  });

};

const drawNews = () => {
  fetch(`http://localhost/news`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          news.innerHTML = data.reverse().map((item) => getNewsItem(item));
        });
};

const onPublisherSubmit = (evt) => {
  evt.preventDefault();
  publisher.style.backgroundColor = `white`;
  const data = new FormData(publisher);
  fetch(publisher.action, {
    method: `POST`,
    body: data
  }).then((e) => {
    console.log(e);
    if (e.status === 200) {
      publisher.reset();
      onMenuItemClick();
      drawNews();
    } else if (e.status === 403) {
      publisher.style.backgroundColor = `red`;
    }
  });
};

drawNews();

newsRead.addEventListener(`click`, onMenuItemClick);
newsPost.addEventListener(`click`, onMenuItemClick);
publisher.addEventListener(`submit`, onPublisherSubmit);
