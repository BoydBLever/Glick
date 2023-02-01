import Cookies from 'js-cookie';
import FileBase64 from 'react-file-base64';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";


const Profile = () => {
    const [user, setUser] = useState({})
    const [img, setImg] = useState({});
    const { email } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getByEmail/${email}`)
            .then(res => {
                console.log(res);
                setUser(res.data)
            }
            )
            .catch(err => console.error(err));
    }, [email]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateUser/' + email, img)
            .then(res => {
                console.log(res)
                // navigate("/")
            })
            .catch(err => {
                console.log(err);
                // setErrors(err.response.data.errors);
            })
    }


    const image = JSON.stringify(img)


    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <FileBase64
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => setImg({ img: base64 })} />
                <button >submit</button>
            </form>

            <h1>{user.img}</h1>

            <img className="activator" style={{ width: '100%', height: 300 }} src={user.img} />
            {/* <img className="activator" style={{ width: '100%', height: 300 }} src={{ uri: `data:image/jpg;base64,${img}` }} /> */}
        </>
    )

    //  more code....
}

export default Profile;