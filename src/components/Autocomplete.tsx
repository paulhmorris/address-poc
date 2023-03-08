/* eslint-disable */

import { IconX } from "@tabler/icons-react";
import { ChangeEvent } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

// Component from https://github.com/wellyshen/use-places-autocomplete
export function Autocomplete() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => clearSuggestions());

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSelect =
    ({ description }: { description: string }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const mockSuggestions = [
    {
      place_id: "abc",
      description: "abcdefg",
      structured_formatting: {
        main_text: "1234 Clean Street",
        secondary_text: "San Francisco, CA 94110",
      },
    },
    {
      place_id: "def",
      description: "abcdefg",
      structured_formatting: {
        main_text: "722 Maryland Dr",
        secondary_text: "San Francisco, CA 94110",
      },
    },
    {
      place_id: "123",
      description: "abcdefg",
      structured_formatting: {
        main_text: "722 Maryland Dr",
        secondary_text: "San Francisco, CA 94110",
      },
    },
    {
      place_id: "456",
      description: "abcdefg",
      structured_formatting: {
        main_text: "722 Maryland Dr",
        secondary_text: "San Francisco, CA 94110",
      },
    },
    {
      place_id: "789",
      description: "abcdefg",
      structured_formatting: {
        main_text: "722 Maryland Dr",
        secondary_text: "San Francisco, CA 94110",
      },
    },
    {
      place_id: "geh",
      description: "abcdefg",
      structured_formatting: {
        main_text: "Here is a really long address that will truncate",
        secondary_text: "San Francisco, CA 94110",
      },
    },
  ];

  const renderSuggestions = () =>
    mockSuggestions.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="pl-5 pr-2 py-3 hover:bg-gray-200 truncate"
          tabIndex={0}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <span className="font-medium">
            {main_text} {secondary_text}
          </span>
        </li>
      );
    });

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative">
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Enter your address"
          required
          autoComplete="address"
          className="search font-bold inline-block w-full rounded-md border border-gray-300 p-3 text-base text-primary transition duration-100 placeholder:text-primary placeholder:font-bold focus:outline-none focus:border-blue focus-visible:outline-none leading-5 focus:ring-0"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-5 bottom-2.5 p-1 -m-1"
          >
            <IconX className="text-blue" stroke={1.5} />
          </button>
        )}
      </div>
      {true && (
        <ul className="absolute z-10 w-full cursor-default mt-1 bg-gray-100 max-h-[225px] overflow-y-scroll">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
}
