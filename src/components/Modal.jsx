import { createPortal } from "react-dom";

export default function Modal({children}) {
    return createPortal(
        <>
        <div className="z-1 fixed w-full h-full bg-stone-900 opacity-25">
        </div>
        <div className="z-1 fixed w-full h-full flex items-center justify-center">
            <div className="relative rounded-xl bg-stone-100 py-4 px-6">
            {children}
            </div>
        </div>
        </>
    , document.getElementById('modal'))
}