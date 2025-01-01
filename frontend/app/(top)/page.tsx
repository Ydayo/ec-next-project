"use cache";
import { Suspense } from "react";

import Example from "./components/Example";

export default async function Home() {
  return (
    <>
      <h1>Example Text</h1>
      <Suspense fallback={<>Loading...</>}>
        <Example />
      </Suspense>
    </>
  );
}
