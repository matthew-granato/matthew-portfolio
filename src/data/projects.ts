export type Project = {
    slug: string;
    name: string;

    /**One line: what it is, in plaing language. */

    summary: string;

    /**What you actually built. Two or three sentences */
    built: string;

    /**The hardest problem and how you solved it. This is the part people read.  */
    problem: string;
    stack: string[];
    year: string;
    /**Live URL, if there is one. */
    live?: string;
    repo?: string;
    /**Shown in the status strip at the top of the page */
    status: "live" | "in progress" | "built";
};

// TODO (Matthew): replace every `built` and `problem` string below with your own
// words. Rough is fine. The `problem` field is what makes an engineer stop
// scrolling, so it should name a specific failure and what you changed.
 
export const projects: Project[] = [
    {
      slug: "pure-peel",
      name: "Pure Peel Co.",
      summary:
        "A storefront for my own food brand that takes payments, stores orders, and tells me what to ship.",
      built:
        "A React and Tailwind storefront on Vercel with an Express backend on Render. Stripe handles checkout, a Postgres database holds the orders, and an admin dashboard sends shipping notifications. It has processed real orders from real customers.",
      problem:
        "Customers were paying and never receiving a confirmation email. The payment succeeded, so Stripe looked fine, but the order never reached fulfilment. I traced it to the database: the live orders table had drifted from the schema the code expected, so every insert threw a Postgres 42703 and the fulfilment step, which ran after the save, never fired. CREATE TABLE IF NOT EXISTS silently does nothing against an existing table, which is why it never showed up in deploys. I reconciled the table column by column and added idempotency guards so a replayed webhook can't double-insert.",
      stack: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe"],
      year: "2025—present",
      live: "https://purepeelco.com",
      status: "live",
    },
    {
      slug: "pinpair",
      name: "PinPair",
      summary:
        "A shared app for two people to save places and decide where to actually go.",
      built:
        "TODO: what you built. Map, saved places, invite codes, voting on outing plans, the Supabase and OpenStreetMap stack.",
      problem:
        "TODO: the hardest part. Place search accuracy, syncing two users' data, generating plans from real places — pick the one that actually took you the longest and say what you tried first.",
      stack: ["React", "TypeScript", "Supabase", "OpenStreetMap"],
      year: "2026",
      status: "in progress",
    },
    {
      slug: "smartwatch",
      name: "Smartwatch",
      summary:
        "A wrist-worn fitness tracker built from scratch: steps, GPS workouts, time, and weather.",
      built:
        "TODO: the microcontroller, sensors, display, and how it gets data. Mention the enclosure if you made one.",
      problem:
        "TODO: power draw, sensor noise, GPS lock time, or fitting the UI on a tiny display. Embedded constraints are interesting to software people precisely because they don't deal with them.",
      stack: ["ESP32", "C++", "Embedded"],
      year: "2026",
      status: "in progress",
    },
    {
      slug: "turtle-rose",
      name: "Turtle Rose",
      summary:
        "A music site for an independent artist, with lyrics that follow the track as it plays.",
      built:
        "TODO: the player, the LRC lyric syncing, hosting on Cloudflare, and the workflow you set up so the artist can add songs himself.",
      problem:
        "TODO: keeping lyrics in sync with audio playback is the obvious one. Say what the timing problem was.",
      stack: ["JavaScript", "Cloudflare"],
      year: "2026",
      status: "live",
    },
  ];