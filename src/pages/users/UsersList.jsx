import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/context";

const UsersList = () => {

    const {users, getAllUsers, profile, deleteUser} = useContext(AuthContext)

    useEffect(() => {
        getAllUsers()
    }, []);
    return (
        <div className="main">
            <div className="is-flex is-justify-content-end">
                <Link to="/dashboard/add-user" className="button is-success px-6 mb-6">افزودن کاربر</Link>
            </div>
            <table className="table is-fullwidth">
                <thead className="is-fullwidth">
                <tr>
                    <th>شماره</th>
                    <th>نام و نام خانوادگی</th>
                    <th>ایمیل</th>
                    <th>نقش</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.isAdmin ? "مدیر" : "نویسنده"}</td>
                        <td>
                            <Link to={`/dashboard/edit-user/${user.id}`} state={user}
                                  className="button is-info">ویرایش</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteUser(user.id)} className="button is-danger"
                                    disabled={!profile?.isAdmin}>حذف
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default UsersList