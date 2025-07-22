

// function ProductViewer() {
//   return (
//     <div className="viewer-wrapper max-w-50 mx-0  my-auto text-center bg-amber-200">
//       <model-viewer
//         src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"  // Replace with your 3D model
//         alt="A 3D model of a mango"
//         auto-rotate
//         camera-controls
//         ar
//         shadow-intensity="1"
//         style={{ width: '100%', height: '400px' }}
//       ></model-viewer>

//       <div className="product-details bg-[#fefefe] p-5 border-2">
//         <h2>Organic Mango</h2>
//         <p>⭐⭐⭐⭐☆ (4.6)</p>
//         <p>Farm fresh, chemical-free mango grown with love in natural soil.</p>
//       </div>
//     </div>
//   );
// }

// export default ProductViewer;


import React, { useRef } from 'react';

function ProductViewer() {
  const viewerRef = useRef(null);

  const rotate = (direction) => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const orbit = viewer.getCameraOrbit();
    const delta = direction === 'left' ? -10 : 10;
    const newTheta = orbit.theta + (delta * Math.PI / 180);
    viewer.cameraOrbit = `${newTheta}rad ${orbit.phi}rad ${orbit.radius}m`;
  };

  return (
    <div className="w-full mx-auto p-4 flex flex-col md:flex-row text-center md:text-left">
      <div className="w-full md:w-6/12">
      <model-viewer
        ref={viewerRef}
        src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        className="w-full h-[300px] md:h-[450px] rounded-lg bg-green-300"
      >
      </model-viewer>

      <div className="my-4 flex justify-center gap-6">
        <button
          onClick={() => rotate('left')}
          className="px-4 md:px-5 py-4 text-xl cursor-pointer font-bold bg-green-400 hover:bg-green-500 text-white rounded transform hover:scale-105 transition-transform duration-200"
        >
          &lt;
        </button>
        <button
          onClick={() => rotate('right')}
          className="px-4 md:px-5 py-4 text-xl cursor-pointer font-bold bg-green-400  hover:bg-green-500 text-white rounded transform hover:scale-105 transition-transform duration-200"
        >
          &gt;
        </button>
      </div>
      </div>

      <div className="w-full md:w-6/12 p-10 text-left gap-1">
        <div className='md:flex justify-between w-full'>
        <h1 className="text-3xl md:text-4xl font-bold">Organic Avocado</h1>
        <p><span className='font-bold text-md'>Weight :</span> 500g</p>
        </div>
        <p className="text-yellow-500 text-lg mb-6">⭐⭐⭐⭐☆ (4.6)</p>
        <p className="mt-2 text-gray-700 mb-2 text-justify md:text-lg">
          Fondly known as 'butter fruit', Avocado is on almost every millennial's shopping list. Versatile & delicious- this fruit can be used for all meals in the day!  Storage Tip: Store it in a brown paper bag and place it next to your bananas. The bananas will release a gas known...
        </p>
        <p className='font-bold text-lg md:text-2xl'>Rs. 150</p>
        <button className='bg-green-300 cursor-pointer px-12 rounded-2xl py-4 font-semibold mt-4 hover:bg-green-400 hover:text-white'>Add to Cart</button>
        
      </div>
    </div>
  );
}

export default ProductViewer;
