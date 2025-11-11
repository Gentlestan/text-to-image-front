// components/common/SentryTestButton.tsx
import * as Sentry from "@sentry/nextjs";
import { useState } from "react";

class SentryExampleFrontendError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "SentryExampleFrontendError";
  }
}

export default function SentryTestButton() {
  const [hasSentError, setHasSentError] = useState(false);

  async function handleClick() {
    await Sentry.startSpan(
      { name: "Example Frontend/Backend Span", op: "test" },
      async () => {
        const res = await fetch("/api/sentry-example-api");
        if (!res.ok) setHasSentError(true);
      }
    );

    throw new SentryExampleFrontendError(
      "This is a test error triggered from the frontend."
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Throw Sample Error
      </button>

      {hasSentError && <p className="text-green-600">Error sent to Sentry ✅</p>}
    </div>
  );
}
