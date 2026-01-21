import React from "react";

const ConnectivityMap = () => {
  return (
    <div className="w-full h-full relative">
      <iframe
        title="Neighborhood Connectivity Map"
        src="https://www.google.com/maps?q=Bandra%20West%20Mumbai&output=embed"
        className="w-full h-full border-0 z-0 relative"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ConnectivityMap;
