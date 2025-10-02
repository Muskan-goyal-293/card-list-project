import React, { useState } from "react";

function Form({ handleUser }) {
  let [value, SetValue] = useState({ name: "", email: "", image: "" });
  function HandleForm(e) {
    e.preventDefault();
    handleUser(value);
    SetValue({ name: "", email: "", image: "" });
  }

  return (
    <div>
      <form onSubmit={HandleForm} className="flex  gap-2  items-center justify-center p-4 rounded-md shadow-md">
  <input
    type="text"
    placeholder="Name"
    value={value.name}
    onChange={(e) => SetValue({ ...value, name: e.target.value })}
    className="p-2 border rounded"
  />
  <input
    type="email"
    placeholder="Email"
    value={value.email}
    onChange={(e) => SetValue({ ...value, email: e.target.value })}
    className="p-2 border rounded"
  />
  <input
    type="text"
    placeholder="Image URL"
    value={value.image}
    onChange={(e) => SetValue({ ...value, image: e.target.value })}
    className="p-2 border rounded"
  />
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Submit
  </button>
</form>
    </div>
  );
}

export default Form;
