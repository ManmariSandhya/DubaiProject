import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Tables from '../../components/Tables/Tables';
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from "react-router-dom";
import { addData, dltdata, updateData } from '../../components/context/ContextProvider';
import { usergetfunc, deletfunc, exporttocsvfunc, importcsvfunc } from "../../services/Apis";
import Alert from 'react-bootstrap/Alert';
import "./home.css";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [userdata, setUserData] = useState([]);
  const [showspin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [price, setprice] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { useradd, setUseradd } = useContext(addData);
  const { update, setUpdate } = useContext(updateData);
  const { deletedata, setDLtdata } = useContext(dltdata);

  const navigate = useNavigate();

  const adduser = () => {
    navigate("/register");
  };

  // get user
  const userGet = async () => {
    const response = await usergetfunc(search, price, status, sort, page);
    if (response.status === 200) {
      setUserData(response.data.usersdata);
      setPageCount(response.data.Pagination.pageCount);
    } else {
      console.log("error for get user data");
    }
  };

  // user delete
  const deleteUser = async (id) => {
    const response = await deletfunc(id);
    if (response.status === 200) {
      userGet();
      setDLtdata(response.data);
    } else {
      toast.error("error");
    }
  };

 



  // pagination
  // handle prev btn
  const handlePrevious = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  // handle next btn
  const handleNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [search, price, status, sort, page]);

  return (
    <>
      <div className='hometop'>

        <div className="contain">
          
              <div className="dashboard ">
                <div className="search_add">
                  <div style={{ cursor: "pointer" }}>
                    <div className="operation">
                      <span onClick={adduser}> <i className="fa-solid fa-plus"></i>&nbsp; Add Service</span>
                    </div>
                           
                  </div>
                </div>
                
              </div>
           
            
              <div className="table-container">
                {useradd ? <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.name.toUpperCase()} Succesfully Added</Alert> : ""}
                {update ? <Alert variant="primary" onClose={() => setUpdate("")} dismissible>{update.name.toUpperCase()} Succesfully Update</Alert> : ""}
                {deletedata ? <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>{deletedata.name.toUpperCase()} Succesfully Delete</Alert> : ""}
                <div className='searchdesign'>
                  <div className="search">
                    <Form className="d-flex">
                      <div className="input-group custom-search-input ">

                        <Form.Control
                          type="search"
                          placeholder="Find your service here..."
                          className="custom-input" // Remove default border
                          aria-label="Search"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <Button className="search_btn custom-btn">
                        <span className="input-group-text bg-transparent border-0">
                          <i className="fas fa-search " ></i>
                        </span>
                      </Button>
                     

                    </Form>
                    
                    <br></br>
                  </div>
                </div>
                <hr></hr>

                {showspin ? <Spiner /> : <Tables
                  userdata={userdata}
                  deleteUser={deleteUser}
                  userGet={userGet}
                  handlePrevious={handlePrevious}
                  handleNext={handleNext}
                  page={page}
                  pageCount={pageCount}
                  setPage={setPage}
                />}
              </div>
            </div>
         
        
      </div>
    </>
  );
}

export default Home;



