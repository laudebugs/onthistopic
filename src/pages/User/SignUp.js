import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import $ from "jquery";

import Header from "../../components/Header";

import endpoint from "../../api/endpoint";

const SignUp = () => {
  const submit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: JSON.stringify({
        firstname: $("#firstname")[0].value,
        lastname: $("#lastname")[0].value,
        username: $("#username")[0].value,
        email: $("#email")[0].value,
        password: $("#password")[0].value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log(options);
    const request = fetch(`${endpoint}/signup`, options);
    request.then((response) => {
      response.json().then((result) => {
        if (result.errors.length === 0) {
          console.log(result);
        }
      });
    });
  };
  return (
    <>
      <Header />

      <div className="inputForm">
        <div>
          <form method="POST">
            <table>
              <tr>
                <td>
                  <label for="firstname">First Name</label>
                </td>
                <td>
                  <input type="text" name="firsname" id="firstname"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="lastname">Last Name</label>
                </td>
                <td>
                  <input type="text" name="lastname" id="lastname"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="username">Username</label>
                </td>
                <td>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    required={true}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email">Email Address</label>
                </td>
                <td>
                  <input type="email" name="email" id="email" required></input>
                </td>
              </tr>

              <tr>
                <td>
                  <label for="password">Enter Password</label>
                </td>
                <td>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="password">Confirm Password</label>
                </td>
                <td>
                  <input
                    id="password1"
                    type="password"
                    name="password1"
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button class="signinbtn" onClick={submit} type="submit">
                    Sign up
                  </button>
                </td>
              </tr>
            </table>
          </form>
          <p class="signin">
            Already have an account?{" "}
            <Link key="signInPage" to="/signin">
              sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default SignUp;
