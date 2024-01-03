import { useRef, useState } from "react";
import Filtering from "./Filtering";

export default function Sidebar({ products, setProducts }) {
    const searchInput = useRef();
    const [searchResults, setSearchResults] = useState(products);

    function handleSearch() {
        const searchQuery = searchInput.current.value;
        const newProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
        setProducts(newProducts);
        setSearchResults(newProducts);
    }

    return (
        <aside className="hidden md:block h-full w-42 p-6 bg-orange-100">
            <div className="search flex items-center justify-between px-3 py-1 bg-white rounded-2xl mb-6">
                <input ref={searchInput} type="text" placeholder="Search..." className="focus:outline-none"/>
                <button onClick={handleSearch}>
                <span className="material-icons">
                    search
                </span>
                </button>
            </div>
            <details>
                <summary className="font-bold text-orange-400 text-xl mb-4">
                    Filter
                </summary>
                <Filtering setProducts={setProducts} products={searchResults} />
            </details>
        </aside>
    )
}