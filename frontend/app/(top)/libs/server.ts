import { setTimeout } from "timers/promises";

export const getExample = async () => {
  const response = await fetch("http://localhost:8080/ping");

  await setTimeout(3000);

  if (!response.ok) {
    return null;
  }

  const data: { amount: number; currency: string } = await response.json();

  return data;
};
