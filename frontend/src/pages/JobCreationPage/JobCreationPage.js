import React, { useState } from "react";
import CustomTitle from "../../utils/CustomTitle";
import "./JobCreationPage.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function JobCreationPage() {
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async () => {
    if (role === "") {
      alert("Please enter a role");
      return;
    }
    if (phone === "") {
      alert("Please enter a phone number");
      return;
    }
    if (email === "") {
      alert("Please enter an email");
      return;
    }
    if (description === "") {
      alert("Please enter a description");
      return;
    }
    if (location === "") {
      alert("Please enter a location");
      return;
    }
    if (tags === "") {
      alert("Please enter tags");
      return;
    }

    let data = {
      role: role,
      phone: phone,
      email: email,
      description: description,
      location: location,
      tags: tags.split(","),
      createdAt: new Date().toISOString(),
    };
    console.log(data);
    handleReset();
  };
  const handleReset = () => {
    setRole("");
    setPhone("");
    setEmail("");
    setDescription("");
    setLocation("");
    setTags("");
  };
  return (
    <>
      <CustomTitle title="Add Job" />
      <div className={"registration__container"}>
        <div className={"registration__heading"}>ADD JOB</div>
        <div className={"registration__form"}>
          <div className={"registration__form__section"}>
            <div className={"registration__form__section__heading"}>
              Job Details
            </div>
            <div className={"registration__form__section__fields"}>
              <div className={"registration__form__section__field"}>
                <div className={"registration__form__section__field__label"}>
                  Role*
                </div>
                <div className={"registration__form__section__field__input"}>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={"registration__form__section__field"}>
                <div className={"registration__form__section__field__label"}>
                  Email*
                </div>
                <div className={"registration__form__section__field__input"}>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={"registration__form__section__field"}>
                <div className={"registration__form__section__field__label"}>
                  Phone Number*
                </div>
                <div className={"registration__form__section__field__input"}>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"registration__form__section"}>
            <div className={"registration__form__section__heading"}>
              Job Role Details
            </div>
            <div className={"registration__form__section__fields_academic"}>
              <div
                className={"registration__form__section__fields_academic_rows"}
              >
                <div className={"registration__form__section__field"}>
                  <div className={"registration__form__section__field__label"}>
                    Description*
                  </div>
                  <div className={"registration__form__section__field__input"}>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="7"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className={"registration__form__section__field"}>
                  <div className={"registration__form__section__field__label"}>
                    Location*
                  </div>

                  <div className={"registration__form__section__field__input"}>
                    <textarea
                      name="location"
                      id="bio"
                      cols="30"
                      rows="7"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className={"registration__form__section__field"}>
                  <div className={"registration__form__section__field__label"}>
                    Tags*
                  </div>
                  <div className={"registration__form__section__field__input"}>
                    <textarea
                      name="tags"
                      id="tags"
                      cols="30"
                      rows="7"
                      value={tags}
                      onChange={(e) => {
                        setTags(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"registration__form__register"}>
            <div
              className={"registration__form__register__button"}
              onClick={() => {
                handleSubmit();
              }}
            >
              Register <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCreationPage;
