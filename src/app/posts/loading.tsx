import React, { Suspense } from "react";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function SlowData() {
  await delay(3000);
  return (
    <div className="border rounded-lg p-6 mt-6 max-w-2xl mx-auto bg-gray-100 animate-pulse h-24" />
  );
}

export default function Loading() {
  return (
    <main className="p-6 max-w-2xl mx-auto space-y-6 animate-pulse">
      <Suspense fallback={<div className="border rounded-lg p-6 mt-6 max-w-2xl mx-auto bg-gray-100 animate-pulse h-24" />}>
        <SlowData />
      </Suspense>
    </main>
  );
}