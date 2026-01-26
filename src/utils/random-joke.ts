import jokes from '@/constants/joke.json';

export function randomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}