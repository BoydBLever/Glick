import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";


const Profile = () => {
    const [user, setUser] = useState({})
    const { email } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${email}/getByEmail`)
            .then(res => {
                console.log(res);
                setUser(res.data)}
                )
            .catch(err => console.error(err));
    }, [email]);

    // this.state = {
    //     username: Cookies.get('username')
    //  }
    console.log(Cookies.get('usertoken'));


    return (
        <>
        <h1>{email}</h1>
        </>
    )

    //  more code....
}

export default Profile;