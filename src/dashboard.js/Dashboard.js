import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Area from '../area/Area'
import Card from '../components/card/Card'
import Header from '../components/header/Header'
import styles from './dashboard.module.css'
import allStyles from '../assets/css/all-styles.module.css'
import Business from '../business/Potential'

const Dashboard = (props) => {

    const [ view, setView ] = useState("locations")

    const navigate = useNavigate()

    const changeRoute = (route) => {
        navigate(`/${route}`)
    }
    const switchView = (view) => {
        if(view === 'locations'){
            setView('locations')
        }else if(view === 'potentials'){
            setView('potentials')
        }else{
            setView('conversions')
        }
    }

    return (
        <Fragment>
            <div className={styles.dashboard}>
                <Header title="Dashboard">
                </Header>
                <div className={styles.statistics}>
                    <Card size="30%" bg="#ffffff">
                        <div className={styles.card_body} style={{cursor:"pointer"}} onClick={()=>switchView('locations')} >
                           <h1>2</h1>
                            <br />
                            <p className={styles.title}>
                                Locations
                            </p>
                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                    <Card size="30%" bg="#ffffff">
                        <div className={styles.card_body} style={{cursor:"pointer"}} onClick={()=>switchView('potentials')} >
                           <h1>2000</h1>
                            <br />
                            <p className={styles.title}>
                                Potentials Customers
                            </p>
                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                    <Card size="30%" bg="#ffffff">
                        <div className={styles.card_body} style={{cursor:"pointer"}} onClick={()=>switchView('conversions')} >
                           <h1>50</h1>
                            <br />
                            <p className={styles.title}>
                                Conversions
                            </p>
                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                </div>
                <div className={styles.statistics_mobile}>
                    <Card size="100%" bg="#ffffff">
                        <div className={styles.card_body}  onClick={()=>changeRoute("locations")}>
                            <h1>2</h1>
                            <p className={styles.title}>
                                Locations
                            </p>

                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                    <Card size="30%" bg="#ffffff">
                        <div className={styles.card_body}  onClick={()=>changeRoute("potentials")}>
                            <h1>2000</h1>
                            <p className={styles.title}>
                                Potentials Customers
                            </p>

                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                    <span style={{ padding: "0 5px" }}></span>
                    <Card size="30%" bg="#ffffff">
                        <div className={styles.card_body}  onClick={()=>changeRoute("conversions")}>
                            <h1>50</h1>
                            <p className={styles.title}>
                                Conversions
                            </p>

                            {/* <Link to="" className={styles.card_link}>View</Link> */}
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.showDetails}>
                {view === "locations" && <Area title="Locations" pSize={5} showHeader={false} />}
                {view === "potentials" && <Business title="Potentials" pSize={5} showHeader={false} />}
                {view === "conversions" && <Business title="Conversions" pSize={5} showHeader={false} />}
            </div>
        </Fragment>
    )
}

export default Dashboard