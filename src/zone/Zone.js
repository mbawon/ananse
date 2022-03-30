import React, { Fragment, useMemo, useState } from 'react'
import Pagination from '../components/pagination/Pagination';
import styles from './zone.module.css'
import allStyles from '../assets/css/all-styles.module.css'

import testData from '../data.json'
import Header from '../components/header/Header';
import RightModal from '../components/modal/RightModal';
import AlertModal from '../components/modal/AlertModal';


let PageSize = 10;

const Zone = ({ title = "Zone List", pSize = 10, showHeader = true }) => {
    const [searching, setSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [zoneList, setUserLists] = useState([]);
    const [updateTable, setUpdateTable] = useState(false);
    const [pageSize, setPageSize] = useState(pSize)
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [modalTitle, setModalTitle] = useState("Creat Zone")


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        // if (searching) {
        //     return zoneList.slice(firstPageIndex, lastPageIndex);
        // } else {
        //     return zoneList.slice(firstPageIndex, lastPageIndex);
        // }
        return testData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, testData, updateTable]);

    const toggleModal = (mTitle = "Create Zone") => {
        setModalTitle(mTitle)
        setShowModal(!showModal)
    }

    const toggleAlert = () => {
        setShowAlert(!showAlert)
    }

    const handleInputForm = (e) => {
        e.preventDefault()
    }


    return (
        <Fragment>
            {showAlert &&
                <AlertModal toggleAlert={toggleAlert}>
                    <div style={{ padding: 15, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <i className='fas fa-info fa-2x'></i>
                        <br />
                        Are you sure, you want to delete this record?
                        <br />
                        <br />
                        <div>
                            <button style={{ padding: "5px 20px", color: "red" }}>Yes</button>
                            <span style={{ padding: "0 5px" }}></span>
                            <button style={{ padding: "5px 20px" }} onClick={toggleAlert} >No</button>
                        </div>
                    </div>
                </AlertModal>
            }
            {showModal &&
                <RightModal title={modalTitle} size={400} toggleModal={toggleModal}>
                    <form onSubmit={handleInputForm}>
                        <div className={allStyles.input__group}>
                            <select id="region" name='region' className={allStyles.input__control} required>
                            </select>
                            <label htmlFor='region' className={allStyles.input__label}>Region</label>
                        </div>
                        <div className={allStyles.input__group}>
                            <input type="text" id="zone" name='zone' className={allStyles.input__control} required />
                            <label htmlFor='zone' className={allStyles.input__label}>Zone</label>
                        </div>

                        <button className={allStyles.input__btn}>Save</button>
                    </form>
                </RightModal>
            }
            <div className={`${allStyles.card} ${styles.zone}`} style={{ overflowX: "auto" }}>
                {showHeader &&
                    <Header title={title}>
                        <div className={allStyles.search__group}>
                            <input type="search" placeholder="Search" className={allStyles.search__input} />
                            <i className='fas fa-search fa-sm' style={{ position: "absolute", left: 7, top: 15 }}></i>
                        </div>
                        <button style={{ padding: "0px 7px" }} onClick={() => toggleModal("Create Zone")}>
                            <i className='fas fa-plus'></i>
                        </button>
                    </Header>
                }
                {!showHeader &&
                    <div className={allStyles.card_header}>
                        <h4>{title}</h4>
                        <div className={allStyles.search__group}>
                            <input type="search" placeholder="Search" className={allStyles.search__input} />
                            <i className='fas fa-search fa-sm' style={{ position: "absolute", left: 7, top: 15 }}></i>
                        </div>
                    </div>
                }
                <div className={allStyles.card_body}>
                    <table>
                        <thead>
                            <th>#</th>
                            <th>Zone</th>
                            <th>Region</th>
                            <th>Created On</th>
                            <th>Created By</th>
                            {title === "Locations" &&
                                <th>Actions</th>
                            }
                            {title === "Zone List" &&
                                <th>Actions</th>
                            }
                        </thead>
                        <tbody>
                            {currentTableData?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{parseInt(index) + 1}</td>
                                        <td>{data.first_name}</td>
                                        <td>{data.last_name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.email}</td>
                                        {title === "Locations" &&
                                            <td>
                                                <i className='fas fa-map-marker' style={{ cursor: "pointer", padding: "5px 7px", border: "1px solid grey", borderRadius: "100%" }}></i>
                                            </td>
                                        }
                                        {title === "Zone List" &&
                                            <td>
                                                <i className='fas fa-edit' style={{ cursor: "pointer", fontSize: 8, padding: "5px 5px", border: "1px solid grey", borderRadius: "100%" }} onClick={() => toggleModal("Update Zone")}></i>
                                                <span style={{ padding: "0 5px" }}></span>
                                                <i className='fas fa-trash' style={{ cursor: "pointer", fontSize: 8, padding: "5px 5px", border: "1px solid grey", borderRadius: "100%" }} onClick={toggleAlert} ></i>
                                            </td>
                                        }
                                    </tr>

                                )
                            })
                            }
                        </tbody>

                    </table>
                </div>
                <Pagination
                    className={allStyles["pagination-bar"]}
                    currentPage={currentPage}
                    totalCount={searching ? testData.length : testData.length}
                    pageSize={pageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </Fragment>
    )
}

export default Zone