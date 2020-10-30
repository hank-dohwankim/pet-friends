import React, { useState } from "react";
import {Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileIcon() {
  const [account, setAccount] = useState();

  return (
    <div>
      <Image
        src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
        alt=""
        className="img-thumbnail"
        fluid
      ></Image>
      <ul>
        <li>pet 1</li>
        <li>pet 2</li>
      </ul>
    </div>
  );
}
