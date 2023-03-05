import React from "react";
import Navbar from "../../components/Navbar";
import "../../assets/css/Requests.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
const Requests = () => {
  const [requestForm, setRequestForm] = React.useState({
    hospital: "",
    blood: "",
    time_posted: Date.now(),
    note: "",
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const [authUser, setAuthUser] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setAuthUser(user);
        const users_requests = await getDocs(
          query(collection(db, "Posts"), where("completed", "==", false))
        );
        setUsers([]);
        users_requests.docs.map((item, i) => {
          setUsers([...users, item.data()]);
        });
      } else if (!user) {
        navigate("/login");
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const submitData = async () => {
    const uid = authUser.uid;
    await setDoc(doc(db, "Posts"), {
      ...requestForm,
      uid: uid,
      completed: false,
    })
      .then((res) => {
        setIsVisible(false);
      })
      .catch((err) => {});
  };

  return (
    <Navbar>
      <div className="container-fluid h-100 MainRequest">
        <div className="container">
          <div className="TitleBar mt-4 mb-4  d-flex justify-content-between align-items-center">
            <h1 className="Heading">Donation Requests</h1>
            <div className="ProfileItems d-flex justify-content-around align-items-center">
              <img src={require("../../assets/images/search.png")} alt="" />
              <img src={require("../../assets/images/bell-icon.png")} alt="" />
              <img src={require("../../assets/images/profile-avatar.png")} alt="" />
              <span>Ujala Akmal</span>
              <img src={require("../../assets/images/drop-down.png")} alt="" />
            </div>
          </div>
        </div>
        <div className="container  d-flex justify-content-between align-items-center">
          <button className="btn-add" onClick={() => setIsVisible(true)}>
            + ADD
          </button>
        </div>

        <div className="container h-75">
          <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Blood Type</th>
                <th>Phone</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                  <td></td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.blood_type}</td>
                  <td>{item.contact}</td>
                  {/* <td>{item.time_posted}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isVisible && (
          <div className="moodle-add-request d-flex flex-column">
            <div className="d-flex flex-column mt-2 moodle-single-get">
              <label>Enter Hospital</label>
              <input
                type={"text"}
                placeholder="Enter Hospital"
                value={requestForm.hospital}
                onChange={(e) => setRequestForm({ ...requestForm, hospital: e.target.value })}
              />
            </div>
            <div className="d-flex flex-column  mt-2 moodle-single-get">
              <label>Blood Group</label>
              <input
                type={"text"}
                placeholder="Enter Blood Group"
                value={requestForm.blood}
                onChange={(e) => setRequestForm({ ...requestForm, blood: e.target.value })}
              />
            </div>
            <div className="d-flex flex-column mt-2 moodle-single-get">
              <label>Date</label>
              <input
                type={"date"}
                value={requestForm.time_posted}
                onChange={(e) => setRequestForm({ ...requestForm, time_posted: e.target.value })}
              />
            </div>
            <div class="dropdown mt-2 d-flex flex-column">
              <label>Type</label>
              <button
                class="btn btn-secondary dropdown-toggle bg-white text-black"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Application Type
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column mt-2 moodle-single-get ">
              <label>Note</label>
              <input
                className="moodle-note"
                type={"text"}
                value={requestForm.note}
                onChange={(e) => setRequestForm({ ...requestForm, note: e.target.value })}
              />
            </div>
            <div className="d-flex justify-content-around align-items-center h-100">
              <button className="cancel-moodle-btn" onClick={() => setIsVisible(false)}>
                Cancel
              </button>
              <button className="submit-moodle-btn" onClick={() => submitData()}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default Requests;
