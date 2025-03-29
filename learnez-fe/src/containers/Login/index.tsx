import {  handleLogin } from "../../services/auth.service";
import "./index.scss";

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
                    <h2 className="m-t-20 text-center">Log In</h2>

                    {/* Google Login */}
                    <div className="form-group text-center">
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
