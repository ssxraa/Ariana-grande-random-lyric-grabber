import lyrics from '$lib/data/lyrics.json';

export function GET() {
  const random = lyrics[Math.floor(Math.random() * lyrics.length)];
  return new Response(JSON.stringify(random), {
    headers: { 'Content-Type': 'application/json' }
  });
}