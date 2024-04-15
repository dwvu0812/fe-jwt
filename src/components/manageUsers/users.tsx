import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./users.scss";
import { fetchUsers } from "../../services/userService";
import ReactPaginate from "react-paginate";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    console.log("Check ~ handlePageClick ~ event:", event.selected);
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    fetchUsers(currentPage, 1)
      .then((res) => {
        if (res && res.status == 200) {
          setUsers(res.data.data.users);
          setPageCount(res.data.data.totalPages);
        }
      })
      .catch((err) => {
        console.log("Check ~ useEffect ~ err", err);
      });
  }, [currentPage]);

  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (!session) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="manage-users-container container">
      <div className="user-header">
        <div className="title">
          <h3>Table Users</h3>
        </div>
        <div className="actions">
          <button className="btn btn-success">Refresh</button>
          <button className="btn btn-primary">Add new user</button>
        </div>
      </div>
      <div className="user-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Group</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user?.Group?.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="user-footer">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Users;
