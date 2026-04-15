import { tests } from "@/lib/data";
import { notFound } from "next/navigation";
import { QuizClient } from "./quiz-client";

type Props = { params: Promise<{ slug: string }> };

export default async function QuizPage({ params }: Props) {
  const { slug } = await params;
  const test = tests.find((t) => t.slug === slug);
  if (!test) notFound();

  return <QuizClient slug={slug} />;
}
