import "./BookingForm.css";
import { useState } from "react";
import React from "react";
const partyTypes = [
  {
    id: 0,
    name: "Tiệc sáng",
  },
  {
    id: 1,
    name: "Tiệc trưa",
  },
  {
    id: 2,
    name: "Tiệc tối",
  },
];
const locationTypes = [
  {
    id: 0,
    name: "Trong nhà",
  },
  {
    id: 1,
    name: "Ngoài trời",
  },
];
const ages = [
  {
    id: 0,
    name: "Dưới 18 tuổi",
  },
  {
    id: 1,
    name: "Từ 19 đến 34 tuổi",
  },
  {
    id: 2,
    name: "Trên 35 tuổi",
  },
];
const genders = [
  {
    id: 0,
    name: "Nam",
  },
  {
    id: 1,
    name: "Nữ",
  },
];

const options = ["Báo chí", "Đài phát thanh", "Tivi"];

export default function BookingForm() {
  const [numberOfGest, setNumberOfGest] = useState(null);
  const [date, setDate] = useState(null);
  const [partyType, setPartyType] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState(undefined);
  const [age, setAge] = useState(0);
  const [anotherReq, setAnotherReq] = useState(null);
  const [time, setTime] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };
  const [hide, setHide] = useState(0);

  return (
    <>
    <div className="container">
      <form
        action="booking"
        method="POST"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setTime(new Date().toLocaleString());
          setHide(1);
        }}
      >
        <div className="header">
          <h1>THÔNG TIN ĐẶT CHỖ</h1>
        </div>
        <div className="form_body">
          <div className="body_head form_body_group">
            <div>
              <label htmlFor="participant">
                Số khách tham dự bữa tiệc của quý khách:
              </label>
              <input
                type="text"
                id="participant"
                value={numberOfGest}
                onChange={(e) => setNumberOfGest(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time">Ngày</label>
              <input
                type="date"
                id="time"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="form_body_middle "> */}
          <div className="party form_body_group">
            <p>Loại tiệc: </p>
            {partyTypes.map((type) => (
              <div className="gap-5">
                <input
                  type="checkbox"
                  id={"party" + type.id}
                  name="kindParty"
                  value={type.id}
                  checked={type.id == partyType}
                  onChange={(event) => {
                    if (event.target.value == partyType) setPartyType(null);
                    else setPartyType(event.target.value);
                  }}
                />
                <label htmlFor={"party" + type.id}>{type.name}</label>
              </div>
            ))}
          </div>

          <div className="location form_body_group">
            <p>Địa điểm: </p>

            {locationTypes.map((type) => (
              <div className="gap-5">
                <input
                  type="radio"
                  id={"location" + type.id}
                  name="typeLocation"
                  value={type.id}
                  checked={type.id == location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
                <label htmlFor={"location" + type.id}>{type.name}</label>
              </div>
            ))}
          </div>

          <div className="info  form_body_group">
            <div>
              <label htmlFor="name">Tên quý khách: </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Địa chỉ liên lạc: </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="form_body_group form_body_group--flex">
            <div>
              <label htmlFor="age">Độ tuổi: </label>
              <select
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              >
                {ages.map((type) => (
                  <option value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="gap-5">
              <p>Giới tính: </p>
              {genders.map((type) => (
                <div className="gap-5">
                  <input
                    type="radio"
                    id={"gender" + type.id}
                    name="typeGender"
                    value={type.id}
                    checked={type.id == gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                  <label htmlFor={"gender" + type.id}>{type.name}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form_body_group gap-10 know-from">
            <label htmlFor="source">
              Quý khách biết đến nhà hàng của chúng tôi qua:{" "}
            </label>
            <select
              id="source"
              multiple
              value={selectedOptions}
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form_body_group">
            <label htmlFor="requirement form_body_group">
              Các yêu cầu khác của quý khách:
            </label>
            <textarea
              id="requirement"
              cols="30"
              rows="10"
              onChange={(e) => {
                setAnotherReq(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form_body_group">
            <button
              className="form_body_btn"
              type="submit"
            >
              Đặt chỗ
            </button>
          </div>
        </div>
      </form>

      {/* ============================================================================================ */}
      {hide === 1 ? (
        <div className="form_result   ">
          <div className="header">
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
          </div>
          <div className="form_result_body">
            <div className="form_body_group">
              <div>
                <h3>Thông tin khách hàng</h3>
                <p>
                  Họ tên: {name} - Độ tuổi: {ages[age].name} / Giới tính:{" "}
                  {genders[gender].name}
                </p>
              </div>

              <div>
                <p>Địa chỉ: {address}</p>
              </div>
            </div>
            <div className="form_body_group">
              <div>
                <h3>Thông tin đặt chỗ</h3>
                <p>
                  Số khách hàng tham gia buổi tiệc: {numberOfGest} - Ngày đặt
                  tiệc: {date}
                </p>
              </div>
              <div>
                <p>
                  Loại tiệc: {partyTypes[partyType].name} / Địa điểm:
                  {locationTypes[location].name}
                </p>
              </div>
            </div>

            <div className="form_body_group">
              <h3>Các yêu cầu kèm theo:</h3>
              <p>{anotherReq}</p>
            </div>

            <div className="form_body_group ">
              <p style={{ textAlign: "center" }}>
                <i>Quý khách biết đến nhà hàng chúng tôi qua:</i>{" "}
                {selectedOptions.join(", ")}
              </p>
              <center>
                Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc:{" "}
                {""}
                <b>{time}</b>
              </center>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
}
