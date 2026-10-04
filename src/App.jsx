import { useEffect, useState } from "react";
import Art from "./components/Art";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const W = 980,
  H = 620; // design size of the card

export default function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [scale, setScale] = useState(1);

  // keeps the card side-by-side and fits it to any screen width
  useEffect(() => {
    const fit = () =>
      setScale(Math.max(0.36, Math.min(1, (window.innerWidth - 32) / W)));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <div className="relative" style={{ width: W * scale, height: H * scale }}>
        <div
          className="absolute left-0 top-0 h-[620px] w-[980px] origin-top-left overflow-hidden rounded-[28px] bg-white shadow-[0_40px_90px_-30px_rgba(10,60,160,.5)]"
          style={{ transform: `scale(${scale})` }}
        >
          <Art login={login} />
          <RegisterForm
            active={!login}
            onSwap={() => setLogin(true)}
            onDone={(u) => {
              setUsername(u);
              setLogin(true);
            }}
          />
          <LoginForm
            active={login}
            prefill={username}
            onSwap={() => setLogin(false)}
          />
        </div>
      </div>
    </main>
  );
}
