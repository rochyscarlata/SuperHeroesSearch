import React, { useState, useEffect } from "react";
import Mujerm from "../../assets/img/mujerm.jpg";
import swal from "sweetalert";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, forceUpdate] = useState(false);

  const history = useHistory();

   const handleLogin = () =>{
    history.push("/heroes")
   }
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   fetch('https://challenge-react.alkemy.org/', {
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         email: email,
  //         password: password,
  //     })
  // }).then(res => {
  //     return res.json()
  // }).then(res => {
  //     if(res["error"]){swal({
  //       title: "Error!",
  //       text: "Email or password invalid",
  //       icon: "error",
  //     });}
  //     else{
  //         localStorage.setItem('token', res["token"]);
          
  //         history.push("/home")
  //     }
  // })
  // }
  //   const data = { email, password };

   
  //    fetch('http://challenge-react.alkemy.org', {
  //       method: 'POST',
  //       headers: {
  //         "Content-Type": "application/json",
  //         'Accept': "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //     // localStorage.setItem("token", JSON.stringify(response));

  //     // response = await response.json();
  //     // if (response === 200) {
  //     //   history.replace("/home");
  //     // } 
  //     // else {
  //     //   console.log("error");
  //     // }
  
      
   
  // }

  return (
    <div class="container is-fluid">
      <div className="container is-mobile is-centered  mt-6" id="container-log">
        {" "}
        <div className="columns is-centered ">
          <div className="column is-6">
            <div className="content ">
              <form className="box" onSubmit={handleLogin}>
                <div className="field">
                  <h2 className="level-item has-text-centered">WELCOME!</h2>
                  <div className="block has-text-centered">
                    <figure className="image is-128x128 is-inline-block">
                      <img className="is-centered" src={Mujerm} />
                    </figure>
                  </div>
                  <label className="label">Email</label>
                  <div className="control">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="********"
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                </div>

                <button className="button is-primary" >
                  Sign in
                </button>
              </form>
              {/* {localStorage.getItem('token') !== "none" ? <Redirect to="/home" /> : ""} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
