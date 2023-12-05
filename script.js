//get the current date

var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year= date.getFullYear();

var fullDate = `${day}-${month}-${year}`
console.log(fullDate);

//set date to screen
var dateEl = $('#currentDay'); 
dateEl.text(fullDate);



function addTimeBlock(){
    
//create the tags
var timeBox = document.querySelector('.timeBox');
for (var i = 10; i < 19; i++){
    // now create a for loop with times
var timeBlockDiv = document.createElement('div');
timeBlockDiv.classList.add('timeBlock');

var hourDiv = document.createElement('div');
hourDiv.classList.add('hour');
var hoursP = document.createElement('p');
hoursP.textContent= i + ':00⏲️';
hourDiv.appendChild(hoursP);

var statusDiv = document.createElement('div');
statusDiv.classList.add('status');
var statusNotes = document.createElement('input');
statusNotes.setAttribute('placeholder', 'notes');
statusDiv.appendChild(statusNotes);

var saveBtn = document.createElement('button');
saveBtn.classList.add('saveBtn');
saveBtn.textContent = 'save';

timeBox.appendChild(timeBlockDiv);
timeBlockDiv.appendChild(hourDiv);
timeBlockDiv.appendChild(statusDiv);
timeBlockDiv.appendChild(saveBtn);


// var timeBox = document.querySelector('.timeBox');

// var timeBlockDiv = document.createElement('DIV')
// var hourDiv = document.createElement('DIV');
// var hoursP = document.createElement('p');
// var statusDiv = document.createElement('DIV');
// var statusNotes = document.createElement('input');
// var saveBtn = document.createElement('button');
// timeBox.appendChild(timeBlockDiv)
// timeBlockDiv.appendChild(hourDiv);
// hoursP.appendChild(hourDiv)
// timeBlockDiv.appendChild(statusDiv);
// timeBlockDiv.appendChild(saveBtn);

}}
// now create a for loop with times
addTimeBlock();

var save = 