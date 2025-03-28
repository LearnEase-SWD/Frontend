import {  handleLogin } from "../../services/auth.service";
import "./index.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  return (  
    <div>
      <div className="container-fluid">
        <div className="d-flex full-height p-v-15 flex-column justify-content-between">
          <div className="d-none d-md-flex p-h-40">
            <img src={"/static/images/logo-webapp-admin.png"} alt="logo" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <h2 className="m-t-20">Sign In</h2>
                    <p className="m-b-30">
                      Enter your credential to get access
                    </p>

                    <form>
                      <div className="form-group">
                        <label
                          className="font-weight-semibold"
                          htmlFor="userName"
                        >
                          Username:
                        </label>
                        <div className="input-affix">
                          <UserOutlined className="prefix-icon" />
                          <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="font-weight-semibold"
                          htmlFor="password"
                        >
                          Password:
                        </label>
                        <a
                          className="float-right font-size-13 text-muted"
                          href="#"
                        >
                          Forget Password?
                        </a>
                        <div className="input-affix m-b-10">
                          <LockOutlined className="prefix-icon" />
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="d-flex align-items-center justify-content-between">
                          <button className="btn btn-primary">
                            <a className="button-sign-in" href="/dashboard">
                              Sign In
                            </a>
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* Google Login */}
                    <div className="form-group text-center">
                      <p className="m-b-10">Or </p>
                      <div>
                        <button id="google-login-btn" onClick={handleLogin}>
                          <img
                            src="https://developers.google.com/identity/images/g-logo.png"
                            alt="Google Logo"
                          />
                          Sign in with Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-md-1 col-md-6 d-none d-md-block">
                <img
                  className="img-fluid"
                  src={"/static/images/login-2.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex p-h-40 justify-content-between">
            <span className="">© 2024 Learn Ease</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
