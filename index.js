let coursesTab = document.querySelector('.course-tab');
let overviewTab = document.querySelector('.overview-tab');
let notesTab = document.querySelector('.notes-tab');
let announcementTab = document.querySelector('.announcements-tab');

let accordions = document.querySelector('.mobile-accordions');
let overview = document.querySelector('.overview');
let announcements = document.querySelector('.announcements');
let notes = document.querySelector('.notes');

let selectors = document.querySelectorAll('[data-type]');

let VideoView = document.querySelector('.video-view');
let QuizView = document.querySelector('.quiz-view');
let ArticleView = document.querySelector('.article-view');


//the content of the announcement , notes and overview
overviewTab.classList.add('active'); //overview tab set to active

overview.classList.remove('hidden');
accordions.classList.add('hidden');
notes.classList.add('hidden');
announcements.classList.add('hidden');

QuizView.classList.add('hidden');
ArticleView.classList.add('hidden');

const showVideo = (url, poster) => {
    VideoView.poster = poster; //add the poster
    document.getElementsByTagName('source')[0].src = url //add the url
    VideoView.load(); //load the video
    //hide other views
    hideBlock(QuizView, ArticleView);
    //show Video 
    VideoView.classList.remove('hidden');
}

const showArticle = (article, title, content) => {
    document.querySelector('._article').textContent = article// set article 
    document.querySelector('._article_title').textContent = title; //set title
    document.querySelector('._article_content').textContent = content // set content
    //hide other views
    hideBlock(VideoView, QuizView);
    //show article
    ArticleView.classList.remove('hidden');
}

const hideBlock = (a, b, c) => {
    a ? a.classList.add('hidden') : '';
    b ? b.classList.add('hidden') : '';
    c ? c.classList.add('hidden') : '';
}

const setInactive = (a,b, c) => {
    a.classList.remove('active');
    b.classList.remove('active');
    c.classList.remove('active');
}

coursesTab.addEventListener('click', () => {
    accordions.classList.remove('hidden');
    coursesTab.classList.add('active');
    hideBlock(overview, notes, announcements);
    setInactive(overviewTab, notesTab, announcementTab);
});

overviewTab.addEventListener('click', () => {
    overview.classList.remove('hidden');
    overviewTab.classList.add('active');
    hideBlock(accordions, notes, announcements)
    setInactive(announcementTab, notesTab, coursesTab);
   
})

notesTab.addEventListener('click', () => {
    notes.classList.remove('hidden');
    notes.classList.add('active')
    hideBlock(accordions, announcements, overview)
    setInactive(coursesTab, overviewTab, announcementTab)
})

announcementTab.addEventListener('click', () => {
    announcements.classList.remove('hidden');
    announcementTab.classList.add('active')
    hideBlock(accordions, notes, overview);
    setInactive(notesTab, coursesTab, overviewTab);
})

