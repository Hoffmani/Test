const quotes = [{
    quote: 'Get each person to share 2 truths, 1 lie. Everyone else tries to guess which is which.',
}, {
    quote: 'Get each person to share what superpower they would like to have.',
}, {
    quote: 'Get each person to share whether they would prefer to time travel to the future, or the past.',
}, {
    quote: 'Prepare a toilet paper roll. Get each person to take the amount they use for #2. Count the number of squares - they have to share that number of facts about themselves.',
}, {
    quote: 'Get each person to bring an item that means something to them, and conduct a Show and Tell with the group.',
}, {
    quote: 'Each person submits a childhood photo of themselves beforehand, compiled into a slide show. Everyone else tries to guess who it is.',
}, {
    quote: 'Assign each member of the group a different person to draw. Then display the drawings and have people guess who they are.',
}, {
    quote: 'Get each person to select and share an emoji that represents them.',
}, {
    quote: 'Get each person to share whether they are morning or night people.',
}, {
    quote: 'Get each person to share what superpower they would like to have.',
}, {
    quote: 'In pairs, try to discover at least 3 things in common about each other.',
}, {
    quote: 'Split people up into groups and organise a scavenger hunt around the office/venue.',
}, {
    quote: 'Prepare a list of statements beginning with "Never Have I Ever", and have people raise their hands if the statement applies.',
}, {
    quote: 'Prepare a blank piece of paper or wall, and have team members create a quick mural with markers or paint supplies.',
}, {
    quote: 'Prepare a live word cloud and have team members contribute, in response to questions like "How are you feeling today?"',
}, {
    quote: 'Prepare a list of "controversial" questions, such as "Pineapple belongs on pizzas", and have people raise their hands if they agree.',
}, {
    quote: 'Have team members arrange themselves in order of height.',
}, {
    quote: 'Have team members arrange themselves in order of birthdate or birth months.',
}, {
    quote: 'Prepare ice cubes and hand out one to each person. The person who melts the ice cube fastest wins.',
}, {
    quote: 'Get each person to draw what animal best represents them.',
}, {
    quote: 'Get each person to share what fictional character they most identify with.',
}, {
    quote: 'Get each person to share their favourite movie.',
}, {
    quote: 'Get each person to share their favourite childhood foods.',
}, {
    quote: 'See who can type the word "hello" on their phones fastest, without using their hands.',
}, {
    quote: 'Ask for a volunteer to draw a picture on a board. First person to guess the drawing wins.',
}, {
    quote: 'Get each person to share where they would go in a zombie apocalypse.',
}, {
    quote: 'Pass everyone a piece of paper. First person to fold and fly a paper airplane wins.',
}, {
    quote: 'Get each person to share whether they prefer cheese or chocolate.',
}, {
    quote: 'Get each person to share one thing they are looking forward to today.',
}, {
    quote: 'Ask people to share the weirdest food they have ever tried.',
}, {
    quote: 'Get each person to pick a cartoon character that best describes their personality.',
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

})

