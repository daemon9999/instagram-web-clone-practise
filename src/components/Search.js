import { useState } from "react";
import Icon from "./Icon";
import classNames from "classnames";
export default function Search() {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative w-[268px]">
            <div className={classNames({
                "text-[#8e8e8e] absolute top-0 left-0 h-9 w-9 flex items-center justify-center": true,
                "hidden": open
            })}>
                <Icon name="search"/>
            </div>
            <input type="text" placeholder="Search" onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} className="w-full h-9 pl-9 bg-[#efefef] outline-none rounded focus:pl-4"/>
            <button onClick={() => setOpen(false)} className={classNames({
                "text-[#c7c7c7] hidden absolute top-0 right-0 items-center justify-center w-9 h-9": true,
                "!flex": open
            })}>
                <Icon name="exit"/>
            </button>
        </div>
    )
}