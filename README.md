# Ariana grande lyric grabber
it is my birthday today, so i made this ariana granda lyric grabber/generator.
it just has a button that when clicked, displays a random ariana lyric together with the cover art, picked from the songs in her seven studio albums, the lyric pool contains 113 unqiue lyrics, written by yours truly (pun VERY intended) in a json file.

https://ariana-grande-random-lyric-grabber.vercel.app/

this site has an api that can be used to fetch these lyrics randomly.

javascript example :

        fetch('https://ariana-grande-random-lyric-grabber.vercel.app/api/lyrics')
        .then(res => res.json())
        
cli example :

        curl https://ariana-grande-random-lyric-grabber.vercel.app/api/lyrics



i love you nini, sora, 22.
