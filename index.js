// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const currentHour = parseInt(dayjs().format('H'));

  for (let i = 9; i < 18; i++) {
    const timeBlock = document.getElementById("hour-" + i);
  
    if (i === currentHour) {
      timeBlock.classList.remove('past');
      timeBlock.classList.add('present');
    } else if (i > currentHour) {
      timeBlock.classList.remove('past');
      timeBlock.classList.add('future');
    }
    const textArea = timeBlock.children[1];
    textArea.value = localStorage.getItem(i.toString());
    const saveBtn = timeBlock.children[2];
    saveBtn.addEventListener('click', function () { 

      localStorage.setItem(i.toString(), textArea.value);
      
    });
    
  } 
 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  const currentDay = document.getElementById('currentDay');
  const today = new Date();
  const options = { day: 'numeric', weekday: 'long', month: 'long' };

  currentDay.textContent = today.toLocaleDateString('en-US', options);
});