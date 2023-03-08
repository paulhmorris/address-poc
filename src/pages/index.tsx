import { NextPage } from "next";
import Script from "next/script";
import { useState } from "react";
import { Autocomplete } from "~/components/Autocomplete";

const Signup: NextPage = () => {
  const [googleApiLoaded, setGoogleApiLoaded] = useState(false);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_PLACES_AUTOCOMPLETE}&libraries=places&callback=Function.prototype`}
        onLoad={() => setGoogleApiLoaded(true)}
      />
      {googleApiLoaded && <Autocomplete />}
    </>
  );
};

export default Signup;
