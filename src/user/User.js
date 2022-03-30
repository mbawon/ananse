import React, { Fragment, useMemo, useState } from 'react'
import Pagination from '../components/pagination/Pagination';
import styles from './user.module.css'
import allStyles from '../assets/css/all-styles.module.css'

import testData from '../data.json'
import Header from '../components/header/Header';
import RightModal from '../components/modal/RightModal';
import AlertModal from '../components/modal/AlertModal';
import { useNavigate } from 'react-router-dom';


let PageSize = 10;

const User = ({ title = "User List", pSize = 10, showHeader = true }) => {
    const [searching, setSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [userList, setUserLists] = useState([]);
    const [updateTable, setUpdateTable] = useState(false);
    const [pageSize, setPageSize] = useState(pSize)
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [modalTitle, setModalTitle] = useState("Creat User")

    const navigate = useNavigate()


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        // if (searching) {
        //     return userList.slice(firstPageIndex, lastPageIndex);
        // } else {
        //     return userList.slice(firstPageIndex, lastPageIndex);
        // }
        return testData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, testData, updateTable]);

    const toggleModal = (mTitle = "Create User") => {
        setModalTitle(mTitle)
        setShowModal(!showModal)
    }

    const toggleAlert = () => {
        setShowAlert(!showAlert)
    }

    const handleInputForm = (e) => {
        e.preventDefault()
    }

    const gotToAreas = () => {
        navigate("/assign-areas")
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
                            <input type="text" id="fullName" name='fullName' className={allStyles.input__control} required />
                            <label htmlFor='fullName' className={allStyles.input__label}>Full Name</label>
                        </div>
                        <div className={allStyles.input__group}>
                            <input type="text" id="Username" name='Username' className={allStyles.input__control} required />
                            <label htmlFor='Username' className={allStyles.input__label}>Username</label>
                        </div>
                        <div className={allStyles.input__group}>
                            <input type="text" id="emailAddress" name='emailAddress' className={allStyles.input__control} required />
                            <label htmlFor='emailAddress' className={allStyles.input__label}>Email Address</label>
                        </div>

                        <div className={allStyles.row}>
                            <div className={`${allStyles.input__group} ${allStyles.col_50}`}>
                                <select id="role" name='role' className={allStyles.input__control} required>
                                </select>
                                <label htmlFor='role' className={allStyles.input__label}>Role</label>
                            </div>

                            <div className={`${allStyles.input__group} ${allStyles.col_50}`}>
                                <select id="status" name='status' className={allStyles.input__control} required>
                                </select>
                                <label htmlFor='status' className={allStyles.input__label}>Status</label>
                            </div>
                        </div>


                        <button className={allStyles.input__btn}>Save</button>
                    </form>
                </RightModal>
            }
            <div className={`${allStyles.card} ${styles.user}`} style={{ overflowX: "auto" }}>
                {showHeader &&
                    <Header title={title}>
                        <div className={allStyles.search__group}>
                            <input type="search" placeholder="Search" className={allStyles.search__input} />
                            <i className='fas fa-search fa-sm' style={{ position: "absolute", left: 7, top: 15 }}></i>
                        </div>
                        <button style={{ padding: "0px 7px" }} onClick={() => toggleModal("Create User")}>
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
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Actions</th>
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
                                        <td>{data.email}</td>
                                        <td>
                                            <i className='fas fa-edit' title='Edit user' style={{ cursor: "pointer", fontSize: 8, padding: "5px 5px", border: "1px solid grey", borderRadius: "100%" }} onClick={() => toggleModal("Update User")}></i>
                                            <span style={{ padding: "0 5px" }}></span>
                                            <i className='fas fa-trash' title='Delete user' style={{ cursor: "pointer", fontSize: 8, padding: "5px 5px", border: "1px solid grey", borderRadius: "100%" }} onClick={toggleAlert} ></i>
                                            <span style={{ padding: "0 5px" }}></span>
                                            <i className='fas fa-map-marker' title='Assign user areas' style={{ cursor: "pointer", fontSize: 8, padding: "5px 5px", border: "1px solid grey", borderRadius: "100%" }} onClick={gotToAreas} ></i>
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

export default User