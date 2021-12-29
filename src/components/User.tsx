import React from "react";

interface UserProps {
  feePerMessage: string;
  feePerConvo: string;
  name: string;
  title: string;
  description: string;
  user: any;
}

const User: React.FC<UserProps> = ({
  feePerMessage,
  feePerConvo,
  name,
  title,
  description,
  user,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="object-contain h-48 w-96"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Logan_Paul_%2848086619418%29.jpg/1200px-Logan_Paul_%2848086619418%29.jpg"
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col justify-center items-center pricetag">
        {feePerMessage}
      </div>
      <div className="flex flex-col justify-center items-center pricetag">
        {feePerConvo}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Pay to message
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Pay to start a convo
        </button>
      </div>
    </div>
  );
};

export default User;
