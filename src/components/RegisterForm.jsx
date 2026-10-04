import { useState } from "react";
import Field from "./Field";
import { Btn, Or, Spinner, formBase } from "./Shared";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function RegisterForm({ active, onDone, onSwap }) {
  const [d, setD] = useState({ user: "", email: "", pass: "" });
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => {
    setD({ ...d, [k]: v });
    setErr({ ...err, [k]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!/^[a-zA-Z0-9_]{3,}$/.test(d.user))
      x.user = "Use 3+ letters, numbers or underscores.";
    if (!emailOk(d.email))
      x.email = "Enter a valid email, like name@example.com.";
    if (d.pass.length < 8) x.pass = "Password needs at least 8 characters.";
    setErr(x);
    if (Object.keys(x).length) return;
    setBusy(true);
    // TODO: call your register API here, then run onDone on success
    setTimeout(() => {
      onDone(d.user);
      setTimeout(() => setBusy(false), 1000);
    }, 1100);
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      inert={active ? undefined : ""}
      className={`${formBase} left-[490px] ${active ? "opacity-100 delay-300" : "pointer-events-none translate-x-16 opacity-0"}`}
    >
      <h1 className="text-[32px] font-bold tracking-wide">Sign up</h1>
      <p className="mb-5 mt-1 text-[12.5px] text-slate-500">
        Create your account to get started.
      </p>
      <Field
        icon="user"
        value={d.user}
        onChange={set("user")}
        error={err.user}
        placeholder="Username"
        autoComplete="username"
      />
      <Field
        icon="mail"
        type="email"
        value={d.email}
        onChange={set("email")}
        error={err.email}
        placeholder="Email address"
        autoComplete="email"
      />
      <Field
        icon="lock"
        type="password"
        value={d.pass}
        onChange={set("pass")}
        error={err.pass}
        placeholder="Password"
        autoComplete="new-password"
      />
      <div className="h-1.5" />
      <Btn disabled={busy}>{busy ? <Spinner /> : "Create account"}</Btn>
      <Or />

      <p className="mt-2 md:mt-4 text-center text-xs text-slate-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwap}
          className="font-semibold text-brand"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}
