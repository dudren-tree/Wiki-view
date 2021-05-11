export function deleteSearchResults () {
    const parentElement = document.getElementById('searchResults');
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}
export function buildSearchResults (resultArray) {
    resultArray.forEach(results => {
        const resultItem = createResultItem(results);
        const resultContents = document.createElement('div');
        resultContents.classList.add("resultContents");
        if (results.img) {
            const resultImg = createResultImage(results);
            resultContents.append(resultImg);
        }
        const resultText = createResultText(results);
        resultContents.append(resultText);
        resultItem.append(resultContents);
        const searchResults = document.getElementById('searchResults');
        searchResults.append(resultItem);
    });
};

function createResultItem (result) {
    const resultItem = document.createElement('div');
    resultItem.classList.add('resultItem');
    const resultTitle = document.createElement('div');
    resultTitle.classList.add('resultTitle');
    const link = document.createElement('a');
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = "_blank";
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
};

function createResultImage (result) {
    const resultImage = document.createElement('div');
    resultImage.classList.add('resultsImage');
    const img = document.createElement('img');
    img.src = result.img;
    img.alt = result.title;
    resultImage.append(img);
    return resultImage;
};

function createResultText (result) {
    const resultText = document.createElement('div');
    resultText.classList.add('resultText');
    const resultDesctiption = document.createElement('p')
    resultDesctiption.classList.add('resultDescription');
    resultDesctiption.textContent = result.text;
    resultText.append(resultDesctiption);
    return resultText;
};

export function clearStatsLine () {
    document.getElementById('stats').textContent = '';
};

export function setStatsLine (numberOfResults) {
    const statsLine = document.getElementById('stats');
    if(numberOfResults) {
        statsLine.textContent = `Displaying ${numberOfResults} results.`;
    } else {
        statsLine.textContent = "Sorry, no results"
    }
}