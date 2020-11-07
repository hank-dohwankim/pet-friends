import React, { useState } from "react";
import {Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileIcon() {
  const [account, setAccount] = useState();

  return (
    <div>
      <ul>
        <li>pet 1</li>
        <li>pet 2</li>
      </ul>
    </div>
  );
}
