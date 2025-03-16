import React from 'react';
import InfiniteScroll from './Infinitescroll';

const Skills = ({ items, title }) => {
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <h2 className="text-2xl font-bold text-white-800 mb-4">{title}</h2>
      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection='left'
        autoplay={true}
        autoplaySpeed={0.1}
        autoplayDirection="down"
        pauseOnHover={true}
      />
    </div>
  );
};

export default Skills;
