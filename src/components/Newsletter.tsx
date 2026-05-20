"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "done" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Couldn't subscribe");
      setStatus("done");
      setMessage("Subscribed. Watch your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : `Couldn't subscribe — email ${site.email}`,
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex border-b border-bone/30">
        <input
          type="email"
          required
          placeholder="you@somewhere.co.nz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="bg-transparent flex-1 py-2 outline-none placeholder:text-bone/40 text-bone disabled:opacity-60"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-mono text-[11px] tracking-[0.18em] uppercase text-bone hover:text-signal disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join →"}
        </button>
      </div>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-2 font-mono text-[10px] tracking-[0.16em] uppercase ${
            status === "error" ? "text-signal" : "text-bone/65"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
