import React from "react";

export default function Form({value, setValue, handlesubmit}) {
  const handleChange = (e) => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handlesubmit} className="flex pt-2">
        <input
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
          type="text"
          name="value"
          style={{ flex: "10", padding: "5px" }}
          placeholder="해야 할 일을 입력 하세요"
          value={value}
          onChange={handleChange}
        />
        <input
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
          type="submit"
          value="입력"
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
}
