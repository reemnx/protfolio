'use strict'

function onInit() {
    addProjects();
    renderProj();
}
function renderProj() {
    var projects = getProjects();
    var eldiv = document.querySelector('.proj-container');
    var strHTML = '';
    projects.map((currProj,idx) =>{
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item" onClick="onProjectPressed(${idx})">
          <a class="portfolio-link" data-toggle="modal" href="#modal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${currProj.img}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${currProj.name}</h4>
            <p class="text-muted">${currProj.title}</p>
          </div>
        </div>
        `
    })
    eldiv.innerHTML = strHTML;
}
// Modal Render by curr Project Pressed --
function onProjectPressed(idx) {
    var projects = getProjects();
    $('.modal-body h2').html(`${projects[idx].name} <span class="badge badge-info">NEW</span>`) ;
    $('.item-intro').html('Time consumed: 10Hrs +-') ;
    $('.modal-body img').attr({src:`${projects[idx].img}`, alt:'modal img'})
    $('.details').html(`${projects[idx].desc}`);
    $('.date').html(`Date: ${projects[idx].publishedAt}`);
    $('.labels').html(`Labels: ${projects[idx].labels}`);
    $('.link').html(`<a href="${projects[idx].url}" target="_blank">Click here to see it live</a>`);
}

function onContactUs(ev,elForm){
    ev.stopPropagation() ;
    var email = $("#emailaddress").val() ;
    var subject = $("#emailsubject").val() ;
    var content = $("#emailcontent").val() ;
    openEmailForm(email,subject,content);
}
function openEmailForm(email,subject,content){
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${content}`);
}