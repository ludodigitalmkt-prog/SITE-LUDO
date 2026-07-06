import type { Metadata } from "next";
import AntonelaExperience from "./AntonelaExperience";

export const metadata: Metadata = {
  title: "Antonela | LUDO Eventos",
  description:
    "Álbum digital e experiência visual do Chá da Antonela.",
};

export default function AntonelaPage() {
  return <AntonelaExperience />;
}
