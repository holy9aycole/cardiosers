import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import Input from "../shared/Input";

const DashScanForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);

  const handleChangeImage = (e) => {
    const file = e.currentTarget.files[0];

    console.log({ file });
    setImage(file);
  };

  return (
    <div className="dash__container">
      <form
        className="dash__container__box dash__scan__form"
        onSubmit={onSubmit}
      >
        <figure className="dash__scan__image">
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChangeImage}
            required
          />
          <label htmlFor="image">
            {image == null ? null : (
              <img src={URL.createObjectURL(image)} alt="" />
            )}
            <AiFillCamera className={image == null ? "icon show" : "icon"} />
          </label>
          <span className="scan__image__warning">
            Only JPG, JPEG and PNG format are allowed
          </span>
        </figure>
        <div className="dash__scan__info">
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            required={true}
          />
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            required={true}
          />
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email (optional)"
          />
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Mobil Number (optional)"
          />
          <Input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            placeholder="Date of Birth"
          />
        </div>
        <button className="dash__scan__btn">Scan</button>
      </form>
    </div>
  );
};

export default DashScanForm;
