import {
    clearPushListner,
    clearSearchText, 
    setSearchFocus, 
    showClearTextButton
} from "./searchBar.js"
import {getSearchTerm, retrieveSearchResults} from "./dataFunctions.js"
import {
    deleteSearchResults,
    clearStatsLine, 
    buildSearchResults, 
    setStatsLine
} from "./searhResults.js"

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === 'complete') {
        initApp ();
    }
});

function initApp () {
    setSearchFocus();

    const clear = document.getElementById('clear');
    const search = document.getElementById('search');
    const form = document.getElementById('searchBar');
    
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown', clearPushListner);
    search.addEventListener('input', showClearTextButton);
    form.addEventListener('click', submitTheSearch);
    form.addEventListener('change', inputSearchSubmit);
}

function inputSearchSubmit () {
    e.preventDefault();
    procesTheSearch();
    setSearchFocus();
}

function submitTheSearch (e) {
    e.preventDefault();
    deleteSearchResults();
    procesTheSearch();
    setSearchFocus();
}

async function procesTheSearch  () {
    clearStatsLine();
    const searchTearm = getSearchTerm();
    if (searchTearm === "") return;
    const resultArray = await retrieveSearchResults(searchTearm);
    if(resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
}
