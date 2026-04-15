import { tests, testCategories, mbtiDimensions, bigFiveDimensions } from "@/lib/data";
import { notFound } from "next/navigation";
import { TestDetailClient } from "./test-detail-client";
import { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const test = tests.find((t) => t.slug === slug);
  if (!test) return { title: "测试未找到" };
  return {
    title: test.title,
    description: test.description,
    openGraph: {
      title: `${test.title} | Echo`,
      description: test.description,
    },
  };
}

export async function generateStaticParams() {
  return tests.map((t) => ({ slug: t.slug }));
}

export default async function TestDetailPage({ params }: Props) {
  const { slug } = await params;
  const test = tests.find((t) => t.slug === slug);
  if (!test) notFound();

  const category = testCategories.find((c) => c.id === test.categoryId);

  let dimensions = mbtiDimensions;
  if (test.id === "test-bigfive") dimensions = bigFiveDimensions;

  return <TestDetailClient test={test} category={category} dimensions={dimensions} />;
}
