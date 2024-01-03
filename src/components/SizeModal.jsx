import { useState } from "react";
import Modal from "./Modal";

export default function SizeModal({onSelect, onCancel}) {
    const [selected, setSelected] = useState('');

    function handleSelect() {
        onSelect(selected);
        onCancel();
    }

    return (
        <Modal>
            <h2 className="mb-6 text-2xl font-bold">Select size:</h2>
            <form className="flex gap-4 items-center relative">
                <label className={selected === 'xs' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                    <input onClick={() => setSelected('xs')} type="radio" name="size" value={'xs'} className="mr-2 absolute opacity-0" />
                    X-Small
                </label>
                <label className={selected === 's' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                    <input onClick={() => setSelected('s')} type="radio" name="size" value={'s'} className="mr-2 absolute opacity-0"/>
                    Small
                </label>
                <label className={selected === 'm' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                    <input onClick={() => setSelected('m')} type="radio" name="size" value={'m'} className="mr-2 absolute opacity-0"/>
                    Medium
                </label>
                <label className={selected === 'l' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                    <input onClick={() => setSelected('l')} type="radio" name="size" value={'l'} className="mr-2 absolute opacity-0"/>
                    Large
                </label>
                <label className={selected === 'xl' ? "px-4 py-2 bg-orange-400 rounded-lg" : "px-4 py-2 bg-stone-200 rounded-lg"}>
                    <input onClick={() => setSelected('xl')} type="radio" name="size" value={'xl'} className="mr-2 absolute opacity-0"/>
                    X-Large
                </label>
            </form>
            <div className="mt-6 flex justify-between">
                <button type="button" onClick={handleSelect} className="bg-orange-400 py-2 px-4 w-fit rounded-lg font-bold text-white hover:bg-orange-500">
                    Select
                </button>
                <button type="button" onClick={onCancel} className="py-2 px-4 w-fit rounded-lg font-bold hover:underline">
                    Cancel
                </button>
            </div>
        </Modal>
    )
}