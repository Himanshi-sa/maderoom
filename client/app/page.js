"use client";
import { HeroUIProvider, Button } from "@heroui/react";
import { useState } from "react";
import { io} from "socket.io-client";
const socket = io ("https://effective-space-waffle-wr95v9q6j75gfqg-8000.app.github.dev/");

export default function Home() {
  const [selected, setSelected] = useState("😀");

  const emojis = "😅,😄,😶,😊,😎,😀".split(",");

  const handleClick = (emoji) => {
    console.log(emoji);
    setSelected(emoji);
    socket.emit("emoji", emoji);
  };

  return (
    <HeroUIProvider>
      <div className="min-h-screen flex justify-center items-center flex-col gap-16">
        <h1 className="text-7xl">{selected}</h1>
        <div className="flex gap-1 flex-wrap justify-center">
          {emojis.map((emoji, index) => {
            return (
              <Button
                key={index}
                variant="bordered"
                className="text-3xl p-5"
                onPress={() => handleClick(emoji)}
              >
                {emoji}
              </Button>
            );
          })}
        </div>
      </div>
    </HeroUIProvider>
  );
}