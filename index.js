const array = ["at", "be", "by", "do", "go", "hi", "if", "in", "it", "me", "my", "no", "of", "on", "or", "so", "to", "up", "us", "we", "am", "an", "as", "ax", "by", "do", "ex", "go", "he", "if", "in", "is", "it", "jo", "my", "no", "of", "oh", "ok", "on", "or", "ox", "so", "to", "up", "us", "we","wind", "gush", "buzz", "puff", "laze", "daze", "haze", "fuzz", "jazz", "quip", "yawn", "wisp", "sift", "sway", "veer", "jolt", "jest", "zone", "vibe", "jinx", "lull", "dunk", "punk", "funk", "bump", "chip", "drop", "drip", "flop", "quip", "gulp", "bowl", "pawn", "tusk", "tint", "twin", "tend", "trot", "test", "toss", "jade", "jest", "pave", "fond", "pomp", "palm", "pump", "plum", "slur", "slot", "slim", "skip", "scum", "scud", "scam", "scat", "scab", "skid", "skim", "skit", "scow", "scud", "scum", "scab", "darn", "dart", "dusk", "dull", "duff", "duly", "drip", "drab", "drum", "drop", "dray", "drag", "doom", "dawn", "daze", "dusk", "dual", "duty", "dice", "dive", "dine", "dare", "dire", "dose", "deer", "dent", "dupe", "dusk", "gulf", "gush", "gulp", "gasp", "gear", "glow", "gilt", "gird", "gore", "goof", "goal", "gash", "gyro", "grow", "grin", "grab", "glue", "gaze", "give", "gnat", "glee", "grid", "grit", "grim", "grey", "grew", "gaud", "gain", "gear", "gift", "gang", "gnaw", "gout", "game", "gear", "glad", "heat", "heel", "hail", "hire", "hope", "hear", "hate", "hall", "hard", "hour", "hint", "herb", "held", "helm", "hero", "home", "heap", "hike", "harm", "half", "hiss", "hung", "hurl", "hash", "horn", "hype", "hazy", "hymn", "horn", "hedge", "hoop", "hide", "hoax", "hemp", "hill", "help", "huge", "hull", "husk", "hose", "hike", "hoar", "hunk", "hurt", "hunt", "halt", "haul", "hard", "hush", "honey", "huge", "hunt", "jade", "jinx", "jest", "jazz", "jump", "jive", "jolt", "jerk", "jamb", "just", "jerk", "jaws", "jade", "junk", "jute", "join", "jury", "jock", "jive", "jail", "jute", "jibe", "jolt",      "fable","scent","burst","pilot","sweat","proud","frost","clasp","wreck","cheek","spice","doubt","creep","watch","grasp","flask","juicy","moist","trunk","razor","blend","beard","lunar","shame","loose","trick","plump","tiger","flame","wrist","sheep","spoil","bloom","carve","lodge","smash","greet","chord","swear","hinge","punch","gloom","spicy","braid","glide","moral","flash","crisp","slope","bunny","jolly","furry","scold","knock","weave","dwarf","slump","stain","towel","decoy","quilt","frown","frisk","abuse","vomit","steam","thief","comet","hurry","jolly","flirt","silly","youth","spice","fable","humor","groan","fever","crumb","scoop","whirl","silly","crisp","donor","spoil","lunar","beast","skate","bloom","charm","clasp","funky","sweat","dwarf","wreck","plump","watch","crawl","glare","scent","frost","pilot","braid","greet","blunt","grasp","proud","honey","razor","cheer","tiger","juicy","fable","creep","smile","spicy","shame","hinge","flash","plush","loose","towel","scold","frisk","dwarf","gloom","glide","slope","bunny","crisp","quilt","scoop","fever","spice","thief","comet","humor","jolly","whirl","silly","youth","knock","spoil","crumb","furry","stain","vomit","abuse","jolly","silly","flirt","scoop","crisp","donor","lunar","beast","charm","bloom","skate","clasp","funky","wreck","pilot","frost","sweat","watch","grasp","trick","doubt","tiger","razor","blend","juicy","creep","fable","plump","flash","sheep","flame","braid","glare","honey","spicy","smash","greet","chord","swear","hinge","punch","gloom","spice","bunny","crisp","slope","jolly","furry","scold","knock","weave","dwarf","slump","stain","towel","decoy","quilt","frown","frisk","abuse","vomit","steam","thief","comet","hurry","jolly","flirt","silly","youth","spice","fable","humor","groan","fever","crumb","scoop","whirl","silly","crisp","donor","spoil","lunar","beast","skate","bloom","charm","clasp","funky","sweat","dwarf","wreck","plump","watch","crawl","glare","scent","frost","pilot","braid","greet","blunt","grasp","proud","car", "dog", "bus", "cup", "pen", "zip", "jar", "jet", "map", "mat", "mix", "pug", "sun", "sky", "box", "bee", "boy", "bat", "big", "cow", "cut", "day", "dig", "dad", "ear", "egg", "eye", "fan", "fun", "fox", "fly", "fix", "gas", "gun", "god", "hat", "hit", "hog", "hot", "ice", "ink", "jam", "jar", "joy", "key", "kit", "kid", "log", "lot", "lap", "lid", "lip", "man", "mop", "map", "mom", "nun", "nut", "net", "nap", "new", "owl", "oil", "one", "pig", "pet", "pat", "pen", "pod", "paw", "pax", "qua", "rad", "rug", "run", "ram", "rap", "red", "rat", "rob", "raw", "six", "son", "sun", "sky", "toy", "top", "tap", "ten", "tan", "tax", "tug", "two", "van", "vet", "vim", "vat", "win", "web", "wax", "yak", "yam", "yum", "zap", "zig", "zoo","banana", "circle", "donkey", "guitar", "jacket", "rocket", "yellow", "zigzag", "button", "camera", "coffee", "dollar", "family", "garden", "hunger", "jungle", "orange", "pepper", "potato", "rocket", "school", "spider", "turtle", "window", "zigzag", "bottle", "candle", "cherry", "dragon", "flower", "guitar", "hunter", "jacket", "laptop", "monkey", "number", "orange", "pencil", "purple", "rocket", "sandal", "spirit", "summer", "tissue", "turkey", "zigzag", "barber", "camera", "carrot", "circle", "coffee", "danger", "dancer", "famous", "fashion", "finger", "guitar", "handle", "hockey", "jacket", "jumper", "market", "museum", "puzzle", "rocket", "salmon", "shower", "simple", "soccer", "tissue", "tongue", "turkey", "walnut", "window", "zigzag", "butter", "cactus", "camera", "circle", "danger", "doctor", "drawer", "finger", "forest", "guitar", "happen", "jacket", "jungle", "laptop", "orange", "rocket", "school", "stream", "summer", "tissue", "turkey", "zigzag"]



const displayer = document.getElementById("display");
const Timer = document.getElementById("timer");
const ArrayLength = array.length;
let starter = 0;
let comparisonNum = -1;
let destarter;

let paragraph = "";
let spanword;
let node;
let idnumber;
let keystrokes;
let inputNode;
let inputidNumber;
let remainingTime;
let myTimer;
randomizer();


document.getElementById("input").disabled = true;

function blanker() {
    displayer.classList.remove("result"); 
    displayer.scrollTop = 0;
    correctWords = 0;
    wrongWords = 0;
    comparisonNum = -1;
    displayer.innerHTML = "";
    randomizer();
    starter = 0;
    activeSpan();
    inputSpanCreater();
    clearInterval(myTimer);
    Timer.innerHTML = "0:59"
    remainingTime = 59;
    myTimer = setInterval(timerRed,1000);
    document.getElementById("input").disabled = false;
}

function randomizer() {
for (let i=0; i<100; i++) {
    idnumber = "span" + i; 
    node = document.createElement("span");
    node.classList.add(idnumber);
    spanword = array[Math.floor(Math.random() * ArrayLength)] ;   
    node.innerHTML = spanword;
    displayer.appendChild(node);
  }
  starter = 0;
  keystrokes = 0;
}
function activeSpan() {
    if (starter>0) {
        destarter = starter - 1;
        let deSpanNumber = ".span" + destarter;
        let deactiveS = document.querySelector(deSpanNumber);
        deactiveS.classList.remove("active");
    }
    let SpanNumber = ".span" + starter;
    let activeS = document.querySelector(SpanNumber);
    activeS.classList.add("active");

}


document.addEventListener("keypress", function(event) {
    keystrokes++ ;

    if (event.key == " ") { 
        activeSpan();
        InputCleaner();
    }

})

function inputSpanCreater() {
    for (let i=0; i<100; i++) {
        inputNode = document.createElement("inputspan");
        inputidNumber = "inputspan" + i;
        inputNode.classList.add(inputidNumber);
        document.getElementById("inputdata").appendChild(inputNode);
    }
}

function InputCleaner() {
    document.getElementById("input").value = "";
}

document.getElementById("input").addEventListener("keypress" , function(event) {

    let inputclassName = ".inputspan" + starter;
    if (event.key == " ") {
        starter++;
        comparisonNum++;
        comparer(); 
        

        document.querySelector(inputclassName).innerHTML = document.getElementById("input").value; 
        
        InputCleaner();
        activeSpan();
        if (starter % 30 === 0) {
            displayer.scrollTop += 60;
        }
    }
})

remainingTime = 59;
function timerRed() {
    remainingTime--;
    Timer.innerHTML = "0:" + remainingTime;
    if (remainingTime < 10) {
        Timer.innerHTML = "0:0" + remainingTime;
    }
    if (remainingTime <= 0) {
        setTimeout(disBlanlk,2000);
        setTimeout(resultShow,3000);
        clearInterval(myTimer);
        Timer.innerHTML = "0:00";
        document.getElementById("input").value = "";
        document.getElementById("input").disabled = true;
    }
}
let spanComp;
let inputspanComp;
let spanCompValue;
let inputspanCompValue;
let correctWords = 0;
let wrongWords = 0;

function comparer() {
    spanComp = ".span" + comparisonNum;
    inputspanComp = ".inputspan0" ;
    spanCompValue = document.querySelector(spanComp).innerText;
    inputspanCompValue = document.getElementById("input").value;

    if ( spanCompValue === inputspanCompValue || " " + spanCompValue === inputspanCompValue || " " + spanCompValue + " " === inputspanCompValue) {
        document.querySelector(spanComp).style.color = "green";
        correctWords++ ;
    }
    else {
        document.querySelector(spanComp).style.color = "red";
        wrongWords ++;
    } 
    result ="Your Speed is: " + correctWords + " wpm" + "<br>Correct Words: " + correctWords + "<br>Wrong Words: " + wrongWords + "<br>keystrokes: " + keystrokes ;  
}
let result;

function disBlanlk() {
    document.getElementById("display").innerHTML = "";
}
function resultShow() {  
    displayer.classList.add("result"); 
    displayer.innerHTML += result;
}

























