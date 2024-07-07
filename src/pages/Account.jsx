import { useRef, useState } from "react";
import NavBar from "../sharedComponent/NavBar";
import SideBar from "../sharedComponent/SideBar/SideBar";
import profile from "../assets/picture.png";

const Account = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // console.log(event.target.files);
    // const file = event.target.files[0];
    const files = event.target.files;
    setSelectedFile(Array.from(files));
  };
  //   console.log(selectedFile);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="xl:ml-96 m-2 lg:flex xl:flex-col lg:gap-2">
        <section className="dark:bg-[#121212] my-4 p-4 w-3/4 lg:w-2/4 mx-auto">
          <img src={profile} alt="" />
          <h3>Jonathan</h3>
          <p>Los Angeles USA</p>
          <p>CEO - Growth Hub</p>
          <div className="divider"></div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
          <button className="btn" onClick={handleButtonClick}>
            Upload picture
          </button>
          {/* {selectedFile && <p>Selected file: {selectedFile.name}</p>} */}
          {selectedFile?.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </section>
        <section className="dark:bg-[#121212] p-2 md:w-3/4 lg:w-2/4 mx-auto mt-4">
          <section className="flex flex-col my-2 relative">
            <label
              htmlFor="First Name"
              className="absolute -top-3 px-2 bg-[#121212]"
            >
              First Name*
            </label>
            <input className="border p-2" type="text" name="" id="" />
          </section>
          <section className="flex flex-col my-3 relative">
            <label
              htmlFor="Last Name"
              className="absolute -top-3 px-2 bg-[#121212]"
            >
              Last Name*
            </label>
            <input className="border p-2" type="text" name="" id="" />
          </section>
          <section className="flex flex-col my-2 relative">
            <label
              htmlFor="Email"
              className="absolute -top-3 px-2 bg-[#121212]"
            >
              Email
            </label>
            <input className="border p-2" type="email" name="" id="" />
          </section>
          <section className="flex flex-col my-3 relative">
            <label
              htmlFor="Country"
              className="absolute -top-3 px-2 bg-[#121212]"
            >
              Country*
            </label>
            <input className="border p-2" type="text" name="" id="" />
          </section>
          <section className="flex flex-col">
            <label htmlFor="Select a state" className="text-left">
              Select a State*
            </label>
            <select className="select select-bordered w-full max-w-xs mt-2">
              <option>Bangladesh</option>
              <option>India</option>
              <option>Nepal</option>
              <option>Bhutan</option>
              <option>Myanmar</option>
              <option>Pakistan</option>
              <option>China</option>
              <option>Afghanistan</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Syria</option>
              <option>Turkiya</option>
              <option>Palestine</option>
            </select>
          </section>
          <section className="text-left">
            <button className="btn bg-[#5048E5] my-2">Save Details</button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Account;
