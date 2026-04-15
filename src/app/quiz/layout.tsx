import { ThemeProvider } from "@/components/theme-provider";

// Quiz layout - no navbar/footer for immersive experience
export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
