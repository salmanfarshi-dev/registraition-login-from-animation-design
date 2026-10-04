import { useState } from "react";

const ICONS = {
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  lock: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
};

export default function Field({
  icon,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}) {
  const [show, setShow] = useState(false);
  const isPw = type === "password";
  return (
    <div className="mb-3.5">
      <div
        className={`flex items-center gap-3 rounded-xl border-[1.5px] bg-[#f2f5fb] px-4 transition
        focus-within:border-brand focus-within:bg-white focus-within:ring-4 focus-within:ring-brand/15
        ${error ? "border-red-500" : "border-transparent"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] shrink-0 fill-none stroke-ink stroke-2"
        >
          <path d={ICONS[icon]} />
        </svg>
        <input
          aria-label={placeholder}
          type={isPw && show ? "text" : type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent py-[15px] text-[13.5px] outline-none placeholder:text-slate-400"
        />
        {isPw && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-[11.5px] font-semibold tracking-wide text-brand"
          >
            {show ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
      {error && (
        <p role="alert" className="mt-1 text-[11.5px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
