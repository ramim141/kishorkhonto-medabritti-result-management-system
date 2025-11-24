import React from 'react';

const Committee = () => {
  const members = [
    { name: "নাবিল মাহমুদ নিলয়", role: "পরিচালক", img: "https://i.pravatar.cc/150?img=11" },
    { name: "আহসান হাবীব", role: "সহকারী পরিচালক", img: "https://i.pravatar.cc/150?img=13" },
    { name: "মুফাসসির আহমদ চৌধুরী", role: "সহকারী পরিচালক", img: "https://i.pravatar.cc/150?img=60" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a5d45] mb-10">কমিটি</h2>
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-6 transition bg-white shadow-md rounded-xl hover:shadow-lg">
            <div className="w-32 h-32 mb-4 overflow-hidden border-4 border-green-100 rounded-full">
              <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-[#1a5d45]">{member.name}</h3>
            <p className="text-[#d97706] font-medium mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;