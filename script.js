document.addEventListener('DOMContentLoaded', () => {
    const characters = [
        {
            color: "#FFF8B0",
            buttoncolor: "#542f31",
            image: "./photos/pompompurin.webp",
            name: "Pompompurin",
            likes: "Pudding, napping, and soft stuff",
            dislikes: "The word 'stay'",
            description: "Born on a sunny day on April 16th, Purin is a Golden Retriever dog who loves to make others happy. Known for his iconic brown beret, Purin is often seen sleeping or hanging out with his friends!"
        },
        {
            color: "#C097CF",
            buttoncolor: "#565656",
            image: "./photos/kuromi.webp",
            name: "Kuromi",
            likes: "Romantic short stories, food, and the colour black",
            dislikes: "My Melody (formerly)",
            description: "Born on the wicked Halloween day, Kuromi is a tomboyish and punkish white rabbit always wearing her black jester's hat. Although she can be seen as edgy and rebellious, she has a soft spot for cute things!"
        },
        {
            color: "#F4B3C5",
            buttoncolor: "#E36AA5",
            image: "./photos/my-melody.png",
            name: "My Melody",
            likes: "Almond pound cake and her pink hood made by her Grandma",
            dislikes: "Nothing!",
            description: "A very sweet natured white rabbit born on January 18th. My Melody loves to bake and to make gifts for her friends. Always supportive of others and loves to make people smile and laugh!"
        },
        {
            color: "#EB1C2E",
            buttoncolor: "#0076bc",
            image: "./photos/hello-kitty.png",
            name: "Hello Kitty",
            likes: "Mama's homemade apple pie, music, art, and the colour red",
            dislikes: "Stepping on sidewalk cracks!",
            description: "The iconic white cat of Japan's pop culture! Hello Kitty, born on November 1st, is known for her red bow and her kind-hearted personality."
        },
        {
            color: "#D1EBF6",
            buttoncolor: "#4CD4F0",
            image: "./photos/cinnamoroll.png",
            name: "Cinnamoroll",
            likes: "Cinnamon rolls, baking, and dancing to his favourite pop idols",
            dislikes: "Ghosts",
            description: "A shy-but-friendly cubby dog with his charming 'cinnamon-roll like' tail. Cinnamoroll was born on March 6th, with his sweet and lovable personality. Watch out- he might jump on your lap!"
        },
        {
            color: "#DCCCA4",
            buttoncolor: "#a8b7b9",
            image: "./photos/littletwinstars.webp",
            name: "Little Twin Stars",
            likes: "Star-fish, inventing things, drawing, writing poems, and cooking",
            dislikes: "Being lonely",
            description: "Good things come better in twos! Meet the star twins: Kiki & Lala. Born on Christmas Eve, Kiki is a gentle and kind soul, curious about everything around him. Lala is known for being a little timid and a natural artist. You can't seperate this pair!"
        },
        {
            color: "#FFE45F",
            buttoncolor: "#080808",
            image: "./photos/badtzmaru.png",
            name: "Badtz-Maru",
            likes: "Pranking his friends, video games, music, and sushi",
            dislikes: "Being lonely",
            description: "Known for his clever and mischievous side, Badtz-Maru is a little penguin with a attitude. Blame it on being born on April Fool's Day - He his many facial expressions including sticking out his tongue!"
        },
        {
            color: "#DB1857",
            buttoncolor: "#221F20",
            image: "./photos/pochacco.png",
            name: "Pochacco",
            likes: "Banana ice-cream, sports, walks, and making smoothies",
            dislikes: "Fireworks",
            description: "Sporty and playful - full of energy! Pochacco is a white dog, born on Leap Day, who is usually seen wearing his athletic gear. He loves anything active! The word 'lazy' is not in his vocabulary!"
        },
        {
            color: "#719DD3",
            buttoncolor: "#F06796",
            image: "./photos/tuxedosam.png",
            name: "Tuxedo Sam",
            likes: "Bow ties, eating, kisses & hugs, and swimming",
            dislikes: "Cheap denim pants on sale, and problems",
            description: "Tuxedo Sam is a dapper and gentle young penguin born on May 12th. He likes to overeat and makes some clumsy decisions. With his red bowtie and sailor hat, he loves to keep things tidy and clean!"
        },
        {
            color: "#69AFE1",
            buttoncolor: "#000000",
            image: "./photos/chococat.png",
            name: "Chococat",
            likes: "Play and fool around with his friends",
            dislikes: "Rain",
            description: "A little bit scatterbrained but always knows the latest news, thanks to his ultrasensitive 'antenna' whiskers. Born on May 10th, Chococat loves to play with his friends and have fun!"
        },
        {
            color: "#D9E147",
            buttoncolor: "#0072BA",
            image: "./photos/keroppi.png",
            name: "Keroppi",
            likes: "Playing games, especially baseball and boomerangs",
            dislikes: "Sharks and being rushed",
            description: "One of the smallest characters - Keroppi is a cheerful and energtic frog with a resilient attitude. Born on July 10th, he can bounce back quickly when he falls!"
        },
    ];

    const button = document.getElementById('new-character-button');
    const card = document.getElementById('card');
    const sanrioName = document.querySelector('.sanrio-name');
    const likes = document.querySelector('.likes');
    const dislikes = document.querySelector('.dislikes');
    const description = document.querySelector('.description');
    const image = document.querySelector('#card img');
    const welcome = document.getElementById('welcome');

    let previous_character = null;

    button.addEventListener('click', () => {
        let randomCharacter;
        do {
            randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        } while (randomCharacter === previous_character);

        displayCharacterInfo(randomCharacter);
        previous_character = randomCharacter;
    });

    function displayCharacterInfo(character) {
        document.body.style.backgroundColor = character.color;
        button.style.backgroundColor = character.buttoncolor;
        button.style.borderColor = character.buttoncolor;
        sanrioName.textContent = character.name;
        likes.innerHTML = `<span class="bold">Likes:</span> ${character.likes}`;
        dislikes.innerHTML = `<span class="bold">Dislikes:</span> ${character.dislikes}`;
        description.textContent = character.description;
        image.src = character.image;
        image.alt = character.name;

        welcome.style.display = 'none';
        card.style.display = 'block';

        button.style.backgroundColor = character.buttoncolor;
        button.style.borderColor = character.buttoncolor;
    }

});
