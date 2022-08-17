const Created = ({usersNames}) => {
    return ( 
        <select className="created">
            <option value={0} key={0} selected> Select Created </option>
            {
                usersNames.map((user) => 
                    <option value={user.user_id} key={user.user_id}> { user.user_first_name + user.user_last_name } </option>
                )
            }  
        </select>
    );
}
 
export default Created;