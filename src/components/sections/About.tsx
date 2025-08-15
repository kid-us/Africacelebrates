import { logo } from "@/assets";

interface ForumObjective {
  id: number;
  description: string;
}

const forumObjective: ForumObjective[] = [
  {
    id: 1,
    description:
      "Inspire and mobilize by celebrating the legacies of African women leaders, connecting their courage to today’s reparations movement.",
  },
  {
    id: 2,
    description:
      "Create space for dialogue about gender-specific harms resulting from slavery, colonialism, conflict, and systemic inequality.",
  },
  {
    id: 3,
    description: "Build capacity for impactful and ethical storytelling.",
  },
  {
    id: 4,
    description:
      "Facilitate healing and resilience by providing safe spaces for processing trauma and imagining a just future.",
  },
  {
    id: 5,
    description:
      "Explore reparations as a strategy for advancing education, healthcare, land rights, and entrepreneurship.",
  },
  {
    id: 6,
    description:
      "Strengthen Africa–diaspora connections and develop a collective Solidarity Statement.",
  },
];

const About = () => {
  return (
    <div id="#About" className="flex items-center justify-center">
      <div className="max-w-6xl">
        <div className="flex py-10 gap-x-10">
          <div className="">
            <p className="border border-primary rounded-full px-4 py-2 w-52 text-center text-white bg-secondary/10 mb-7">
              About the Event
            </p>
            <p className="w-90 text-3xl mt-16">The Event Explained</p>
            <div className="flex items-end">
              <img src={logo} className="grayscale-100 w-1/2 mt-10" />
            </div>
          </div>
          <div>
            <p className="">
              Africa Celebrates 2025 Women’s Forum is one of the components of
              Africa Celebrates 2025 (www.africacelebrates.com). This year’s
              forum focuses on the theme:
            </p>
            <p className="italic font-semibold my-4 text-primary text-xl">
              “Storytelling for Justice: The Power of African Women Narratives
              in Reparations Restoring What Was Taken, Building What is
              Possible”
            </p>
            <p className="">
              Reparations span cultural, psychological, historical, land, and
              institutional restoration. For African women, it means a holistic
              effort to acknowledge past harms, dismantle ongoing oppression,
              and restore dignity, agency, and full rights. The African Union’s
              2025 reparations agenda is not just a call for justice—it is a
              chance to confront the legacy of slavery, colonialism, and
              inequality, harness international law, unlock economic potential,
              and secure a just future for generations.
            </p>
          </div>
        </div>

        {/* Forum Objectives */}
        <div className="my-20">
          <p className="border border-primary rounded-full px-4 py-2 w-52 text-center text-white bg-secondary/10 mb-10">
            Forum Objectives
          </p>

          <div className="grid grid-cols-3 gap-6">
            {forumObjective.map((objective) => (
              <div
                key={objective.id}
                className="border border-secondary p-5 group rounded relative"
              >
                <p className="bg-secondary w-2 h-2 absolute rounded-full -top-1 -left-1"></p>
                <p className="bg-secondary w-2 h-2 absolute rounded-full -top-1 -right-1"></p>
                <p className="bg-secondary w-2 h-2 absolute rounded-full -bottom-1 -left-1"></p>
                <p className="bg-secondary w-2 h-2 absolute rounded-full -bottom-1 -right-1"></p>
                <p className="text-lg">{objective.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-5">
            <p>
              Wanna be part of it{" "}
              <a
                href=""
                className="text-lg text-primary underline underline-offset-4 hover:underline-offset-2 ms-3"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
