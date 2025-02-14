import React from 'react'

const Signup = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex full-height p-v-20 flex-column justify-content-between">
                    <div className="d-none d-md-flex p-h-40">
                        <img src="src/assets/logo-webapp-admin.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 d-none d-md-block">
                                <img className="img-fluid" src="src/assets/sign-up-2.png" alt="" />
                            </div>
                            <div className="m-l-auto col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="m-t-20">Sign In</h2>
                                        <p className="m-b-30">Enter your credential to get access</p>
                                        <form>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" htmlFor="userName">Username:</label>
                                                <input type="text" className="form-control" id="userName" placeholder="Username" />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" htmlFor="email">Email:</label>
                                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" htmlFor="password">Password:</label>
                                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-semibold" htmlFor="confirmPassword">Confirm Password:</label>
                                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="d-flex align-items-center justify-content-between p-t-15">
                                                    <div className="checkbox">
                                                        <input id="checkbox" type="checkbox" />
                                                        <label htmlFor="checkbox"><span>I have read the <a href="#">agreement</a></span></label>
                                                    </div>
                                                    <button className="btn btn-primary">Sign In</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex  p-h-40 justify-content-between">
                        <span className="">© 2024 Learn Ease</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
