import React,{useContext} from 'react'
import AppContext from '../../context';
import { Col, Table, Button } from "reactstrap";

import { Link } from "react-router-dom";

const Post = () => {
    const {user} = useContext(AppContext)
    return (
        <div>
            <Link
          to={`/dashboard/create/${user.username}}`}
          style={{ textDecoration: "none" }}
        >
          <Button>New Post</Button>
        </Link>
        </div>
    )
}

export default Post
