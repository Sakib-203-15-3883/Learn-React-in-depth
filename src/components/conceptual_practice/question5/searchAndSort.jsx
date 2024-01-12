import { useState } from "react";
const SearchAndSort = () => {
  // Real-life phone data
  const allPhones = [
    { id: 1, name: "iPhone 13", price: 999 },
    { id: 2, name: "Samsung Galaxy S21", price: 799 },
    { id: 3, name: "Google Pixel 6", price: 699 },
    { id: 4, name: "OnePlus 9", price: 729 },
    { id: 5, name: "Sony Xperia 1 III", price: 1299 },
    { id: 6, name: "Xiaomi Mi 11", price: 699 },
    { id: 7, name: "Huawei P40 Pro", price: 999 },
    { id: 8, name: "LG G8 ThinQ", price: 49 },

    { id: 9, name: "Motorola Edge", price: 699 },
    { id: 10, name: "Nokia 8.3", price: 699 },
    { id: 11, name: "Asus ROG Phone 5", price: 999 },
    { id: 12, name: "Oppo Find X3 Pro", price: 1199 },
    { id: 13, name: "Lenovo Legion Phone Duel 2", price: 899 },
    { id: 14, name: "Blackberry Key2", price: 649 },
    { id: 15, name: "Vivo X60 Pro", price: 749 },
  ];

  const totalPhones = allPhones.length;

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleButtonClick = () => {
    sortOrder === "ascending"
      ? setSortOrder("descending")
      : setSortOrder("ascending");
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterPhones = () => {
    return allPhones.filter((phone) => {
      return phone.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const filterPhonesArray = filterPhones();
  // console.log(filterPhonesArray);

  const sortedPhones = (filterPhonesArray) => {
    return filterPhonesArray.sort((a, b) => {
      const order = sortOrder === "ascending" ? 1 : -1;

      return order * (a.price - b.price);
    });
  };

  const filteredAndSortedPhones = sortedPhones(filterPhonesArray);
  console.log(filteredAndSortedPhones);

  return (
    <>
      <div className="grid place-content-center m-10 mb-10">
        <h1 className="text-3xl font-bold mb-10">
          Total phones : {totalPhones}{" "}
        </h1>
        <input
          type="text"
          placeholder="search phone"
          value={searchQuery}
          onChange={handleSearchQuery}
          className="text-2xl font-bold p-4 bg-white border-4 border-black rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          {sortOrder === "ascending" ? <>high to low</> : <>low to high</>}
        </button>
      </div>

      <div className="grid place-content-center  ">
        <h1 className="text-3xl font-bold mb-10">List of All phones </h1>

        {filterPhonesArray.length === 0 ? (
          <>
            <p className="text-3xl font-bold mb-10">No phones available</p>{" "}
          </>
        ) : (
          searchQuery && (
            <>
              <h1 className="text-3xl font-bold mb-10">
                suggestions while typing :{" "}
              </h1>

              {filterPhonesArray.map((element) => {
                return (
                  <>
                    <div key={element.id}>
                      <ul className="p-4">
                        <li>Name : {element.name}</li>
                        <li>price: {element.price}</li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </>
          )
        )}

        {filterPhonesArray.map((element) => {
          return (
            <>
              <div key={element.id}>
                <ul className="p-4">
                  <li>Name : {element.name}</li>
                  <li>price: {element.price}</li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchAndSort;
