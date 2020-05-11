import React from 'react';
import ReactSwipe from 'react-swipe';

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div className='swipe'>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className='p1'>
          <h1>NASA API</h1>
        </div>
        <div className='p1'>
          <h1>HOME BREWER CALCULATOR</h1>
        </div>
        <div className='p1'>
          <h1>GIVE AWAY APP</h1>
        </div>
      </ReactSwipe>
      <div className='swipe-nav'>
        <button onClick={() => reactSwipeEl.prev()}><i class="fas fa-chevron-left"></i></button>
        <button onClick={() => reactSwipeEl.next()}><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Carousel;