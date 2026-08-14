import React from "react";

type SurveyLayoutProps = {
  children: React.ReactNode;
};

export default function SurveyLayout({ children }: SurveyLayoutProps) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <div>{children}</div>
      </div>
    </section>
  );
}