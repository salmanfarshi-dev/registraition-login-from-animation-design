import { useEffect, useState } from "react";
import Field from "./Field";
import { Btn, Or, Spinner, formBase } from "./Shared";

export default function LoginForm({ active, prefill, onSwap }) {
  const [d, setD] = useState({ id: "", pass: "" });
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (prefill) setD((x) => ({ ...x, id: prefill }));
  }, [prefill]);
  const set = (k) => (v) => {
    setD({ ...d, [k]: v });
    setErr({ ...err, [k]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!d.id.trim()) x.id = "Enter your username or email.";
    if (!d.pass) x.pass = "Enter your password.";
    setErr(x);
    if (Object.keys(x).length) return;
    setBusy(true);
    // TODO: call your login API here
    setTimeout(() => setDone(true), 1000);
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      inert={active ? undefined : ""}
      z
      className={`${formBase} left-0 ${active ? "opacity-100 delay-300" : "pointer-events-none -translate-x-16 opacity-0"}`}
    >
      <h1 className="text-[32px] font-bold tracking-wide">Sign in</h1>
      <p className="mb-5 mt-1 text-[12.5px] text-slate-500">
        Welcome back! Enter your details below.
      </p>
      <Field
        icon="user"
        value={d.id}
        onChange={set("id")}
        error={err.id}
        placeholder="Username or email"
        autoComplete="username"
      />
      <Field
        icon="lock"
        type="password"
        value={d.pass}
        onChange={set("pass")}
        error={err.pass}
        placeholder="Password"
        autoComplete="current-password"
      />
      <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="h-[15px] w-[15px] accent-brand"
          />
          Remember me
        </label>
        <button type="button" className="font-medium text-brand">
          Forgot password?
        </button>
      </div>
      <Btn disabled={busy}>{busy ? <Spinner /> : "Sign in"}</Btn>
      <Or />

      <p className="mt-5 text-center text-xs text-slate-500">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwap}
          className="font-semibold text-brand"
        >
          Sign up
        </button>
      </p>

      {done && (
        <div className="absolute inset-0 grid place-content-center gap-1.5 bg-white text-center">
          <svg viewBox="0 0 80 80" className="mx-auto mb-1.5 h-20 w-20">
            <circle
              className="check-circle animate-draw"
              cx="40"
              cy="40"
              r="32"
              strokeDasharray="200"
              strokeDashoffset="200"
            />
            <path
              className="check-path animate-draw [animation-delay:.4s]"
              d="M26 41l10 10 19-21"
              strokeDasharray="60"
              strokeDashoffset="60"
            />
          </svg>
          <h1 className="text-2xl font-bold">Signed in</h1>
          <p className="text-[12.5px] text-slate-500">
            Connect this to your backend next.
          </p>
        </div>
      )}
    </form>
  );
}
