import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./HeroesStyle.css";

const HeroeView = ({history}) => {
  const { id } = useParams();
  console.log(id);
  const [chara, setChara] = useState([]);
  const apiKey = "10226116298680536";

  const url =  "https://www.superheroapi.com/api.php";
  // por el id obtengo los datos
  useEffect(() => {
    const dataHero = async () => {
      const data = await fetch(
        `${url}/${apiKey}/${id}`
        
      );
      const res = await data.json();
      setChara(res);
      console.log(res);
    };
    dataHero();
  }, [id]);

  function handleReturn(){
      history.push('/heroes');
  }

  return (
    <>
      <div className="container is-max-desktop">
        <div className="container ">
          {/* <img className="" src={chara.image?.url} alt="" /> */}
          <div class="columns is-mobile is-multiline">
            <div class="column animate__animated animate__zoomInUp">
              <figure className="image ">
                <img src={chara.image?.url} alt={`${chara.name} Snapshot`} />
              </figure>
            </div>

            <div class="column animate__animated animate__zoomInUp">
              <div className="content">
                <h2 className="title is-2">{chara.name}</h2>
                <p >
                  <span className="has-text-primary">Full Name:</span> {chara.biography?.["full-name"]}
                </p>
                <p >
                  <span className="has-text-primary">Also know as:</span> {chara.biography?.aliases[0]}
                </p>
                <p >
                  <span className="has-text-primary">Height:</span> {chara.appearance?.height[1]}{" "}
                  - {chara.appearance?.weight[1]}
                </p>
                <p >
                  <span className="has-text-primary">Weight:</span>{chara.appearance?.weight[1]}
                </p>
                <p >
                  <span className="has-text-primary">Eye color:</span> {chara.appearance?.["eye-color"]}
                </p>
                <p >
                  <span className="has-text-primary">Hair color:</span> {chara.appearance?.["hair-color"]}
                </p>
                <p >
                  <span className="has-text-primary">Work:</span> {chara.work?.occupation}
                </p>
                <p >
                  <span className="has-text-primary">First Appearance was in</span>{" "}
                  {chara.biography?.["first-appearance"]}{" "}
                  <span>and Published for</span> {chara.biography?.publisher}
                </p>
                <h4 class="subtitle is-4">PowerStats</h4>
                <p>
                  <span>Intelligence: {chara.powerstats?.intelligence}%</span>
                  <progress
                    class="progress is-small is-primary"
                    value={chara.powerstats?.intelligence}
                    max="100"
                  ></progress>
                </p><p>
                  <span>strength: {chara.powerstats?.strength}%</span>
                  <progress
                    class="progress is-small is-link"
                    value={chara.powerstats?.strength}
                    max="100"
                  ></progress>
                </p><p>
                  <span>Speed: {chara.powerstats?.speed}%</span>
                  <progress
                    class="progress is-small is-info"
                    value={chara.powerstats?.speed}
                    max="100"
                  ></progress>
                </p><p>
                  <span>Durability: {chara.powerstats?.durability}%</span>
                  <progress
                    class="progress is-small is-success"
                    value={chara.powerstats?.durability}
                    max="100"
                  ></progress>
                </p>
                <p>
                  <span>Power: {chara.powerstats?.power}%</span>{" "}
                  <progress
                    class="progress is-small is-warning"
                    value={chara.powerstats?.power}
                    max="100"
                  ></progress>
                </p>
                <p>
                  <span>Combat: {chara.powerstats?.combat}%</span>{" "}
                  <progress
                    class="progress is-small is-danger"
                    value={chara.powerstats?.combat}
                    max="100"
                  ></progress>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <Link to="/heroes" class="level-item" aria-label="undo" onclick={handleReturn}>
                    <span class="icon is-small">
                      <i class="fas fa-undo" aria-hidden="true"></i>
                    </span>
                    Back
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="character-div-title">
            <h2 className="character-title">{chara.name}</h2>
            <p className="character-text">
              <span>Full Name:</span> {chara.biography?.["full-name"]}
            </p>
            <p className="character-text">
              <span>Also know as:</span> {chara.biography?.aliases[0]}
            </p>
            <p className="character-text">
              <span>Height and Weight:</span> {chara.appearance?.height[1]} -{" "}
              {chara.appearance?.weight[1]}
            </p>
            <p className="character-text">
              <span>Eye color:</span> {chara.appearance?.["eye-color"]}
            </p>
            <p className="character-text">
              <span>Hair color:</span> {chara.appearance?.["hair-color"]}
            </p>
            <p className="character-text">
              <span>Work:</span> {chara.work?.occupation}
            </p>
            <p className="character-text">
              <span>First Appearance was in</span>{" "}
              {chara.biography?.["first-appearance"]}{" "}
              <span>and Published for</span> {chara.biography?.publisher}
            </p>
          </div>
          <Link to="/heroes">
            <button className="character-button">Back </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default HeroeView;
