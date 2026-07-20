const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const terms = document.querySelectorAll('p');

// function to show/hide terms in the dictionary based on what is selected
function filter() {

    // create array of selected checkboxes
    const activeFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // update visibility on each dictionary term based on the 
    terms.forEach(term => {
        const termLevel = term.getAttribute('level');
        if (activeFilters.length === 0 || activeFilters.includes(termLevel)) {
            term.classList.remove('hidden');
        } else {
            term.classList.add('hidden');
        }
    });
};

// add event listeners for each checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filter);
});