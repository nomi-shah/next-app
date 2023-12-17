import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
export default async function Movie() {
  const url: string = process.env.RAPID_KEY!;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29886dc0eemsh0f2c01e4e0f055cp1e3398jsnb6f088b95a0d",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const mainData = result.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {mainData.map((curElem: any) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
