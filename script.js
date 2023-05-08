$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
   $('.attack-btn').on('click', attack );
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render();
}
//status
let fungusHP = 100;
let AP = 100;
setInterval(fungusRegen, 1000);


//function to render changes to the DOM.
function render() {

        $('.ap-text').text(`${AP} AP `);
        $('.hp-text').text(`${fungusHP} HP`);

       
        negativeCheck();
        fungusDeadCheck();
        humanDeadCheck();
        updateProgress();
        // fungus50hp();


}
//function to check the attck type and update the status
function attack() {

    if (fungusHP !== 0) {
        if (AP !== 0) {

            if ($(this).hasClass('arcane-scepter') ) {
                console.log("arcane-scepter");
                AP -= 12;
                fungusHP -= 14;
            }

            if ($(this).hasClass('entangle')) {
                console.log('entangle');
                AP -= 23;
                fungusHP -= 9;
            }
            if ($(this).hasClass('dragon-blade')) {
                console.log('dragon-blade')
                AP -= 38;
                fungusHP -= 47;
            }
            if ($(this).hasClass('star-fire')) {
                console.log('Star Fire');
                AP -= 33;
                fungusHP -= 25;
            }
        }
    }
    render();
}
// function to check if numbers are negative end set them to 0.
function negativeCheck(){
    
    if (fungusHP <= 0){
        fungusHP = 0;
    }
    if(AP <= 0){
        AP = 0 ;
    }
}
//function to check fungus HP and update fungus class is dead.
function fungusDeadCheck() {

    if (fungusHP === 0) {
        $('.enemy').empty();
        $('.enemy').append(`

        <div class="hp-text">${fungusHP}</div>
        <progress id="hp-meter" value="100" max="100"></progress>
        <div class="freaky-fungus dead"></div> 
        
        `);
    }
}
//function to check if AP is 0 and update button status and fungus class.
function humanDeadCheck() {

    if (AP === 0) {
        $('.enemy').empty();
        $('.enemy').append(`

        <div class="hp-text">${fungusHP}</div>
        <progress id="hp-meter" value="100" max="100"></progress>
        <div class="freaky-fungus jump"></div> 
        `); 

        $('.attacks').empty();
        $('.attacks').append(`

        <div class="ap-text">${AP} AP</div>
        <progress id="ap-meter" value="100" max="100"></progress>
        <button class="attack-btn arcane-scepter" disabled></button>
        <button class="attack-btn entangle"disabled></button>
        <button class="attack-btn dragon-blade"disabled></button>
        <button class="attack-btn star-fire"disabled></button>
        `);
    }
}

function updateProgress() {

        $('#ap-meter').val(`${AP}`);
        $('#hp-meter').val(`${fungusHP}`);
}

function fungusRegen() {

    if (fungusHP < 50 && fungusHP !== 0) {
        fungusHP += 1;
    }
    render();
}
