let coursesTab = document.querySelector('.course-tab');
let overviewTab = document.querySelector('.overview-tab');
let notesTab = document.querySelector('.notes-tab');
let announcementTab = document.querySelector('.announcements-tab');

let accordions = document.querySelector('.mobile-accordions');
let overview = document.querySelector('.overview');
let announcements = document.querySelector('.announcements');
let notes = document.querySelector('.notes');

overviewTab.classList.add('active');


overview.classList.remove('hidden')
accordions.classList.add('hidden');
notes.classList.add('hidden');
announcements.classList.add('hidden');


console.log(overview)

const hideBlock = (a, b, c) => {
    a.classList.add('hidden')
    b.classList.add('hidden')
    c.classList.add('hidden')
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

