import React from 'react'

function ChildCard({item ,handleRemove ,idx}) {
    const{name ,image,email}= item
  return (
    <div className="w-60 bg-white mt-10 shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:shadow-2xl transition">
      <img 
        src={image}
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">{email}</p>
      <button 
        onClick={()=>handleRemove(idx)} 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  );
}
export default ChildCard