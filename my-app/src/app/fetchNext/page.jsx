"use client";
import Image from "next/image";
import { useState } from "react";

const BaseURI = "https://rickandmortyapi.com/api/character/1";

const BaseURIhK = " https://api.attackontitanapi.com/characters/15";

const FetchNext = () => {
  const [character, setCharacter] = useState("");
  const [hK, setHK] = useState("");

  async function HitResponse() {
    const response = await fetch(BaseURI);
    const data = await response.json();
    setCharacter(data);
  }
  async function HitResponsehK() {
    const response = await fetch(BaseURIhK);
    const data = await response.json();
    setHK(data);
  }
  HitResponse();
  return (
    <>
      <h1 className="text-green-300 text-center">Rick and Morty</h1>
      <div className="mx-auto my-5 flex flex-col gap-10 text-center items-center p-2 w-[300px] h-[500px] border border-white">
        <h2 className="text-white text-2xl">{character.name}</h2>
        <h2 className="text-white text-2xl">{character.species}</h2>
        <h2 className="text-white text-2xl">{character.gender}</h2>
        <Image
          className="rounded-full"
          src={character.image}
          width={160}
          height={160}
        ></Image>
      </div>
    </>
  );
};

export default FetchNext;
