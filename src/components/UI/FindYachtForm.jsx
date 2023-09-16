import React from "react";
import "../../styles/find-yacht-form.css";
import "../../styles/find-yacht-form.css";
import { Form, FormGroup } from "reactstrap";

const FindYachtForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Number Of People" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Number of Cabins" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Number of Berth" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="motor">Motor</option>
            <option value="sail">Sail</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Search</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindYachtForm;
