export const formBase =
  "absolute inset-y-0 flex w-[490px] flex-col justify-center px-[62px] transition duration-500";

export const Btn = ({ children, outline, ...p }) => (
  <button
    {...p}
    className={`w-full rounded-xl py-[15px] text-base font-semibold transition active:scale-[.98] disabled:cursor-wait disabled:opacity-75
    ${
      outline
        ? "border-[1.5px] border-ink bg-transparent text-[15px] hover:bg-slate-100"
        : "bg-navy text-white shadow-[0_12px_24px_-10px_#0b3d86] hover:-translate-y-0.5 hover:bg-brand"
    }`}
  >
    {children}
  </button>
);

export const Or = () => (
  <div className="my-3 flex items-center gap-3 text-[11px] text-slate-400 before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">
    or
  </div>
);

export const Spinner = () => (
  <span className="inline-block h-4 w-4 animate-spin rounded-full border-[2.5px] border-white/35 border-t-white align-[-3px]" />
);
