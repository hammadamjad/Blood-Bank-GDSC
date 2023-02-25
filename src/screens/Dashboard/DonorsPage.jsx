import React from 'react'
import Navbar from '../../components/Navbar'
import "../../assets/css/Requests.css"
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../utils/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
const DonorsPage = () => {

    const [authUser, setAuthUser] = React.useState(null);
    const [users, setUsers] = React.useState([])
    const navigate = useNavigate()
    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthUser(user);
                const users_requests = await getDocs(query(collection(db, 'Posts'), where("completed", "==", true)));
                users_requests.docs.map((item, i) => {
                    setUsers([...users, item.data()])
                })
            } else if (!user) {
                navigate("/login")
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);


    const submitBecomeDonor = () => {
        navigate("/donors")
    }

    return (
        <Navbar>
            <div className='container-fluid h-100 MainRequest'>


                <div className='container'>
                    <div className="TitleBar mt-4 mb-4  d-flex justify-content-between align-items-center">
                        <h1 className='Heading'>Donors</h1>
                        <div className="ProfileItems d-flex justify-content-around align-items-center">
                            <img src={require("../../assets/images/search.png")} alt="" />
                            <img src={require("../../assets/images/bell-icon.png")} alt="" />
                            <img src={require("../../assets/images/profile-avatar.png")} alt="" />
                            <span>Ujala Akmal</span>
                            <img src={require("../../assets/images/drop-down.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='container  d-flex justify-content-between align-items-center'>
                    <button className='btn-add' onClick={() => submitBecomeDonor()}>Become a Donor</button>
                </div>

                <div className='container h-75'>
                    <table class="styled-table">
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
                            {
                                users.map((item, i) => (
                                    <tr>
                                        <td></td>
                                        <td>{item.name}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.blood_type}</td>
                                        <td>{item.contact}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>



            </div>
        </Navbar>
    )
}

export default DonorsPage