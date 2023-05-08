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

let fungusHP = 100;
let AP = 100;



function render() {

        $('.ap-text').text(`${AP} AP `);
        $('.hp-text').text(`${fungusHP} HP`);

       
        negativeCheck();
        fungusDeadCheck();
        humanDeadCheck();
        fungus50hp();


}

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

function negativeCheck(){
    
    if (fungusHP <= 0){
        fungusHP = 0;
    }
    if(AP <= 0){
        AP = 0 ;
    }
}

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

// function fungus50hp() {

//     if ( fungusHP <= 50 ) {


//     }


// }