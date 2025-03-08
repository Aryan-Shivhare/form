import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  });
  function changeHandler (event) {
    const {name,value,type,checked} = event.target;
    setFormData((prev) => ({...prev, [name]:type==="checkbox" ? checked :value}) )
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally");
    console.log(formData);
  }
  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form className="space-y-2" onSubmit={submitHandler}>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="firstName">First name</label>
        <br/>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aryan"
          value={formData.firstName}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="lastName">Last name</label>
        <br/>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Shivhare"
          value={formData.lastName}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email address</label>
        <br/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Aryan@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="country">Country</label>
        <br/>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white"
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="streetAddress">Street address</label>
        <br/>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="city">City</label>
        <br/>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Indore"
          value={formData.city}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="state">State / Province</label>
        <br/>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Madhya Pradesh"
          value={formData.state}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <label className="text-sm font-medium leading-6 text-gray-900" htmlFor="postalCode">ZIP / Postal code</label>
        <br/>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="452001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <br/>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
          <div className="mt-4 space-y-2">
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="comments"
                  id="comments"
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="h-4 w-4 rounded"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label className="font-medium text-gray-900" htmlFor="comments">Comments</label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="candidates"
                  id="candidates"
                  checked={formData.candidates}
                  onChange={changeHandler}
                  className="h-4 w-4 rounded"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label className="font-medium text-gray-900" htmlFor="candidates">Candidates</label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  name="offers"
                  id="offers"
                  checked={formData.offers}
                  onChange={changeHandler}
                  className="h-4 w-4 rounded"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label className="font-medium text-gray-900" htmlFor="offers">Offers</label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="contents text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                name="pushNotifications"
                id="pushEverything"
                value="Everything"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushEverything">Everything</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="pushNotifications"
                id="pushEmail"
                value="Same as Email"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushEmail">Same as email</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="pushNotifications"
                id="pushNothing"
                value="No Push Notifications"
                onChange={changeHandler}
                className="h-4 w-4"
              />
              <label className="ml-3 text-sm font-medium leading-6 text-gray-900" htmlFor="pushNothing">No push notifications</label>
            </div>
          </div>
        </fieldset>
        <div className="my-3">
          <button className=" hover:bg-blue-700 font-bold rounded bg-blue-500 py-2 px-4 text-white">Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
