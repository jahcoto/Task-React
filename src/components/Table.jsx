import Task from "./Task";

const Table = ({list,columns, width='auto', height = 'auto'}) => {

    return (
        <div>
            {list.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                        {
                            columns.map((column, index) =>
                            <th key={index}>{column}</th>
                            )
                        }
                        </tr>
                  </thead>
                    <tbody>
                        {
                            list.map(task => (
                                <Task
                                    key={task.id} 
                                    task={task}
                                />
                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Table;