import React, { useEffect } from 'react'
import "../assets/css/Dashboard.css"
import { onAuthStateChanged } from 'firebase/auth';
import { PieChart, Pie, Cell, } from 'recharts';
import { BarChart, Bar, XAxis, CartesianGrid, } from 'recharts';
import BloodName from '../components/BloodName';
import Donors from '../components/Donors';
import NavBar from '../components/Navbar';
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import GoogleMapReact from 'google-map-react'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 600 },
    { name: 'Group C', value: 200 },
];


const data2 = [
    {
        name: 'Aug',
        pv: 150,
        amt: 0,
    },
    {
        name: 'Sep',
        pv: 190,
        amt: 2210,
    },
    {
        name: 'Oct',
        pv: 100,
        amt: 2290,
    },
    {
        name: 'Nov',
        pv: 90,
        amt: 2000,
    },

];

const COLORS = ["#EA9D7D", "#C82833", "#BDBDBD"];


const Dashboard = () => {

    const [authUser, setAuthUser] = React.useState(null);
    const navigate = useNavigate()
    React.useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                navigate("/login")
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);
    return (
        <NavBar >

            <div className='MainCon d-flex flex-column justify-content-around h-100 p-2 pe-3'>
                <div className="TitleBar m-4 d-flex justify-content-between align-items-center">
                    <h1 className='Heading'>Dashboard</h1>
                    <div className="ProfileItems d-flex justify-content-around align-items-center">
                        <img src={require("../assets/images/search.png")} alt="" />
                        <img src={require("../assets/images/bell-icon.png")} alt="" />
                        <img src={require("../assets/images/profile-avatar.png")} alt="" />
                        <span>Ujala Akmal</span>
                        <img src={require("../assets/images/drop-down.png")} alt="" />
                    </div>
                </div>
                <div className='container-fluid flex-wrap d-flex justify-content-around align-items-center'>
                    <div className='ContainerOne p-3 m-3 d-flex justify-content-center flex-column align-items-center' style={{ boxShadow: "rgb(158 158 158) 0px 1px 5px " }}>
                        <p className='fs-4 w-100 text-left'  >Requested</p>
                        <PieChart width={100} height={100}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={50}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className='w-100'>
                            <p className='fs-5 m-0 w-100 text-left'>Total</p>
                            <p className='fs-4 m-0 w-100 text-left'><strong className='TotalNum'>20</strong></p>
                        </div>
                    </div>
                    <div className='ContainerOne p-3 m-3 d-flex justify-content-center flex-column align-items-center' style={{ boxShadow: "rgb(158 158 158) 0px 1px 5px " }}>
                        <p className='fs-4 w-100 text-left'  >Received</p>
                        <PieChart width={100} height={100}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={50}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className='w-100'>
                            <p className='fs-5 m-0 w-100 text-left'>Total</p>
                            <p className='fs-4 m-0 w-100 text-left'><strong className='TotalNum'>20</strong></p>
                        </div>
                    </div>
                    <div className='ContainerOne p-3 pt-1 m-3' style={{ boxShadow: "rgb(158 158 158) 0px 1px 5px " }}>
                        <p className='fs-4 w-100 text-left'  >Unit status</p>
                        <div className='w-100 d-flex justify-content-between align-items-center'>
                            <p className='w-100 text-left'  >Blood</p>
                            <p className='w-100 text-end'  >Location</p>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <BloodName name="A+" />
                                <BloodName name="A+" />
                                <BloodName name="A+" />
                                <BloodName name="A+" />
                                <BloodName name="A+" />
                                <BloodName name="A+" />


                            </div>
                        </div>
                        <p className='w-100 text-center'  >See full list</p>
                    </div>
                    <div className='ContainerTwo m-3 p-3 d-flex justify-content-center align-items-center flex-column' style={{ boxShadow: "rgb(158 158 158) 0px 1px 5px " }}>
                        <p className='fs-4 w-100 text-left'  >Donation Stats</p>

                        <BarChart
                            width={180}
                            height={150}
                            data={data2}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            {/* <YAxis /> */}
                            <Bar barSize={10} dataKey="pv" fill="#C82833" />
                        </BarChart>
                    </div>
                </div>
                <div className='container-fluid '>
                    <div className='row'>

                        <div className='col-md-12 col-lg-4 col-sm-12 overflow-auto'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p>Recent Donors</p>
                                <img src={require("../assets/images/more-vertical.png")} alt="asda" />
                            </div>
                            {/* here starts the donors */}
                            <Donors />
                            <Donors />
                            <Donors />

                        </div>
                        <div className='col-md-12 col-lg-8 col-sm-12 d-flex justify-content-center align-items-center' style={{ boxShadow: "rgb(158 158 158) 0px 1px 5px ", borderRadius: 10 }}>
                            <iframe className='' style={{ width: "95%", height: "95%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.0323037660746!2d-79.07416289999999!3d43.082816199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34307412d7ae9%3A0x29be1d1e689ce35b!2sNiagara%20Falls!5e0!3m2!1sen!2s!4v1677175915435!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: '' }}></GoogleMapReact> */}
                        </div>
                    </div>
                </div>
            </div>
        </NavBar>
    )
}

export default Dashboard