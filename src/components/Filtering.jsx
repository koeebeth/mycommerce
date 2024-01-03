export default function Filtering({ products, setProducts }) {

    function handleFilter(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const newProducts = products.filter(prod => {
            if (data.maxprice && prod.new_price > data.maxprice) {
                return false;
            }
            if (data.minprice && prod.new_price < data.minprice) {
                return false;
            }
            if (data.category && prod.category !== data.category) {
                return false;
            }
            return true;
        });
        setProducts(newProducts);
    }

    return (
        <form onSubmit={handleFilter} className="flex flex-col gap-4">
            <fieldset className="flex gap-2">
                <label>
                    <h2>Min. Price</h2>
                    <input type="number" min={0} name="minprice" className="rounded-md w-20 p-1"/>
                </label>
                <label>
                    <h2>Max. Price</h2>
                    <input type="number" min={0} name="maxprice" className="rounded-md w-20 p-1"/>
                </label>
            </fieldset>
            <select name="category" className="p-1 rounded-md">
                <option defaultValue value="">Category</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
            <div className="flex justify-between">
                <button type="submit" className="py-1 px-3 rounded-md bg-orange-200">
                    Filter
                </button>
                <button type="reset" className="py-1 px-3 rounded-md bg-orange-200">
                    Reset
                </button>
            </div>
        </form>
    )
}