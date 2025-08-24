import { Globe, Mail } from "lucide-react";
import SectionTitle from "../SectionTitle";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="max-w-6xl w-full">
        <SectionTitle label={"About Us"} />

        {/* Content */}
        <div className="px-5 lg:px-0 text-justify">
          <p>
            Convene for Impact Event Organization PLC, in partnership with
            Legendary Gold Limited curates and organizes Africa Celebrates 2025
            Women’s Forum.
          </p>

          <p className="mt-5 text-justify">
            Convene for Impact Event Organization PLC is a premier business
            event management company that specializes in delivering first-class
            solutions through a unique and professional approach. The company
            offers a range of services, including event conceptualization,
            research, event design, and comprehensive event management, treating
            each event as a project to be executed with a meticulous project
            management methodology. Our team manages multiple components of an
            event, including concept development, design, budgeting, marketing,
            coordinating speakers and delegates, directing and delivering events
            during the day, and summarizing event proceedings. Convene for
            Impact is dedicated to providing seamless, end-to-end event
            management, as demonstrated by our successful track record with
            clients like the African Youth Development and Excellence Centre
            (AYDEC), GFOX Aviation, Normanas Aerospace, etc, through curating
            seamless business events such as the Pan-African Youth Summit 2022,
            Stock-Talk Series, African Celebrates Women’s Forum 2024, etc.
          </p>
        </div>

        <div className="flex mt-6 space-x-10 space-y-4 px-5 lg:px-0">
          <p>
            <a
              href="https://www.conveneforimpact.com"
              className="text-secondary underline"
            >
              <Globe />
            </a>
          </p>
          <p>
            <a
              href="mailto:info@conveneforimpact.com"
              className="text-secondary underline"
            >
              <Mail />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
