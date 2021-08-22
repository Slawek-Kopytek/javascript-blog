'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  /* remove class 'active' from all article links */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /*  add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' atribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){

    /* get the article id */

    const articleId = article.getAttribute('id');

    /* find the title element */
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';


    /* insert link into titleList */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags(){

  /* [DONE]find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles){

    /* [DONE]find tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);

    /* [DONE]make html variable with empty string */
    let html = '';

    /* [DONE]get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* [DONE]split tags into array */
    const articleTagsArray = articleTags.split(' ');

    /* [DONE]START LOOP: for each tag */
    for (let tag of articleTagsArray){

      /* [DONE]generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

      /* [DONE]add generated code to html variable */
      html += linkHTML;
    }
    /* END LOOP: for each tag */

    /* [DONE]insert HTML of all the links into the tags wrapper */
    tagsList.innerHTML = html;

  /* END LOOP: for every article: */
  }
  const links = document.querySelectorAll(optArticleTagsSelector);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTags();
