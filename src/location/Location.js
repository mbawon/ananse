import React, { Fragment, useMemo, useState } from 'react'
import Pagination from '../components/pagination/Pagination';
import styles from './location.module.css'
import allStyles from '../assets/css/all-styles.module.css'

import testData from '../data.json'
import Header from '../components/header/Header';
import AlertModal from '../components/modal/AlertModal';
import RightModal from '../components/modal/RightModal';


let PageSize = 10;

const Location = ({ title = "Assigned Locations", pSize = 10, showHeader = true }) => {
    const [searching, setSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [locationList, setUserLists] = useState([]);
    const [updateTable, setUpdateTable] = useState(false);
    const [pageSize, setPageSize] = useState(pSize)
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [modalTitle, setModalTitle] = useState("Filter By User")


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        // if (searching) {
        //     return locationList.slice(firstPageIndex, lastPageIndex);
        // } else {
        //     return locationList.slice(firstPageIndex, lastPageIndex);
        // }
        return testData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, testData, updateTable]);

    const toggleModal = (mTitle = "Filter By User") => {
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
                            <select id="userId" name='userId' className={allStyles.input__control} required>
                            </select>
                            <label htmlFor='userId' className={allStyles.input__label}>Select User</label>
                        </div>

                        <button className={allStyles.input__btn}>Filter</button>
                    </form>
                </RightModal>
            }
            <div className={`${allStyles.card} ${styles.location}`} style={{ overflowX: "auto" }}>
                {showHeader &&
                    <Header title={title}>
                        <div className={allStyles.search__group}>
                            <input type="search" placeholder="Search" className={allStyles.search__input} />
                            <i className='fas fa-search fa-sm' style={{ position: "absolute", left: 7, top: 15 }}></i>
                        </div>
                        <button style={{ padding: "2px 5px", marginLeft:15 }} onClick={() => toggleModal()}>
                            <i className='fas fa-filter fa-sm'></i>
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
                            <th>
                                <input type="checkbox" /> 
                            </th>
                            <th>Region</th>
                            <th>Zone</th>
                            <th>Area Name</th>
                            <th>Assigned To</th>
                            <th>Assigned Date</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {currentTableData?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>{data.first_name}</td>
                                        <td>{data.last_name}</td>
                                        <td>{data.last_name}</td>
                                        <td>{data.last_name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <i className='fas fa-map-marker' style={{ cursor: "pointer", padding: "5px 7px", border: "1px solid grey", borderRadius: "100%" }}></i>
                                        </td>
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

export default Location