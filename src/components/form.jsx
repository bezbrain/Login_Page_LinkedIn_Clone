import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);
  const [show, setShow] = useState("password");
  const [toggleShow, setToggleShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      const allPeople = { email, password };
      console.log("All available");
      setPeople((retrievePeople) => {
        return [...retrievePeople, allPeople];
      });
      setEmail("");
      setPassword("");
    } else {
      console.log("Not all available");
    }
  };

  const showHandler = () => {
    setToggleShow(!toggleShow);
    setShow(!show);
  };

  return (
    <React.Fragment>
      <h1>
        Linked<span>in</span>
      </h1>
      <main>
        <section className="form-Section">
          <form onSubmit={submitHandler}>
            <h2>Sign in</h2>
            <p>Stay updated on ypur professional world</p>
            {/* Input email section */}
            <div className="email-con">
              <input
                type="text"
                placeholder="Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Input password section */}
            <div className="password-con">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={showHandler}>{toggleShow ? "show" : "hide"}</span>
            </div>

            <h5>Forget password?</h5>

            {/* Sign in btn section */}
            <div className="sign-in-con" type="submit">
              <button className="sign-in-btn">Sign in</button>
            </div>

            {/* Lines section */}
            <div className="lines-con">
              <span className="left-line"></span> or
              <span className="right-line"></span>
            </div>

            {/* Continue with google btn section */}
            <div className="apple-signin-con">
              <button className="apple-signin-btn">
                <FaGoogle className="apple-icon" />
                Sign in with Apple
              </button>
            </div>

            {/* Apple sign in btn Section */}
            <div className="apple-signin-con">
              <button className="apple-signin-btn">
                <FaApple className="apple-icon" />
                Sign in with Apple
              </button>
            </div>
          </form>
        </section>
        <p>
          New to LinkedIn? <a href="https://linkedin.com">Join now</a>
        </p>
      </main>
    </React.Fragment>
  );
}

export default Form;
