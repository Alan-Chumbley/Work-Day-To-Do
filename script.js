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
timeBlockDiv.setAttribute('class','timeBlock');

var hourDiv = document.createElement('div');
hourDiv.setAttribute("class","hour" );
//add  attributes and styling to created elements
var hoursP = document.createElement('p');
hoursP.textContent= i + ':00⏲️';
hoursP.setAttribute('style', 'margin-top: 10px');

hourDiv.appendChild(hoursP);


var statusDiv = document.createElement('div');
statusDiv.setAttribute('class','status');
var statusNotes = document.createElement('input');
statusNotes.setAttribute('placeholder', 'notes');
statusNotes.setAttribute("style", "width:75%; min-height:40px; border-radius:6px ");

statusDiv.appendChild(statusNotes);

var saveBtn = document.createElement('button');
saveBtn.setAttribute('class','saveBtn');
saveBtn.textContent = 'save';

// add code in a row section/timeBlock.
timeBox.appendChild(timeBlockDiv);
timeBlockDiv.appendChild(hourDiv);
timeBlockDiv.appendChild(statusDiv);
timeBlockDiv.appendChild(saveBtn);



//present ttime
var timeNow = new Date().getHours();
console.log(timeNow);
// add time = i loop 
if (timeNow === i){
    timeBlockDiv.setAttribute("class", "present");
}else if (timeNow < i){
    //change css
    timeBlockDiv.setAttribute("class", "future");
} else{
    timeBlockDiv.setAttribute("class","past");
}



//set attribute
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
//store input notes
// var storageInput = document.querySelector('.notes');
// var saving = document.querySelector('saveBtn');
// var storedInput = localStorage.getItem('noteInput');
// if (storageInput){
    
// }

// storageInput.addEventListener('input', letter=>{
//     storageInput.textContent = letter.target.value;
//     console.log(letter.target.value)
// })
// //set item to local storage
// var saveToLocalStorage = () =>{
//     localStorage.setItem('noteInput', storageInput.textContent);

// }
// saving.addEventListener('click', saveToLocalStorage);
// var saving = document.querySelector('.notes');
// var toSave = document.querySelector('saveBtn');
// saving.addEventListener('keydown', function(pikachu){
//     pikachu.preventDefault();
//     console.log("user Input" + pikachu);

//     localStorage.setItem("pikachu", JSON.stringify(pikachu));
//     var userNotes = JSON.parse(localStorage.getItem("pikachu"));
// })
