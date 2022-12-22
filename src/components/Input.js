import { useState, useEffect, useRef } from "react";
export default function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
    const inputRef = useRef()
  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
    inputRef.current.focus()
  }, [show]);
  return (
    <label className="flex relative rounded-sm items-center border ">
      <input
        required={true}
        type={inputType}
        className="bg-zinc-50 px-[7px] valid:pt-3 outline-none h-[38px] peer w-full text-xs"
        {...props}
        ref={inputRef}
      />
      <span className="transition-all absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </span>
      {type === "password" && props?.value && (
        <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="font-semibold text-sm flex items-center pr-2 py-[9px] bg-zinc-50"
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
