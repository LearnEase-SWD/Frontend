import React, { useState } from 'react'
import './index.scss'
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'

const DashboardAdmin = () => {
    const [active, setActive] = useState("Month");

    return (
        <div className='dashboard-admin-main'>
            <div className='row'>
                <div className='col-md-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='media align-items-center'>
                                <div className='icon'>
                                    <DollarOutlined className='dollar-icon' />
                                </div>
                                <div className='m-l-15'>
                                    <h2 className='m-b-0'>
                                        $23,523
                                    </h2>
                                    <p className='m-b-0 text-muted'>
                                        Profit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='media align-items-center'>
                                <div className='icon-cyan'>
                                    <LineChartOutlined className='' />
                                </div>
                                <div className='m-l-15'>
                                    <h2 className='m-b-0'>
                                        + 17.21%
                                    </h2>
                                    <p className='m-b-0 text-muted'>
                                        Growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='media align-items-center'>
                                <div className='icon-gold'>
                                    <ProfileOutlined />
                                </div>
                                <div className='m-l-15'>
                                    <h2 className='m-b-0'>
                                        3,685
                                    </h2>
                                    <p className='m-b-0 text-muted'>
                                        Orders
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='media align-items-center'>
                                <div className='icon-purple'>
                                    <UserOutlined />
                                </div>
                                <div className='m-l-15'>
                                    <h2 className='m-b-0'>
                                        1,832
                                    </h2>
                                    <p className='m-b-0 text-muted'>
                                        Customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>Total Revenue</h5>
                                <div>
                                    <div className="toggle-button-group">
                                        <button
                                            className={`toggle-button ${active === "Month" ? "active" : ""}`}
                                            onClick={() => setActive("Month")}
                                        >
                                            Month
                                        </button>
                                        <button
                                            className={`toggle-button ${active === "Year" ? "active" : ""}`}
                                            onClick={() => setActive("Year")}
                                        >
                                            Year
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="m-t-50" style={{ height: '330px' }}>
                                <canvas className="chart" id="revenue-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardAdmin
