<script>
  import { fade } from 'svelte/transition';
  import lyricsData from '$lib/page.json';

  let shown = false;
  let showLyric = false;
  let lyric = null;
  let blob1Color = "#7EC8E3";
  let blob2Color = "#B3E0FF";
  let coverLoaded = false;

  function getRandomLyric() {
    const idx = Math.floor(Math.random() * lyricsData.length);
    return lyricsData[idx];
  }

  function handleClick() {
    lyric = getRandomLyric();
    blob1Color = lyric.color;
    blob2Color = lyric.color;
    shown = true;
    coverLoaded = false;
    setTimeout(() => {
      showLyric = true;
    }, 400);
  }

  function onCoverLoad() {
    coverLoaded = true;
  }
</script>

<div class="container">
  <!-- Blobs -->
  <div class="blob blob1" style="background: {blob1Color};"></div>
  <div class="blob blob2" style="background: {blob2Color};"></div>

  <!-- Main content -->
  <div class="content">
    <div class="intro-center">
      {#if !shown}
        <p class="centered-title" out:fade={{duration:180}}>random Ariana Grande lyrics</p>
        <button 
          on:click={handleClick} 
          out:fade={{duration:180}}
        >Gimme</button>
      {/if}
    </div>
    {#if shown && showLyric && lyric}
      <div class="lyric-block" out:fade={{duration:200}}>
        <img 
          src={lyric.cover} 
          alt="Album cover" 
          class="album-cover {coverLoaded ? 'loaded' : ''}"
          on:load={onCoverLoad} 
        />
        <div class="lyric fade-in-blur {coverLoaded ? 'loaded' : ''}">{lyric.lyric}</div>
        <div class="album-name fade-in-blur {coverLoaded ? 'loaded' : ''}">{lyric.album}</div>
      </div>
    {/if}
  </div>
  <div class="sora22">Sora 22</div>
  <div class="tv-filter"></div>
</div>

<style>
  .container {
    min-height: 100vh;
    min-width: 100vw;
    background: #16181d;
    position: relative;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(113px);
    opacity: 0.7;
    transition: background 0.6s;
    width: 400px;
    height: 400px;
    pointer-events: none;
    z-index: 0;
  }
  .blob1 {
    left: 10vw;
    top: 20vh;
    animation: float1 5s ease-in-out infinite alternate;
  }
  .blob2 {
    right: 5vw;
    bottom: 10vh;
    animation: float2 6s ease-in-out infinite alternate;
  }
  @keyframes float1 {
    0% { transform: translateY(0) scale(1);}
    50% { transform: translateY(-30px) scale(1.05) translateX(40px);}
    100% { transform: translateY(40px) scale(1.1) translateX(-20px);}
  }
  @keyframes float2 {
    0% { transform: translateX(0) scale(1);}
    40% { transform: translateY(-30px) scale(1.07) translateX(-30px);}
    100% { transform: translateY(50px) scale(1.13) translateX(50px);}
  }
  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .intro-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin-bottom: 1.5rem;
  }

  .centered-title {
    color: white;
    font-size: 4rem;
    text-align: center;
    margin: 0 0 18px 0;
    font-family: 'vera', system-ui, sans-serif;
  }

  button {
    background: none;
    color: #fff;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.3);
    font-family: 'vera';
    transition: background 0.2s, transform 0.1s;
    backdrop-filter: blur(2px);
    outline: none;
    z-index: 9999;
    border: 1px solid rgba(255,255,255,0.1);
  }
  button:hover {
    background: rgba(255, 255, 255, 0.079);
  }
  .lyric-block {
    padding: 2.5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    max-width: 90vw;
    margin-bottom: 4rem;
    z-index: 9999;
  }
  .album-cover {
    width: 300px;
    height: 300px;
    object-fit: cover;
    box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18);
    margin-bottom: 1.4rem;
    background: #222;
    opacity: 0;
    filter: blur(30px);
    transition: opacity 0.8s cubic-bezier(.4,1.7,.6,.97), filter 1.3s cubic-bezier(.2,.8,.4,1.1);
    transform-style: preserve-3d;
    will-change: transform;
    animation: tiltWobble 6s ease-in-out infinite alternate;
  }
  .album-cover.loaded {
    opacity: 1;
    filter: blur(0px);
  }
  @keyframes tiltWobble {
    0% {
      transform: perspective(1100px) rotateX(0deg) rotateY(0deg);
    }
    25% {
      transform: perspective(1100px) rotateX(5deg) rotateY(6deg);
    }
    50% {
      transform: perspective(1100px) rotateX(5deg) rotateY(6deg);
    }
    75% {
      transform: perspective(1100px) rotateX(-3deg) rotateY(-4deg);
    }
    100% {
      transform: perspective(1100px) rotateX(-3deg) rotateY(5deg);
    }
  }
  .fade-in-blur {
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.8s cubic-bezier(.4,1.7,.6,.97), filter 1.3s cubic-bezier(.2,.8,.4,1.1);
  }
  .fade-in-blur.loaded {
    opacity: 1;
    filter: blur(0px);
  }
  .lyric {
    color: #fff;
    font-size: 2rem;
    font-family: 'vera';
    margin-bottom: 0.2rem;
    text-align: center;
    text-shadow: 0 2px 12px rgba(0,0,0,0.26);
    letter-spacing: -0.02em;
    line-height: 1.5;
    max-width: 40rem;
  }
  .album-name {
    font-size: 1.1rem;
    color: #bdbdbd;
    font-family: 'vera', system-ui, sans-serif;
    letter-spacing: 0.07em;
    margin-top: 0;
    margin-bottom: 0;
  }
  .tv-filter {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.04) 0px,
        rgba(255,255,255,0.04) 2px,
        transparent 2px,
        transparent 6px
      );
    box-shadow: 0 0 160px 60px rgba(0,0,0,0.3) inset;
    z-index: 10;
  }
  .sora22 {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.88rem;
    color: #bdbdbd;
    font-family: 'vera', system-ui, sans-serif;
    letter-spacing: 0.07em;
    opacity: 0.75;
    z-index: 20;
    pointer-events: none;
    user-select: none;
  }
</style>