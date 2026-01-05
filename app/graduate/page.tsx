// app/page.tsx
import Graduate from "@/components/graduate";

const graduatesData = [
  {
    initials: "M",
    name: "Maheera",
    subtitle: "Bano Qabil Graduate",
    journeyTitle: "From feeling invisible to guiding others — this is my journey.",
    journeyDescription: `I run my own digital agency today, teaching social media management to others and mentoring new students entering Bano Qabil — a future I could never have imagined.

Growing up in Lyari, I didn’t even have a Facebook account. It felt like I didn’t exist in the world at all. Surrounded by deprivation and hopelessness, I couldn’t picture a future for myself.

Then I found Bano Qabil. It was my chance, and I didn’t let it slip away. The program taught me digital skills and gave me confidence. The world I once feared has now become my strength, my platform for independence and purpose.`,
    quote: "I am Maheera, and like me, countless girls are discovering a bright future through Bano Qabil.",
    highlightWords: ["Maheera", "bright", "future"],
  },
  {
    initials: "A",
    name: "Ayesha",
    subtitle: "Bano Qabil Graduate",
    journeyTitle: "Turning passion into success — my story.",
    journeyDescription: `I run my own digital agency today, teaching social media management to others and mentoring new students entering Bano Qabil — a future I could never have imagined.

Growing up in Lyari, I didn’t even have a Facebook account. It felt like I didn’t exist in the world at all. Surrounded by deprivation and hopelessness, I couldn’t picture a future for myself.

Then I found Bano Qabil. It was my chance, and I didn’t let it slip away. The program taught me digital skills and gave me confidence. The world I once feared has now become my strength, my platform for independence and purpose.`,
    quote: "I am Ayesha, and like me, girls everywhere are building a bright future through Bano Qabil.",
    highlightWords: ["Ayesha", "bright", "future"],
  },
  {
    initials: "S",
    name: "Sara",
    subtitle: "Bano Qabil Graduate",
    journeyTitle: "From zero to digital hero.",
    journeyDescription: `I run my own digital agency today, teaching social media management to others and mentoring new students entering Bano Qabil — a future I could never have imagined.

Growing up in Lyari, I didn’t even have a Facebook account. It felt like I didn’t exist in the world at all. Surrounded by deprivation and hopelessness, I couldn’t picture a future for myself.

Then I found Bano Qabil. It was my chance, and I didn’t let it slip away. The program taught me digital skills and gave me confidence. The world I once feared has now become my strength, my platform for independence and purpose.`,
    quote: "I am Sara, and just like me, many girls are discovering a bright future through Bano Qabil.",
    highlightWords: ["Sara", "bright", "future"],
  },
];

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <Graduate graduates={graduatesData} />
    </main>
  );
}
