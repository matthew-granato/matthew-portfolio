export default function Hero() {
    return (
        <header className="mx-auto max-w-5xl px-6 py-32 text-center sm:py-44">
           <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                I build things
                <br />
                that stay running.
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-xl leading-[1.5] text-muted sm:text-2xl">
                Computer engineering student in Toronto. I write software that handles real money and real users.
            </p>

            <p className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg">
                <a
                className="text-link hover:underline underline-offset-4"
                href="#work"
                >
                    See the work
                </a>
                <a
                className="text-link hover:underline underline-offset-4"
                href="mailto:mattgranato2004@gmail.com"
                >
                    Get in touch
                </a>
            </p>
        </header>
    );

}
