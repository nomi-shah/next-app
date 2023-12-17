import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default async function page({ params }: Props) {
  const { id } = params;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29886dc0eemsh0f2c01e4e0f055cp1e3398jsnb6f088b95a0d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const mainData = result[0].details;
  console.log(result);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span> {mainData.type} </span>{" "}
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={mainData.backgroundImage.url}
              alt={mainData.title}
              width={600}
              height={300}
            />
          </div>
          <div>
            <h1>{mainData.title}</h1>
            <p>{mainData.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}
