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
          <Button  ><span className="post-span">New Post</span></Button>
        </Link>
        </div>
    )
}

export default Post
