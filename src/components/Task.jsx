const Task = ({task}) => {

    const { task_id, title, start_date, end_date, status, priority, description, created_at, user } = task;

    return ( 
        <tr key={task_id}>
            <td>{task_id}</td>
            <td>{title}</td>
            <td>{start_date}</td>
            <td>{end_date}</td>
            <td>{status}</td>
            <td>{priority}</td>
            <td>{description}</td>
            <td>{created_at}</td>
            <td>{user}</td>
        </tr>
        
     );
}
 
export default Task;