// Left/right blue panel with spheres + text. It slides across when `login` is true.
const sphere = "absolute rounded-full animate-float";

export default function Art({ login }) {
  return (
    <div
      className={`absolute inset-y-0 left-0 z-20 w-[490px] overflow-hidden bg-white
      transition-transform duration-[950ms] ease-[cubic-bezier(.76,0,.18,1)]
      ${login ? "translate-x-[490px]" : ""}`}
    >
      {/* spheres (mirrored when logged in) */}
      <div
        className={`absolute inset-0 transition-transform duration-[950ms] ease-[cubic-bezier(.76,0,.18,1)] ${login ? "-scale-x-100" : ""}`}
      >
        <div className="absolute -left-[250px] -top-[130px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#1f8cff,#0a62d2_55%,#073f9e)]" />
        <div
          className={`${sphere} left-[170px] top-[400px] h-[260px] w-[260px] bg-[radial-gradient(circle_at_30%_25%,#35a2ff,#0a66d6_55%,#0645b0)] shadow-[-14px_14px_40px_rgba(4,40,120,.35)]`}
        />
        <div
          className={`${sphere} -left-[50px] top-[470px] h-[150px] w-[150px] bg-[radial-gradient(circle_at_30%_25%,#35a2ff,#0a66d6_55%,#0645b0)] [animation-delay:-4s]`}
        />
        <div
          className={`${sphere} left-[360px] top-[60px] h-[70px] w-[70px] bg-[radial-gradient(circle_at_30%_25%,#fff,#9fd0ff)] opacity-35 [animation-delay:-2s]`}
        />
      </div>

      {/* text for sign up */}
      <Text
        show={!login}
        title="WELCOME"
        headline="JOIN THE COMMUNITY"
        body="Create your free account in seconds and unlock everything we have built for you."
      />
      {/* text for sign in */}
      <Text
        show={login}
        title="WELCOME BACK"
        headline="GOOD TO SEE YOU"
        body="Sign in to continue where you left off. Your workspace is ready and waiting."
      />
    </div>
  );
}

function Text({ show, title, headline, body }) {
  return (
    <div
      className={`absolute left-14 top-[190px] w-[330px] text-white transition duration-700
      ${show ? "translate-y-0 opacity-100 delay-[450ms]" : "pointer-events-none translate-y-5 opacity-0 duration-[450ms]"}`}
    >
      <h2 className="text-[44px] font-bold leading-none ml-8 tracking-wide">
        {title}
      </h2>
      <h3 className="mt-3  ml-8 text-[19px] font-semibold tracking-wider">
        {headline}
      </h3>
      <p className="mt-3.5 ml-8  max-w-[290px] text-[12.5px] leading-[1.7] opacity-85">
        {body}
      </p>
    </div>
  );
}
