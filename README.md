# Ariana grande lyric grabber
it is my birthday today, so i made this ariana granda lyric grabber/generator.
it just has a button that when clicked, displays a ranom ariana lyric together with the cover art, picked from the songs in her seven studio albums, the lyric pool was written by me in a json file, there are 113 unique lyric lines.

https://ariana-grande-random-lyric-grabber.vercel.app/

this site has an api that can be used to fetch these lyrics randomly.

javascrip example :

        fetch('https://ariana-grande-random-lyric-grabber.vercel.app/api/lyrics')
        .then(res => res.json())
        
cli example :

        curl https://ariana-grande-random-lyric-grabber.vercel.app/api/lyrics



i love you nini, sora, 22.
