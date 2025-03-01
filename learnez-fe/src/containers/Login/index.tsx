// import './index.scss'
// import { LockOutlined, UserOutlined } from "@ant-design/icons"
// const Login = () => {
//     return (
//         <div>
//             <div className="container-fluid">
//                 <div className="d-flex full-height p-v-15 flex-column justify-content-between">
//                     <div className="d-none d-md-flex p-h-40">
//                         <img src={"/static/images/logo-webapp-admin.png"} alt="" />
//                     </div>
//                     <div className="container">
//                         <div className="row align-items-center">
//                             <div className="col-md-5">
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <h2 className="m-t-20">Sign In</h2>
//                                         <p className="m-b-30">Enter your credential to get access</p>

//                                         <form>
//                                             <div className="form-group">
//                                                 <label className="font-weight-semibold" htmlFor="userName">Username:</label>

//                                                 <div className="input-affix">
//                                                     <i className="prefix-icon anticon anticon-user">
//                                                         <UserOutlined />
//                                                     </i>
//                                                     <input type="text" className="form-control" id="userName" placeholder="Username" />
//                                                 </div>
//                                             </div>
//                                             <div className="form-group">
//                                                 <label className="font-weight-semibold" htmlFor="password">Password:</label>
//                                                 <a className="float-right font-size-13 text-muted" href="#">Forget Password?</a>
//                                                 <div className="input-affix m-b-10">
//                                                     <i className="prefix-icon anticon anticon-lock">
//                                                         <LockOutlined />
//                                                     </i>
//                                                     <input type="password" className="form-control" id="password" placeholder="Password" />
//                                                 </div>
//                                             </div>
//                                             <div className="form-group">
//                                                 <div className="d-flex align-items-center justify-content-between">
//                                                     <span className="font-size-13 text-muted">
//                                                         <a className="small" > </a>
//                                                     </span>
//                                                     <div>
//                                                         <button className="btn btn-primary">
//                                                             <a className="button-sign-in" href="/dashboard">Sign In</a>
//                                                         </button>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </form>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="offset-md-1 col-md-6 d-none d-md-block">
//                                 <img className="img-fluid" src={"/static/images/login-2.png"} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="d-none d-md-flex  p-h-40 justify-content-between">
//                         <span className="">© 2024 Learn Ease</span>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login
import axiosInstance from "../../services/axiosInstance";
import "./index.scss";
import { GoogleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";


const Login = () => {
  const handleLogin = async () => {
    try {
        const response = await axiosInstance.get("auth/login");

        if (response.data.url) {
            window.location.href = response.data.url;
        } else {
            console.error("Login URL not found in response");
        }
    } catch (error) {
        console.error("Login failed:", error);
    }
};
  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex full-height p-v-15 flex-column justify-content-between">
          <div className="d-none d-md-flex p-h-40">
            <img src={"/static/images/logo-webapp-admin.png"} alt="" />
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
                        <div className="d-flex align-items-center justify-content-between ">
                          <button className="btn btn-primary">
                            <a className="button-sign-in" href="/dashboard">
                              Sign In
                            </a>
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* Google Login */}
                    <div className="form-group text-center" >
                      <p className="m-b-10">Or sign in with</p>
                      <button
                        className="google-login-btn"
                        onClick={handleLogin}
                      >
                        <GoogleOutlined />
                        Sign in with Google
                      </button>
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
