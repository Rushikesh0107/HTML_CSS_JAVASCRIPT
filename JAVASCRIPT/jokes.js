

let jokes = ["How does a cucumber become a pickle? It goes through a jarring experience.",

"What's a turnip's favorite soda? Root beer!",

"What happened when the cheese shop exploded? Da brie was everywhere!",

"What’s a piece of bread’s least favorite chore? Doing a loaf of laundry.",

"What did the bunny say to the carrot? It’s been nice gnawing you!",

"What do you call a sad strawberry? A blueberry!",

"Why did the tomato blush? Because it saw the salad dressing!",

"What did the pizza say to the topping? I never sau-sage a pretty face!",

"Which vegetable do sailors hate the most? Leeks!",

"What do you call a cheese that’s not yours? Nacho cheese!",

"Why did the cookie go to the nurse? Because he felt crummy!",

"What kind of room doesn’t have doors? A mushroom!",

"What kind of key opens a banana? A mon-key!",

"What happens when a grape gets run over crossing the street? A traffic jam!"]


function newJoke(){

let random = Math.round(Math.random() * jokes.length);

document.getElementsByTagName("h2")[0].innerText = jokes[random];

if(jokes[random] == undefined){
    document.getElementsByTagName("h2")[0].innerText = "Bas kar bhai Kitne jokes padhega";
}

}