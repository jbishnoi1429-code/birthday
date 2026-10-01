// const startButton = document.getElementById("startBtn");

// startButton.addEventListener("click", () => {

//     // Create cute message
//     const message = document.createElement("div");
//     message.className = "cute-message";

//     message.innerHTML = `
//         <div class="message-card">
//             <div class="message-heart">♡</div>

//             <h2>Yayyy, Paplu! 💕</h2>

//             <p>
//                 Your little surprise is just getting started...
//                 <br>
//                 I hope you're ready. 🥹✨
//             </p>

//             <button id="continueBtn">
//                 Continue 💌
//             </button>
//         </div>
//     `;

//     document.body.appendChild(message);

//     // Small delay so animation works
//     setTimeout(() => {
//         message.classList.add("show");
//     }, 50);

//     // Continue button
//     document.getElementById("continueBtn").addEventListener("click", () => {

//         message.classList.remove("show");

//         setTimeout(() => {
//             message.remove();

//             // For now we'll show a temporary message.
//             // Later this will open Slide 2.
//             showNextMessage();

//         }, 400);
//     });
// });


// function showNextMessage() {

//     const nextMessage = document.createElement("div");

//     nextMessage.className = "transition-message";

//     nextMessage.innerHTML = `
//         <div>
//             <span>🎂</span>
//             <h2>Something special is waiting...</h2>
//             <p>Let's continue, birthday boy ❤️</p>
//         </div>
//     `;

//     document.body.appendChild(nextMessage);

//     setTimeout(() => {
//         nextMessage.classList.add("show");
//     }, 50);

// }


// =====================================
// PAPLU BIRTHDAY WEBSITE
// =====================================

const startButton = document.getElementById("startBtn");

// =====================================
// BACKGROUND MUSIC
// =====================================

const bgMusic = new Audio("music/dhun.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.35;


// =====================================
// SLIDE 1 → CUTE MESSAGE
// =====================================

startButton.addEventListener("click", () => {

    // Start music when Paplu opens the surprise
    bgMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });

    const message = document.createElement("div");

    message.className = "cute-message";

    message.innerHTML = `
        <div class="message-card">

            <div class="message-heart">♡</div>

            <h2>Yayyy, Paplu! 💕</h2>

            <p>
                Your little surprise is just getting started...
                <br>
                I hope you're ready. 🥹✨
            </p>

            <button id="continueBtn">
                Continue 💌
            </button>

        </div>
    `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add("show");
    }, 50);


    document.getElementById("continueBtn").addEventListener("click", () => {

        message.classList.remove("show");

        setTimeout(() => {

            message.remove();

            showCake();

        }, 400);

    });

});


// =====================================
// SLIDE 2 → BIRTHDAY CAKE
// =====================================

function showCake() {

    const cakeScreen = document.createElement("div");

    cakeScreen.className = "cake-screen";

    cakeScreen.innerHTML = `

        <div class="cake-content">

            <p class="cake-small-text">
                A little birthday wish ✨
            </p>

            <h2>
                Make a wish, Paplu ❤️
            </h2>

            <p class="cake-instruction">
                Tap the candles and make your wish...
            </p>


            <div class="cake">

                <div class="candles">

                    <div class="candle">
                        <div class="flame"></div>
                    </div>

                    <div class="candle">
                        <div class="flame"></div>
                    </div>

                    <div class="candle">
                        <div class="flame"></div>
                    </div>

                </div>


                <div class="cake-top"></div>

                <div class="cake-body">

                    <div class="cake-decoration"></div>
                    <div class="cake-decoration"></div>
                    <div class="cake-decoration"></div>

                </div>

                <div class="cake-plate"></div>

            </div>


            <button id="blowCandles">
                🕯️ Tap the candles
            </button>

        </div>

    `;

    document.body.appendChild(cakeScreen);


    setTimeout(() => {
        cakeScreen.classList.add("show");
    }, 50);


    // Candle interaction
    const candles = cakeScreen.querySelectorAll(".candle");

    candles.forEach(candle => {

        candle.addEventListener("click", () => {

            candle.classList.add("off");

            checkCandles();

        });

    });


    // Button interaction
    cakeScreen
        .querySelector("#blowCandles")
        .addEventListener("click", () => {

            candles.forEach(candle => {
                candle.classList.add("off");
            });

            checkCandles();

        });


    function checkCandles() {

        const allOff =
            [...candles].every(candle =>
                candle.classList.contains("off")
            );


        if (allOff) {

            cakeScreen
                .querySelector("#blowCandles")
                .style.display = "none";

            createConfetti(cakeScreen);

            setTimeout(() => {

                showWishMessage(cakeScreen);

            }, 900);

        }

    }

}


// =====================================
// WISH MESSAGE
// =====================================

function showWishMessage(cakeScreen) {

    const wish = document.createElement("div");

    wish.className = "wish-message";

    wish.innerHTML = `

        <div class="wish-card">

            <div class="wish-heart">
                ❤️
            </div>

            <h2>
                Wish officially made! ✨
            </h2>

            <p>
                I hope every little thing you wished for
                finds its way to you. 🥹
            </p>

            <button id="heartNext">
                There's more... 💕
            </button>

        </div>

    `;

    cakeScreen.appendChild(wish);


    setTimeout(() => {
        wish.classList.add("show");
    }, 50);


    wish.querySelector("#heartNext")
        .addEventListener("click", () => {

            cakeScreen.classList.remove("show");

            setTimeout(() => {

                cakeScreen.remove();

                showPhotoHeart();

            }, 600);

        });

}


// =====================================
// CONFETTI
// =====================================

function createConfetti(parent) {

    const symbols = ["♡", "♥", "✦", "✧", "•"];

    for (let i = 0; i < 45; i++) {

        const confetti =
            document.createElement("span");

        confetti.className = "confetti";

        confetti.innerText =
            symbols[Math.floor(
                Math.random() * symbols.length
            )];

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        parent.appendChild(confetti);

    }

}


// =====================================
// TEMPORARY PHOTO HEART
// =====================================
// =====================================
// =====================================
// PHOTO HEART
// =====================================

function showPhotoHeart() {

    const screen = document.createElement("div");

    screen.className = "photo-heart-screen";

    screen.innerHTML = `

        <div class="photo-heart-content">

            <p class="memory-small">
                Some memories are meant to stay forever ✨
            </p>

            <h2>
                A little piece of us ❤️
            </h2>

            <p class="memory-instruction">
                Watch the memories come together...
            </p>


            <div class="memory-heart">

                <!-- CENTER PHOTO -->

                <div class="heart-center">

                    <div class="center-glow"></div>

                    <img src="images/1000252588.jpg">

                </div>


                <!-- HEART FRAME PHOTOS -->

                <img
                    class="heart-photo photo-1"
                    src="images/1000252586.jpg"
                >

                <img
                    class="heart-photo photo-2"
                    src="images/1000252587.jpg"
                >

                <img
                    class="heart-photo photo-3"
                    src="images/1000252589.jpg"
                >

                <img
                    class="heart-photo photo-4"
                    src="images/1000252590.jpg"
                >

                <img
                    class="heart-photo photo-5"
                    src="images/1000252591.jpg"
                >

                <img
                    class="heart-photo photo-6"
                    src="images/1000252592.jpg"
                >

                <img
                    class="heart-photo photo-7"
                    src="images/1000252595.jpg"
                >

                <img
                    class="heart-photo photo-8"
                    src="images/1000252598.jpg"
                >

            </div>


            <p class="heart-caption">
                Every memory is a little piece of my heart. ❤️
            </p>

        </div>

    `;


    document.body.appendChild(screen);


    /* Show screen */

    setTimeout(() => {

        screen.classList.add("show");

    }, 100);


    /* Start slow heart formation */

    setTimeout(() => {

        screen.classList.add("heart-complete");

    }, 1200);

}

