import React, { Fragment, useState } from 'react'
import styles from './default.module.css'
import logo from '../assets/images/logo-big.png'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import technicalRoutes from '../routes/technical.routes'
import { useDispatch, useSelector } from 'react-redux'
import { selectAdminRoutes, setAdminRoutes } from '../features/admin.route'
import routes from '../routes'


const DefaultLayout = (props) => {
    const [ showDrawer, setShowDrawer ] = useState(false)

    let location = useLocation()
    let dispatch = useDispatch()

    let adminRoute = useSelector(selectAdminRoutes)

    const toggleSubRoutes = (routeInfo, index) => {
        dispatch(setAdminRoutes(routeInfo))
    }

    const toggleDrawer = () =>{
        console.log("adfd")
        setShowDrawer(!showDrawer)
    }

    return (
        <div className={styles.default_layout}>
            <div className={styles.nav_wrap}>
                <div className={styles.navbar}>
                    <nav>
                        <img src={logo} alt="logo" width="130" height="45" style={{ marginTop: 10 }} />
                        <div className={styles.account}>
                            <div className={styles.profile}><strong>Good morning!</strong> John Tanko</div>
                            <div className={styles.logout}>Logout</div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.nav_wrap_mobile}>
                <div className={styles.navbar}>
                    <nav>
                        <span className={styles.menu_icon} onClick={toggleDrawer}>
                            <i className='fas fa-bars fa-lg' style={{margin:"25px 0 25px 15px"}}></i>
                        </span>
                        <img src={logo} alt="logo" width="130" height="45" style={{ marginTop: 5 }} />
                        <span className={styles.menu_icon} onClick={toggleDrawer}>
                            <i className='fas fa-power-off fa-lg' style={{margin:"25px 20px 25px 0px"}}></i>
                        </span>
                    </nav>
                </div>
            </div>
            <div className={styles.main}>

                {showDrawer && 
                <Fragment>
                <div className={styles.drawer_overlay} onClick={toggleDrawer}></div>
                <div className={styles.side_wrap_mobile}>
                    <div className={styles.sideNav}>
                        <aside>
                            <span className={styles.sub_routes_header} style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:10,fontWeight:"bold"}}>
                                Navigation
                                {/* <i className='fas fa-bars fa-sm' style={{marginRight:10, marginTop:10,fontSize:11}}></i> */}
                            </span>
                            <ul className={styles.nav_links}>
                                {
                                    routes?.map((routes, index) => {
                                        return (
                                            routes.hasOwnProperty("subRoute") ? (
                                                <Fragment key={index}>
                                                    <span className={styles.sub_routes_header} style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:10,fontWeight:"bold"}}>
                                                        {routes.name}
                                                        {/* <i className='fas fa-cog fa-sm' style={{marginRight:10, marginTop:10,fontSize:11}}></i> */}
                                                    </span>
                                                    <ul className={styles.sub_routes}>
                                                        {routes.subRoute.map((subR, index) => {
                                                            return (
                                                                <NavLink to={subR.path} key={index} className={styles.sub_route_link} onClick={toggleDrawer}>
                                                                    <i className='fas fa-angle-right fa-sm' style={{marginRight:10,fontSize:11}}></i>
                                                                    {subR.name}
                                                                </NavLink>
                                                            )
                                                        })}
                                                    </ul>
                                                </Fragment>
                                            ) :
                                                <NavLink to={routes.path} key={index} className={styles.route_link} onClick={toggleDrawer}>
                                                    <i className='fas fa-angle-right fa-sm' style={{marginRight:10,fontSize:11}}></i>
                                                    {routes.name}
                                                </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                    </div>
                </div>
                </Fragment>
                }
                <div className={styles.side_wrap}>
                    <div className={styles.sideNav}>
                        <aside>
                            <span className={styles.sub_routes_header} style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:20,fontWeight:"bold"}}>
                                Navigation
                                {/* <i className='fas fa-bars fa-sm' style={{marginRight:10, marginTop:10,fontSize:11}}></i> */}
                            </span>
                            <ul className={styles.nav_links}>
                                {
                                    routes?.map((routes, index) => {
                                        return (
                                            routes.hasOwnProperty("subRoute") ? (
                                                <Fragment key={index}>
                                                    <span className={styles.sub_routes_header} style={{display:"flex", flexDirection:"row", justifyContent:"space-between",marginTop:10, fontWeight:"bold"}}>
                                                        {routes.name}
                                                        {/* <i className='fas fa-cog fa-sm' style={{marginRight:10, marginTop:10,fontSize:11}}></i> */}
                                                    </span>
                                                    <ul className={styles.sub_routes}>
                                                        {routes.subRoute.map((subR, index) => {
                                                            return (
                                                                <NavLink to={subR.path} key={index} className={styles.sub_route_link}>
                                                                    <i className='fas fa-angle-right fa-sm' style={{marginRight:10,fontSize:11}}></i>
                                                                    {subR.name}
                                                                </NavLink>
                                                            )
                                                        })}
                                                    </ul>
                                                </Fragment>
                                            ) :
                                                <NavLink to={routes.path} key={index} className={styles.route_link}>
                                                    <i className='fas fa-angle-right fa-sm' style={{marginRight:10,fontSize:11}}></i>
                                                    {routes.name}
                                                </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className={styles.content}>
                <div className={styles.welcomeMsg}>
                    Good morning! John
                </div>

                    <Routes>
                        {
                            routes.map((routes, index) => {
                                return (
                                    !routes.hasOwnProperty("subRoute") ?
                                        <Route key={index} path={routes.path} element={routes.element} /> :
                                        routes.subRoute.map((subR, index) => {
                                            return (
                                                <Route key={index} path={subR.path} element={subR.element} />
                                            )
                                        })
                                )
                            })
                        }
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout