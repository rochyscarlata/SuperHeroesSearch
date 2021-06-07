import React, { Component } from "react";
import axios from "axios";
import "./HeroesStyle.css";
import Qs from "qs";

import swal from "sweetalert";
import { Link } from "react-router-dom";

const apiKey = "921664605275424";
let heroArray = [];
let searchResults = "";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      chosenCharacter: {},
    };
  }

  searchChar = (e) => {
    let charString = document.getElementById("searchInput").value;
    e.preventDefault();

    axios({
      method: "GET",
      url: "https://proxy.hackeryou.com",
      dataResponse: "json",
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: `https://superheroapi.com/api/${apiKey}/search/${charString}`,
      },
      xmlToJSON: false,
    }).then((res) => {
      console.log(res);

      heroArray = res.data.results;
      if (!heroArray) {
        swal({
          title: "error",
          text: `${charString} returns no results. Please try a another character.`,
          icon: "error",
          button: {
            className: "sweetButton",
          },
        });
      } else {
        console.log(heroArray);
        heroArray.forEach((chara) => {
          for (let stat in chara.powerstats) {
            // change null number values to 0
            if (chara.powerstats[stat] === "null") {
              chara.powerstats[stat] = "0";
            }
          }
        });
        this.setState({
          searchResults: heroArray,
        });
      }
    });
  };

  addToTeam(){
    swal({
      title: "Sorry!",
      text: "This action is not available yet!",
      icon: "error",
    });
  }
  
  render() {
    return (
     
        <div className="container is-max-desktop">
          <div className="container is-mobile">
            <div class="columns is-mobile is-centered">
              <div class="column is-half">
                <div class="block">
                  <h3 className="title is-3 ">
                    FIND YOUR <strong>HERO</strong>
                  </h3>
                </div>
                <div class="modal">
                  <div class="modal-background"></div>
                  <div class="modal-content"></div>
                  <button
                    class="modal-close is-large"
                    aria-label="close"
                  ></button>
                </div>
                
                <form
                  className="search"
                  onSubmit={this.searchChar}
                  onClick={this.changeClassName}
                >
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        placeholder="Seeks a hero"
                        id="searchInput"
                      />
                    </div>
                    <div className="control">
                      <button
                        type="submit"
                        className="button is-primary"
                        value="Search"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>

                <div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        
        
        <section class="section is-small">
          <div className="container is-max-desktop ">
            <div class="columns is-mobile is-multiline">
              {heroArray.map((chara, i) => {
                return (
                  <div className="colum is-4 animate__animated animate__fadeIn">
                    <div key={chara.id} className=" card card-equal-height">
                      <div class="card-content">
                        <header class="card-header">
                          <img
                            className="is-4by3"
                            src={chara.image.url}
                            alt={`${chara.name} Snapshot`}
                          />
                        </header>
                        <div class="card-content">
                          <h4 className="title is-4">{chara.name}</h4>
                          <h4 className="subtitle">{chara.biography.alignment}</h4>
                          <p class="card-header-title">Powerstats: </p>
                          <span class="tag is-primary is-light">
                            Intelligence: {chara.powerstats.intelligence}
                          </span>
                          <span class="tag is-link is-light">
                            strength:{chara.powerstats.strength}
                          </span>
                          <span class="tag is-info is-light">
                            Speed:{chara.powerstats.speed}
                          </span>
                          <span class="tag is-success is-light">
                            Durability:{chara.powerstats.durability}
                          </span>
                          <span class="tag is-warning is-light">
                            Power:{chara.powerstats.power}
                          </span>
                          <span class="tag is-danger is-light">
                            {" "}
                            Combat:{chara.powerstats.combat}
                          </span>
                        </div>
                        <footer class="card-footer has-background-primary-light">
                          <a href="#" class="card-footer-item" onClick={() => this.addToTeam(i)}>
                            Add to my team
                          </a>
                          <Link
                            class="card-footer-item"
                            to={`./heroeView/${chara.id}`}
                          >
                            View
                          </Link>
                        </footer>
                      </div>
                    </div>
                    <br></br>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// export default Heroes;
