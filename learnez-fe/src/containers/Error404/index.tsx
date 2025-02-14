
const Error404 = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex full-height p-v-20 flex-column justify-content-between">
                    <div className="d-none d-md-flex p-h-40">               
                            <img src="src/assets/logo-webapp-admin.png" alt="" />

                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="p-v-30">
                                    <h1 className="font-weight-semibold display-1 text-primary lh-1-2">404</h1>
                                    <h2 className="font-weight-light font-size-30">Whoops! Looks like you got lost</h2>
                                    <p className="lead m-b-30">We couldnt find what you were looking for.</p>
                                    <a href="/dashboard" className="btn btn-primary btn-tone">Go Back</a>
                                </div>
                            </div>
                            <div className="col-md-6 m-l-auto">
                                <img className="img-fluid" src="src/assets/error-1.png" alt="" />
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

export default Error404
