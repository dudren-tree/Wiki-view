export function setSearchFocus () {
    document.getElementById('search').focus();
};

export function showClearTextButton() {
    const search = document.getElementById('search');
    const clear = document.getElementById('clear');
    if(search.value.length > 0) {
        clear.classList.remove('none');
        clear.classList.add('flex');
    } else {
        clear.classList.remove('flex');
        clear.classList.add('none');
    }
}

export function clearSearchText (event) {
    event.preventDefault();
    document.getElementById('search').value = '';
    const clear = document.getElementById('clear');
    clear.classList.add('none');
    clear.classList.remove('flex');
    setSearchFocus();
}

export function clearPushListner (event) {
    if(event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        document.getElementById('clear').click();
    }
}