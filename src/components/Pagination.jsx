export default function Pagination({listLength, itemsPerPage, activePage, onChangePage}) {
    const pageCount = Math.ceil(listLength / itemsPerPage);
    const pages = [];

    const buttonClasses = 'h-6 w-6 md:h-8 md:w-8 rounded-full bg-stone-300 hover:bg-stone-400 flex justify-center items-center';
    const activeClasses = 'h-6 w-6 md:h-8 md:w-8 rounded-full bg-orange-400 hover:bg-orange-500 flex justify-center items-center';

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center py-4">
            {activePage !== 1 && <button className={buttonClasses} onClick={() => onChangePage(activePage - 1)}>{'<'}</button>}
            <ul className="flex px-4 gap-1">
                {
                    pages.map(p => (
                        <li key={p}>
                            <button 
                            className={p === activePage ? activeClasses : buttonClasses}
                            onClick={() => onChangePage(p)}
                            >{p}</button>
                        </li>
                    ))
                }
            </ul>
            {activePage !== pages.length && <button className={buttonClasses} onClick={() => onChangePage(activePage + 1)}>{'>'}</button>}
        </div>
    )
}