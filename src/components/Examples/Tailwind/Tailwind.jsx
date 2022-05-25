import React from 'react';

const Tailwind = ({ homes }) => {
  console.log(homes.length);
  return (
    <ul className="divide-y divide-gray-200">
      {
        homes?.map?.((home, i) => {
          return (
            <li className="py-4 flex" key={i}>
              <img className="h-10 w-10 rounded-full" src={home.img.src} alt=""/>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{home.name}</p>
                <p className="text-sm text-gray-500">{home.name}</p>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Tailwind;
