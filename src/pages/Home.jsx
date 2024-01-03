import { useState } from "react";

import ProductsList from "../components/ProductsList";
import Sidebar from "../components/Sidebar";
import DUMMY_PRODUCTS from "../db";

export default function Home() {
    const [products, setProducts] = useState(DUMMY_PRODUCTS);

    function handleChangeProducts(products) {
        setProducts(products);
    }

    return (
        <div className="flex h-screen">
            <Sidebar products={DUMMY_PRODUCTS} setProducts={handleChangeProducts} />
            <ProductsList products={products} />
        </div>
    )
}