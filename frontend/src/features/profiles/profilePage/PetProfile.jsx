import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function petProfile() {
  return (
    <div>
      <Row>
        <Image
          src="https://lh3.googleusercontent.com/Oav5KxW47OdeEVrAeah3Vf2AUcZmETCBtYafrLbfdW3AtAh9sK7GFAiKz-lyeKNkzC13mEzxzBJAhqQ45_e7dnQnpzb2n9e6cMXuyk7ydva2Yer7NS6bwlJoqnTK1jHF073xk7UR4VehvFO4FXu-zYzKTD9QNmQY8Twawk7lLYXHsNYhqo7OAp9LTD7TyrGsmQou_0wCzoxOBEb84TA_L3TGw9jxuhnf-YQjCcytCHAMSu2eDpOBJIZul5VHkhZTZ617rMSmE-KdzMpA_50GbABMaj4mYsbZ26gM3MDZZk_5ipAwTe7_aiZQkJpO1wASRJo5o1XvPS8JWXD2CvNDjowV4NKZEujtMGMkR1SK5Wp-cJRTg7lsVhdV3e09lujI8QMhiDOyuM1q4R3-hUuWDMQgEA3jYCAOqBp097gCIWj3SFAQzTuf5oEYYGEcXtCbBsERCRmmpSsjUlyi3wRc2K_tOoiLTY4Vg63_LdADXz9WrG9rsuq-yzHsfWpZJySlBCZsGetLd33q6yROMFXZ1HMe33CsJJtmOk343kvV4RMz2ZphZop9Pfe4jqcab_eFqoaPqB7s9Cje52KoDYZS1GKEuDuW4kZsam5B4wejzpDrVq01iAyWzkTaoviyhMRTuIg67cemte16AXNLXi0KOlAajNmH0duXm13CH6w6KTAiUtWFp_rqCsnpcyYPww=s969-no?authuser=0"
          alt="Pet Profile"
          className="w-25 p-3"
        />
        <Col>
          <h1>Name: </h1>
          <p>Location: </p>
        </Col>
      </Row>
    </div>
  );
}
