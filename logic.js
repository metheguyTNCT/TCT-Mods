function createEnding(engine, results) {

    const playerId = engine.getPlayerCandidateController().getId();

    // I am defining some endings below. Note I have to check who the player played as first in this scenario.
    // You could also add more slides to have endings with pages

    // If you played as Trump
    if(playerId == 200) {
        if(engine.playerWonEv(results)) {
        engine.setNewMusic([{
    displayName: "Nessun dorma - Luciano Pavarotti",
    imageUrl: "https://m.media-amazon.com/images/I/71zwU3UZ5ML._UF1000,1000_QL80_.jpg",
    url: "https://audio.jukehost.co.uk/oC6gklcJuvZ7Oynaax3S6C8Uii4KpRXv",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "Congratulations! You have won the 2016 election.",
                        imageUrl: "https://i.imgur.com/x73RIrB.jpeg",
                        endingText: "<p>Those losers. Those haters. They threw everything at you- Meatball Ron, Birdbrain, even Sloppy Chris Christie. But they couldn't stop us. We swamped the vote, didn't we, folks? All of them came up to endorse you. Wasn't even close, folks. Now we're gonna beat Sleepy Joe, and beat him big league.</p>"
                    }
                ]
            }
        }
        else {
        engine.setNewMusic([{
    displayName: "Trump Won- Natasha Owens",
    imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7f/11/39/7f113905-59b5-973e-4b93-d9eb6bebf31d/859771325573_cover.jpg/600x600bf-60.jpg",
    url: "https://audio.jukehost.co.uk/fvXjl2WyaoBZiZwnWCH94yKACB6EXBfD",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "Sorry! You have lost the 2024 Republican primaries.",
                        imageUrl: "https://read.gov/aesop/images/the-hare-and-the-tortoise.jpg",
                        endingText: "<p>As it turns out, refusing to campaign at all isn't the best idea. Whoulda thunk?</p>"
                    }
                ]
            }
        }
    }
    // If you played as Haley
    else if(playerId == 201) {
        if(engine.playerWonEv(results)) {
        engine.setNewMusic([{
    displayName: "Girls Are The Best- Kyle Gordon",
    imageUrl: "https://i.imgur.com/ARKskXN.jpeg",
    url: "https://files.catbox.moe/h1lz92.mp3",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "Congratulations! You have won the 2016 election.",
                        imageUrl: "https://i.imgur.com/R4kn8Mn.jpeg",
                        endingText: "<p>Well, this is a shock. It seems like the people really were tired of Trump. Now comes the general. Good luck, Ambassador Haley.</p>"
                    }
                ]
            }
        }

        else {
        engine.setNewMusic([{
    displayName: "Johnny Reb - Johnny Horton",
    imageUrl: "https://i.imgur.com/8dJ99Fy.jpeg",
    url: "https://files.catbox.moe/iykvpz.mp3",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "Sorry! You have lost the 2016 election.",
                        imageUrl: "https://i.imgur.com/KTw4TCt.jpeg",
                        endingText: "<p>It's hard to say this wasn't expected. What matters is if you totally humiliated yourself or not. If you didn't, you have a good chance at the nod in 2028. Maybe a No Labels run this year is in the cards. If you did, your career is probably over. Whatever it is, godspeed.</p>"
                    }
                ]
            }
        }
    }

    // If you played as DeSantis
    else if(playerId == 202) {
        if(engine.playerWonEv(results)) {
        engine.setNewMusic([{
    displayName: "Sweet Florida- Van Zant",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273a17bd039ff1203f8962c0c5d",
    url: "https://files.catbox.moe/jvq3tf.mp3",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "DeSantis win.",
                        imageUrl: "https://i.imgur.com/rWqGQ2M.jpeg",
                        endingText: "you cant do this in the game whaddya doin here gng"
                    }
                ]
            }
        }

        else {
        engine.setNewMusic([{
    displayName: "Nazi Punks Fuck Off- Dead Kennedys",
    imageUrl: "https://i.imgur.com/ZZskd7F.jpeg",
    url: "https://files.catbox.moe/kjslhv.mp3",
  },
]);

        return {
            slides: [
                    {
                        endingHeader: "Sorry! You have lost the 2024 Republican primaries.",
                        imageUrl: "https://i.imgur.com/RCOM8Gk.png",
                        endingText: "<p>All the media talking heads, all the donors, in your corner, and for what? To be ridiculed by all. To be one of the lineage of early frontrunners who couldn't stick the landing.  Harold Stassen. Pete Wilson. Rick Perry. Jeb Bush. And now you. Maybe you can get a cabinet post, or VP. And if not, you can always try again in four years.</p>"
                    }
                ]
            }
        }
    }


    // No other endings defined, return an error
    else {
        engine.setNewMusic([{
    displayName: "Nazi Punks Fuck Off- Dead Kennedys",
    imageUrl: "https://i.imgur.com/ZZskd7F.jpeg",
    url: "https://files.catbox.moe/kjslhv.mp3",
  },
]);

        return {
            slides: [
                {
                    endingHeader: "deadlock",
                    imageUrl: "https://www.jetsimon.com/public/static/images/henry-clay-1844.jpg",
                    endingText: "Bad ending"
                }
            ]
        }
    }
}

function onAnswerPicked(engine, answerPicked) {
    // This scenario has no CYOA
}

function onScenarioStarted(engine) {
    
}

export {createEnding, onAnswerPicked, onScenarioStarted}