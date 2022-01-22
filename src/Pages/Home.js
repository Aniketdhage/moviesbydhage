import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    //   https://api.tvmaze.com/search/shows?q=man
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
