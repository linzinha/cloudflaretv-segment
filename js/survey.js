var pageNumber = 1

function revealSurvey() {
    var intro = document.getElementById("intro");
    var surveypage1 = document.getElementById("survey-page1");
    var returnButtonSet = document.getElementById("returnButtonSet");
    var initiate = document.getElementById("initiate");
    intro.style.display = "none";
    surveypage1.style.display = "block";
    returnButtonSet.style.display = "inline",
    initiate.style.display = "none";
}

function nextPage() {
    var currentPageNumber = 'survey-page' + pageNumber;
    var currentPage = document.getElementById(currentPageNumber);
    pageNumber += 1;
    var nextPageNumber = 'survey-page' + pageNumber;
    var nextPage = document.getElementById(nextPageNumber);
    currentPage.style.display = "none";
    nextPage.style.display = "block";
}

function goBack() {
    if (pageNumber === 1) {
        var intro = document.getElementById("intro");
        var surveypage1 = document.getElementById("survey-page1");
        var returnButtonSet = document.getElementById("returnButtonSet");
        var initiate = document.getElementById("initiate");
        intro.style.display = "block";
        surveypage1.style.display = "none";
        returnButtonSet.style.display = "none",
        initiate.style.display = "inline";
    } else if (pageNumber > 1 && pageNumber < 5) {
        var currentPageNumber = 'survey-page' + pageNumber;
        var currentPage = document.getElementById(currentPageNumber);
        pageNumber -= 1;
        var prevPageNumber = 'survey-page' + pageNumber;
        var prevPage = document.getElementById(prevPageNumber);
        currentPage.style.display = "none";
        prevPage.style.display = "block";      
    } else if (pageNumber === 5) {
        var currentPageNumber = 'survey-page' + pageNumber;
        var currentPage = document.getElementById(currentPageNumber);
        pageNumber -= 1;
        var prevPageNumber = 'survey-page' + pageNumber;
        var prevPage = document.getElementById(prevPageNumber);
        currentPage.style.display = "none";
        prevPage.style.display = "block";
        function removeNextButton () {
            var returnButtonSet = document.getElementById("returnButtonSet");
            var initiate = document.getElementById("initiate");
            returnButtonSet.style.display = "none",
            initiate.style.display = "inline";
        }    
        return removeNextButreturn;
    }
}

