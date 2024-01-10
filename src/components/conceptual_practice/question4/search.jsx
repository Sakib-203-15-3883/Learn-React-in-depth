import { useState } from "react";

const SearchComponent1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const sportsName = ["Soccer (Football)",
    "Cricket",
    "Basketball",
    "Hockey (Field Hockey or Ice Hockey)",
    "Tennis",
    "Baseball",
    "Rugby",
    "Golf",
    "Athletics (Track and Field)",
    "Swimming",
    "Boxing",
    "Martial Arts (e.g., Karate, Judo, Taekwondo)",
    "Cycling",
    "Volleyball",
    "Badminton",
    "Table Tennis",
    "American Football",
    "Wrestling",
    "Gymnastics",
    "Skiing (Alpine, Cross-Country, Freestyle)",
    "Snowboarding",
    "Sailing",
    "Rowing",
    "Fencing",
    "Equestrian (e.g., Horse Racing, Show Jumping)",
    "Weightlifting",
    "Archery",
    "Surfing",
    "Diving",
    "Motorsports (e.g., Formula 1, NASCAR)",];

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const result = sportsName.filter((item) => {
      return item.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setSearchResult(result);
  };

  return (
    <div className="mx-auto max-w-md p-4 bg-gray-100 shadow-md rounded-md">
      <center className="text-2xl font-bold">Search for Sports name </center>
      <input
        type="text"
        placeholder="Search anything"
        value={searchQuery}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />

      <button
        onClick={handleSearch}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Search
      </button>

      {searchResult.length === 0 ? (
        <p className="mt-4 text-gray-600">Search result not found</p>
      ) : (
        <div className="mt-4">
          {searchResult.map((result, index) => (
            <div key={index} className="bg-white p-2 border rounded-md">
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent1;
