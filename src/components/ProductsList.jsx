import { useState } from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

export default function ProductsList({ products, itemsPerPage = 8 }) {
    const [activePage, setActivePage] = useState(1);
    const lastIndex = activePage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const pageProducts = products.slice(firstIndex, lastIndex);

    function handleSetPage(index) {
        setActivePage(index);
    }

    return (
        <div className="h-full w-full overflow-scroll">
            <ul className="flex flex-wrap gap-8 p-6 justify-center">
                {products.length === 0 && <p className="mx-auto my-4">No items here.</p>}
                {pageProducts.map(product => 
                    <li key={product.id}>
                        <ProductItem product={product} />
                    </li>
                )}
            </ul>
            {products.length !== 0 && 
            <Pagination 
            listLength={products.length} 
            itemsPerPage={itemsPerPage}
            activePage={activePage}
            onChangePage={handleSetPage}
            />
            }
        </div>
    )
}