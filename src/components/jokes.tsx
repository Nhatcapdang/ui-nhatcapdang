'use client';

import axios from 'axios';
import { useEffect, useEffectEvent, useState } from 'react';

type Joke = React.HTMLAttributes<HTMLDivElement>;

export default function Jokes(props: Joke) {
  const [joke, setJoke] = useState<{
    setup: string;
    punchline: string;
  } | null>(null);

  const handleFetchJoke = useEffectEvent(async () => {
    const response = await axios.get<
      [
        {
          type: string;
          setup: string;
          punchline: string;
          id: number;
        }
      ]
    >('https://official-joke-api.appspot.com/jokes/programming/random');
    const data = response.data;
    setJoke(data[0]);
  });

  useEffect(() => {
    handleFetchJoke();
  }, []);

  return (
    <div {...props}>
      <h1 className="text-2xl font-bold">{joke?.setup}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {joke?.punchline} 🤣🤣🤣
      </p>
    </div>
  );
}
