import { useState, useEffect } from "react";
import { useField } from "formik";
import classNames from "classnames";
export default function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [field] = useField(props)
  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show, type]);
  
  return (
    <label className="flex relative rounded-sm items-center border ">
      <input
        className={classNames({
          "bg-zinc-50 px-[7px]  outline-none h-[38px] peer w-full text-xs": true,
          "pt-3" : field.value
        })}
        {...field}
        {...props}
        type={inputType}
      />
      <span className={classNames({
        "transition-all absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 ": true,
        "text-[10px] top-2.5": field.value
      })}>
        {label}
      </span>
      {type === "password" && field?.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className="font-semibold text-sm flex items-center pr-2 py-[9px] bg-zinc-50 select-none"
        >
          {show ? "Hide" : "Show"}
          </div>
      )}
    </label>
  );
}
