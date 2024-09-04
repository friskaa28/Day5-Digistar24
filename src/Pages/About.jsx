import React from 'react';
import { VisionAndMission } from '../constants/data';
import AboutHero from '../assets/images/tentangKami.webp';

export const About = () => {
  return (
    <div className='flex items-center py-24 justify-evenly'>
      <div className='space-y-12'>
        {VisionAndMission.map((item, index) => (
          <div key={item.title + index} className='space-y-2'>
            <h1 className='text-4xl font-bold text-[#444B55]'>{item.title}</h1>
            <ul
              className={`text-lg ${
                item.descriptions.length > 1 ? 'list-disc' : ''
              } w-[36rem] pl-12 text-[#444B55] space-y-4`}
            >
              {item.descriptions.map((desc, index) => (
                <li key={desc + index} className=''>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <img src={AboutHero} alt='About Hero' className='w-96' />
    </div>
  );
};
