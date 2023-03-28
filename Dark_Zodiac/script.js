
// Variables: Main pane nad description pane
var divPane = document.getElementById('divPane');
var divDescription = document.getElementById('divDescription')
var descriptionTitle = document.getElementById('descriptionTitle');
var descriptionPhar = document.getElementById('descriptionPhar');

// Variables: Background first layer
var divBackground = document.getElementById('divBackground');
var divArtHolder = document.getElementById('divArtHolder');

// Variables: Background second layer
var zdcAquarius = document.getElementById('zdcAquarius');
var zdcAries = document.getElementById('zdcAries');
var zdcCancer = document.getElementById('zdcCancer');
var zdcCapricorn = document.getElementById('zdcCapricorn');
var zdcGemini = document.getElementById('zdcGemini');
var zdcLeo = document.getElementById('zdcLeo');
var zdcLibra = document.getElementById('zdcLibra');
var zdcPisces = document.getElementById('zdcPisces');
var zdcSagittarius = document.getElementById('zdcSagittarius');
var zdcScorpio = document.getElementById('zdcScorpio');
var zdcTaurus = document.getElementById('zdcTaurus');
var zdcVirgo = document.getElementById('zdcVirgo');
var errorScreen = document.getElementById('errorScreen');

// Variables: Month section
var divMonth = document.getElementById("divMonth");
var lblMonth = document.getElementById("lblMonth");
var inputMonth = document.getElementById('inputMonth');

// Variables: Day section
var divDay = document.getElementById("divDay");
var lblDay = document.getElementById("lblDay");
var inputDay = document.getElementById('inputDay');

// Variables: Year section
var divYear = document.getElementById("divYear");
var lblYear = document.getElementById("lblYear");
var inputYear = document.getElementById('inputYear');

// Variables: Button
var btnSummon = document.getElementById('btnSummon');

// Summon button First activation
btnSummon.addEventListener('click', function() {

    // If block: Aries threshold
    if (inputMonth.value == 3 && inputDay.value >= 21 || inputMonth.value == 4 && inputDay.value <= 19) {
        zdcAries.style.transition = 5 + "s";
        zdcAries.style.opacity = 100 + "%";
        descriptionTitle.textContent = "ARIES - The Tyrant";
        descriptionPhar.textContent = "Whatever you achieve in your life it's never enough for you, you always seek more and more. You are an aspirer and want everything that this life can offer you, but when it comes to advances you never want to on your behalf. In other words, you are never pleased, and in a way, even tho being one, it keeps you always motivated. You should always keep in your mind that you should nevermore hurt others while on your way ruthless race.";
    }
    // Else if block: Taurus threshold
    else if (inputMonth.value == 4 && inputDay.value >= 20 || inputMonth.value == 5 && inputDay.value <= 20) {
        zdcTaurus.style.transition = 5 + "s";
        zdcTaurus.style.opacity = 100 + "%";
        descriptionTitle.textContent = "TAURUS - The Fallen Demon";
        descriptionPhar.textContent = "You have gone through bad and good times, however, the effects of the Fallen Demon only lets you stick to the bad times in your life. You are surrounded by your failures every day, it's suggested for you to stop thinking about your failures and try to gain confidence and gather your determination together and buckle up your shoes.Your failures will only teach you life lessons they are not what you truly are, learn the art of moving on.";
    }
    // Else if block: Gemini threshold
    else if (inputMonth.value == 5 && inputDay.value >= 21 || inputMonth.value == 6 && inputDay.value <= 20) {
        zdcGemini.style.transition = 5 + "s";
        zdcGemini.style.opacity = 100 + "%";
        descriptionTitle.textContent = "GEMINI - The Basilisk";
        descriptionPhar.textContent = "People around you already know that they should avoid being on the negative side of you, you can be poisonous for these people, you turn out to be very dangerous for those who trigger your anger, and you are capable enough to make their life miserable. However, anger is not always negative, at times your anger is appropriate in certain situations and is necessitated, and people would appreciate you along with your anger."
    }
    // Else if block: Cancer threshold
    else if (inputMonth.value == 6 && inputDay.value >= 21 || inputMonth.value == 7 && inputDay.value <= 22) {
        zdcCancer.style.transition = 5 + "s";
        zdcCancer.style.opacity = 100 + "%";
        descriptionTitle.textContent = "CANCER - The Serpent";
        descriptionPhar.textContent = "You were born with some amazing qualities one of them is the power of manipulation, and you are good at manipulating with others. People are inclined towards you because of your charming and incredible personality. People trust you, because of your cunning intelligence; rest depends on you as to how you want to use their trust.";
    }
    // Else if block: Leo threshold
    else if (inputMonth.value == 7 && inputDay.value >= 23 || inputMonth.value == 8 && inputDay.value <= 22) {
        zdcLeo.style.transition = 5 + "s";
        zdcLeo.style.opacity = 100 + "%";
        descriptionTitle.textContent = "LEO - The War Maiden";
        descriptionPhar.textContent = "Usually, we live our lives in a circular motion just doing those regular chores and ignoring everything else what life has to offer, mostly we are just blind not to observe these treasures, however, it's not the same for you. You can see what others can't in their true forms, no matter if it's right or wrong good or bad. As a person, you get difficulty letting others know how you see these things or maybe a truth around you, and you can say that better seen than doing it.";
    }
    // Else if block: Virgo threshold
    else if (inputMonth.value == 8 && inputDay.value >= 23 || inputMonth.value == 9 && inputDay.value <= 22) {
        zdcVirgo.style.transition = 5 + "s";
        zdcVirgo.style.opacity = 100 + "%";
        descriptionTitle.textContent = "VIRGO - The Maelstrom";
        descriptionPhar.textContent = "You are a loyal lover this quality is the one which is also most dangerous. You are very possessive naturally and you also feel jealous and once you get this feeling, it becomes extremely difficult for others to make you feel better no matter how hard they try.";
    }
    // Else if block: Libra threshold
    else if (inputMonth.value == 9 && inputDay.value >= 23 || inputMonth.value == 10 && inputDay.value <= 22) {
        zdcLibra.style.transition = 5 + "s";
        zdcLibra.style.opacity = 100 + "%";
        descriptionTitle.textContent = "Libra - The Ravenous";
        descriptionPhar.textContent = "Well, we all have an evil spirit within us but when it comes to you, yours is the loudest. And they always keep you on the ground. However, this also turns out to be a good aspect for you as these evil energies also help you achieve the best you can get. Still, you never wanted to be in the limelight but always wants to get through your life and achieve your life goals.";
    }
    // Else if block: Scorpio threshold
    else if (inputMonth.value == 10 && inputDay.value >= 23 || inputMonth.value == 11 && inputDay.value <= 21) {
        zdcScorpio.style.transition = 5 + "s";
        zdcScorpio.style.opacity = 100 + "%";
        descriptionTitle.textContent = "SCORPIO - The Poisoned Dart";
        descriptionPhar.textContent = "You can handle extreme pressure, and you are aware of the right time for converting things in your favour, you know how long you needed to wait to gain something. Your belief is very strong to outsmart people with years of experience; you believe that timely planning of something will definitely turn things in your favour. Being analytic in the mindset you can very well judge the situation and act accordingly. It would be better if you don't always try to be very sarcastic.";
    }
    // Else if block: Sagittarius threshold
    else if (inputMonth.value == 11 && inputDay.value >= 22 || inputMonth.value == 12 && inputDay.value <= 21) {
        zdcSagittarius.style.transition = 5 + "s";
        zdcSagittarius.style.opacity = 100 + "%";
        descriptionTitle.textContent = "SAGITTARIUS - The Tempest";
        descriptionPhar.textContent = "You are like the wind, wild in nature and carefree in your character. Just like a strong storm, you don't care about things that are heading your way. Your ultimate desire is the sense of freedom all the time. However, this may not be always good for those who are close to you, it would be better if you try to control these desires, it would be really helpful.";
    }
    // Else if block: Capricorn threshold
    else if (inputMonth.value == 12 && inputDay.value >= 22 || inputMonth.value == 1 && inputDay.value <= 19) {
        zdcCapricorn.style.transition = 5 + "s";
        zdcCapricorn.style.opacity = 100 + "%";
        descriptionTitle.textContent = "CAPRICORN - The Leviathan";
        descriptionPhar.textContent = "People are never able to crack your personality they will never understand what kind of personality you are as a person, and as a result, they are unable to understand how to deal with you. There are some mysterious forces which always forces towards the dark and the sin. And these mysterious powers are also difficult for you to crack, however, you still have the control over the demon and that's what makes you different from all the others.";
    }
    // Else if block: Aquarius threshold
    else if (inputMonth.value == 1 && inputDay.value >= 20 || inputMonth.value == 2 && inputDay.value <= 18) {
        zdcAquarius.style.transition = 5 + "s";
        zdcAquarius.style.opacity = 100 + "%";
        descriptionTitle.textContent = "AQUARIUS - The Beast";
        descriptionPhar.textContent = "People are dependent on you like a ship is dependent on an anchor when not moving, you give them strength and a direction to move in the correct direction. You have been handling your own pains and grief’s in your life for so long that it doesn't really make a difference if you have few more, however, it is still recommended to keep a check on things before putting your hands in something.";
    }
    // Else if block: Pisces threshold
    else if (inputMonth.value == 2 && inputDay.value >= 19 || inputMonth.value == 3 && inputDay.value <= 20) {
        zdcPisces.style.transition = 5 + "s";
        zdcPisces.style.opacity = 100 + "%";
        descriptionTitle.textContent = "PISCES - The Sword";
        descriptionPhar.textContent = "When it comes to the struggles in life being in the warlike situations you are not often on the losing side, but on the winning side more than expected by yourself. This ruthless pursuance and your beliefs in its most true sense define you, and the ways your rivals get scars from you define your enemies. It could be easy to completely get lost in the pursuit however, you should be aware of your reparations.";
    }
    // Else if block: Hide undebugged error
    else if (inputMonth.value == 99 && inputDay.value == 99 && inputYear.value == 9999) {
        errorScreen.style.transition = 5 + "s";
        errorScreen.style.opacity = 100 + "%";
        inputMonth.value = 66;
        inputDay.value = 66;
        inputYear.value = 6666;
        divBackground.style.opacity = 0;
        descriptionTitle.textContent = "MISSING ENTITY - <h1 class='zodiacTitle' id='zodiacTitle'>Cannot find entity title.</h1>";
        descriptionPhar.textContent = "<div class='divDescriptionMain' id='divDescriptionMain'><p class='pharDescription' id='pharDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, before daybreak, I will visit you. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>";
    }

    // Transition: Mane pane
    divPane.style.transition = 3 + "s";
    divPane.style.height = 2 + "%";

    // Transition: Description pane
    divDescription.style.transition = 3 + "s";
    divDescription.style.height = 300 + "px";

    // Show zodiac title and pharagraph
    descriptionTitle.style.transition = 6 + "s";
    descriptionTitle.style.opacity = 100 + "%";
    descriptionPhar.style.transition = 6 + "s";
    descriptionPhar.style.opacity = 100 + "%";

    // Textfield shift: Month
    inputMonth.type = 'text';
    inputMonth.style.transition = 1 + "s";
    inputMonth.style.borderRadius = 50 + "%";
    inputMonth.style.width = 50 +"px";
    inputMonth.style.height = 50 +"px";
    inputMonth.style.backgroundColor = "transparent";

    // Textfield shift: Day
    inputDay.type = 'text';
    inputDay.style.transition = 1 + "s";
    inputDay.style.borderRadius = 50 + "%";
    inputDay.style.width = 50 +"px";
    inputDay.style.height = 50 +"px";
    inputDay.style.backgroundColor = "transparent";

    // Textfield shift: Year
    inputYear.type = 'text';
    inputYear.style.transition = 1 + "s";
    inputYear.style.borderRadius = 50 + "%";
    inputYear.style.width = 50 +"px";
    inputYear.style.height = 50 +"px";
    inputYear.style.fontSize = 16 + "px";
    inputYear.style.backgroundColor = "transparent";

    // Label hide and transition
    lblMonth.style.transition = 2 + "s";
    lblMonth.style.opacity = 0;
    lblMonth.style.margin = 200 + "% " + 5 + "px";

    lblDay.style.transition = 2 + "s";
    lblDay.style.opacity = 0;

    lblYear.style.transition = 2 + "s";
    lblYear.style.opacity = 0;
    
    // Summon button transition, shift and background change
    btnSummon.style.transition = 3 + "s";
    btnSummon.style.margin = -20 + "% " + 20 + "%";
    btnSummon.style.borderRadius = 50 + "%";
    btnSummon.style.width = 50 +"px";
    btnSummon.style.height = 50 +"px";
    btnSummon.style.backgroundColor = "transparent";
    btnSummon.textContent = "X";

    // Summon button Second activation
    btnSummon.addEventListener('click', function() {

        // Reversal copy of Summon button First activation code
        divPane.style.transition = 3 + "s";
        divPane.style.height = 70 + "%";
    
        divDescription.style.transition = 3 + "s";
        divDescription.style.height = 1 + "%";

        divArtHolder.style.transition = 3 + "s";
        divArtHolder.style.opacity = 0;
    
        descriptionTitle.style.transition = 3 + "s";
        descriptionTitle.style.opacity = 0 + "%";
        descriptionPhar.style.transition = 3 + "s";
        descriptionPhar.style.opacity = 0 + "%";
    
        inputMonth.type = 'number';
        inputMonth.style.transition = 1 + "s";
        inputMonth.style.borderRadius = 0 + "%";
        inputMonth.style.width = 80 +"px";
        inputMonth.style.height = 30 +"px";
        inputMonth.style.backgroundColor = "#" + 191919;
        inputYear.value = "";
    
        inputDay.type = 'number';
        inputDay.style.transition = 1 + "s";
        inputDay.style.borderRadius = 0 + "%";
        inputDay.style.width = 80 +"px";
        inputDay.style.height = 30 +"px";
        inputDay.style.backgroundColor = "#" + 191919;
        inputDay.value = "";
    
        inputYear.type = 'number';
        inputYear.style.transition = 1 + "s";
        inputYear.style.borderRadius = 0 + "%";
        inputYear.style.width = 80 +"px";
        inputYear.style.height = 30 +"px";
        inputYear.style.fontSize = 20 + "px";
        inputYear.style.backgroundColor = "#" + 191919;
    
        lblMonth.style.transition = 2 + "s";
        lblMonth.style.opacity = 100 + "%";
        lblMonth.style.margin = 0 + "px " + 0 + "px";
        lblMonth.style.marginLeft = 10 + "px";
        inputMonth.value = "";
    
        lblDay.style.transition = 2 + "s";
        lblDay.style.opacity = 100 + "%";
        lblDay.style.marginLeft = 10 + "px";        
    
        lblYear.style.transition = 2 + "s";
        lblYear.style.opacity = 100 + "%";
        lblYear.style.marginLeft = 10 + "px";        
        
        btnSummon.style.transition = 3 + "s";
        btnSummon.style.margin = 2 + "% " + 30 + "%";
        btnSummon.style.borderRadius = 0 + "%";
        btnSummon.style.width = 100 + "px";
        btnSummon.style.height = 40 + "px";
        btnSummon.style.backgroundColor = "#" + 191919;
        btnSummon.textContent = "";
        setTimeout((btnSummon) => {
            btnSummon.textContent = "Summon";
        }, 1500);

        // Reload after reverting
        setTimeout((btnSummon) => {
           location.reload() 
        }, 2500);
    })

})