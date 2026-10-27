import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between py-8 px-8 bg-white dark:bg-black sm:items-start">
        <p>Hi, my name is Andrew.</p>
        <p>
          I'm a bit of a serial hobbyist. I tend to make and tinker with many
          things.
        </p>
      </main>
    </div>
  );
}
