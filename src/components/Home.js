import React, { useState, useEffect } from "react";
import swal from "sweetalert";

const Home = () => {
  const [equipo, setEquipo] = useState([]);
  const [totalCombat, setTotalCombat] = useState(0.0);
  const [totalDurability, setTotalDurability] = useState(0.0);
  const [totalIntelligence, setTotalIntelligence] = useState(0.0);
  const [totalPower, setTotalPower] = useState(0.0);
  const [totalSpeed, setTotalSpeed] = useState(0.0);
  const [totalStrength, setTotalStrength] = useState(0.0);
  const [promedioPeso, setpromedioPeso] = useState(0.0);
  const [promedioAltura, setpromedioAltura] = useState(0.0);
  const [mayorStat, setMayorStat] = useState("");
  const [chara, setChara] = useState([]);
  const validarAgregar = (chara) => {
    if (equipo.length === 6) {
      return "No puede agregar más de 6 miembros al equipo";
    }

    if (equipo.find((charas) => charas.id === chara.id)) {
      return "Ya agregó al héroe al equipo";
    }

    if (
      equipo.filter((charas) => charas.biography.alignment === "good")
        .length === 3
    ) {
      return "No puede haber más de 3 heroes con orientación buena";
    }

    if (
      equipo.filter((charas) => charas.biography.alignment === "bad").length ===
      3
    ) {
      return "No puede haber más de 3 heroes con orientación mala";
    }

    return "";
  };

  useEffect(() => {
    let powerstats = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    };
    let peso = 0.0;
    let altura = 0.0;

    equipo.forEach((chara) => {
      if (chara.appearance.weight[1]) {
        //peso en kg
        const pesoHero = parseFloat(
          chara.appearance.weight[1].replace(" kg", "")
        );
        peso = peso + pesoHero;
      }
      if (chara.appearance.height[1]) {
        //altura en cm
        const alturaHero = parseFloat(
          chara.appearance.height[1].replace(" cm", "")
        );
        altura = altura + alturaHero;
      }
      Object.keys(chara.powerstats).forEach((key) => {
        if (chara.powerstats[key] !== "null") {
          powerstats[key] = powerstats[key] + parseInt(chara.powerstats[key]);
        }
      });
    });

    setTotalCombat(powerstats.combat);
    setTotalDurability(powerstats.durability);
    setTotalIntelligence(powerstats.intelligence);
    setTotalPower(powerstats.power);
    setTotalSpeed(powerstats.speed);
    setTotalStrength(powerstats.strength);

    //ordeno las stats de mayor a menor

    const statsOrdenadas = Object.entries(powerstats).sort(
      (a, b) => b[1] - a[1]
    );
    if (statsOrdenadas[0][1] !== 0) {
      // seteo la primera si es distinto de 0
      setMayorStat(statsOrdenadas[0][0]);
    }

    if (peso !== 0) {
      setpromedioPeso((peso / equipo.length).toFixed(2));
    }
    if (altura !== 0) {
      setpromedioAltura((altura / equipo.length).toFixed(2));
    }
  }, [equipo]);

  const addToTeam = (chara) => {
    const resultadoValidacion = validarAgregar(chara);

    if (resultadoValidacion === "") {
      const copiaDeEquipo = [...equipo];
      copiaDeEquipo.push(chara);
      setEquipo(copiaDeEquipo);
      // calcularEstadisticas();
    } else {
      swal.fire({
        icon: "error",
        title: resultadoValidacion,
      });
    }
  };
  const sacarDelEquipo = (chara) => {
    const equipoFiltrado = equipo.filter((charas) => charas.id !== chara.id);
    setEquipo(equipoFiltrado);
    // calcularEstadisticas();
  };

  return (
    <div className="container is-max-desktop">
      <div className="container is-mobile">
        <div class="columns is-mobile is-centered">
          <div class="column is-half">
            <div class="block">
              <h3 className="title is-3 ">
                <strong>YOUR TEAM</strong>
              </h3>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Hero</th>
                  <th>Stats</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {equipo.map((chara) => (
                  <tr>
                    <th>
                      <figure class="image is-64x64">
                        <img
                          class="is-rounded"
                          src="https://bulma.io/images/placeholders/128x128.png"
                        />
                      </figure>
                    </th>
                    <td>{chara.name}</td>
                    <td>
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
                    </td>
                    <td>
                      <button
                        class="button is-danger"
                        onClick={() => sacarDelEquipo(chara)}
                      >
                        <span class="icon">
                          <i class="fas fa-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="notification is-danger  is-light">
            This section is not available yet, please go to 
              <a href="./heroes"> heroes</a> 
            </div>
            <div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
