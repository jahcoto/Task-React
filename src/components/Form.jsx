import { useState, useEffect } from 'react';
import axios from "axios";

import Created from './Created';

const Form = () => {
    const [tittle, settitle] = useState("");
    const [created, setcreated] = useState("");
    const [start_date, setstart_date] = useState(new Date());
    const [final_date, setfinal_date] = useState(new Date());
    const [radio, setradio] = useState(false);
    const [select, setselect] = useState("");
    const [description, setdescription] = useState("");


    const [ usersNames, setusersNames ] = useState([]);

    async function getUserName() {
        const config = {
          method: "get",
          url: "http://localhost:4000/api/users/get-names",
        };
      
        let res = await axios(config); 
        let users = res.data.results;

        console.log(users);

        setusersNames(users);

        console.log(usersNames);

        /* 
        <Created
                        user={usersNames}
                    />
        */
      }

    useEffect(() => {
        getUserName();
    }, []);


    return (
        <div className='box'>
            <form>
                <label className="Task">Task</label>
                <div className="information">
                    <label htmlFor="title">Title: </label>
                    <p><input type="text" className="titlebox" name="title" size="30" value={tittle} onChange={e => settitle(e.target.value)} /></p>
                    <label htmlFor="description">Description: </label>
                    <textarea className="description" value={description} onChange={e => setdescription(e.target.value)} ></textarea>
                    <label htmlFor="option">Created by:</label>
                    <Created
                        usersNames={usersNames}
                    />
                    
                    
                    <label htmlFor="start_date">Start date: </label>
                    <input className="start_date" type="date" name="start_date" min="2022-01-01" value={start_date} onChange={e => setstart_date(e.target.value)} />
                    <label htmlFor="final_date">Final date:</label>
                    <input className="final_date" type="date" name="final_date" min="2022-01-01" value={final_date} onChange={e => setfinal_date(e.target.value)} />
                    <label htmlFor="radio">Priority:</label>
                    <p>
                        <input type="radio" name="color" value="green" className="radio" />Green
                        <input type="radio" name="color" value="yellow" className="radio" />Yellow
                        <input type="radio" name="color" value="red" className="radio" />Red
                    </p>
                    <label htmlFor="select">Status:</label>
                    <select className="select" name="select" value={select} onChange={e => setselect(e.target.value)} >
                        <option value="value1">In progres</option>
                        <option value="value2" selected>In review</option>
                        <option value="value3">Approved</option>
                        <option value="value3">Archived</option>
                    </select>
                    <button type="submit" className="addTaskButton">+</button>

                </div>
            </form>
        </div>
    );
}

export default Form;