import { useEffect, useState } from "react";
import axios from "axios";

import Table from './Table';

const List = () => {

    let taskList = "Hola";

    const [ tasks, setTasks ] = useState({})
    


    async function getUserName() {
        const config = {
            method: "get",
            url: "http://localhost:4000/api/users/get-names",
        };
        let res = await axios(config);
        let users = res.data.results;
        let select = document.getElementById("created");
        let option = document.createElement("option");
        option.text = "";
        option.value = 0;
        select.add(option);
        for (let i = 0; i < users.length; i++) {
            let option = document.createElement("option");
            option.text = users[i].user_first_name + " " + users[i].user_last_name;
            option.value = users[i].user_id;
            select.add(option);
        }
    }

    async function getTaskList() {
        const config = {
            method: "get",
            url: "http://localhost:4000/api/tasks",
        };

        let res = await axios(config);
        let tasks = res.data.results;

        let task_count = tasks.length;
        setTasks(tasks);
    }

     
    useEffect(() => {
        getTaskList();
    }, []);

    const columns = ['id', 'title', 'Start Date', 'End Date', 'status', 'Priority', 'description', 'created', 'user'];

    return (
        <div className='box'>
            <div id="tasksContainer">
                <Table
                    list={tasks}
                    columns={columns}
                />
            </div>
        </div>
    );
}

export default List;