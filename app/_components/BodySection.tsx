import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  Car,
  LucideIcon,
  Wallet,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { ContactCart } from "./_ContactCart";
import { GmailIcon } from "./icons/GmailIcon";
import { LinkInIcon } from "./icons/LinkInIcon";

interface Project {
  title: string;
  description: string;
  link?: string;
  image: LucideIcon | string;
  startDate?: string;
  endDate?: string;
  role?: "Collaborator" | "Developer" | "Designer" | "Owner";
}
const workingProjects: Project[] = [
  {
    title: "Melfret service",
    description: "React developer",
    link: "/",
    image: "/melservice_logo.png",
    startDate: "Jan 2021",
    endDate: "May 2021",
    role: "Collaborator",
  },
  {
    title: "Spreeloop",
    description: "Flutter/React developer",
    link: "htpps://spreeloop.com",
    image: "/spreeloop_logo.png",
    startDate: "Nov 2021",
    endDate: "Current",
  },
];

const groupAndPersonalsProject: Project[] = [
  {
    title: "Betterlife Event",
    description: "Application that allows users to create and manage event.",
    link: "https://play.google.com/store/apps/details?id=com.karibu.betterlifeevent.prod&pli=1",
    image: CalendarClock,
    role: "Owner",
  },
  {
    title: "SaleRentalVehicles",
    description:
      " Application for the sale and rental of vehicles and spare parts",
    link: "https://cardeals241.com",
    image: Car,
    role: "Collaborator",
  },
  {
    title: "TransAll",
    description:
      "Mobile and web application designed to simplify the mobile credit transfer process and efficient transaction management.",
    link: "https://play.google.com/store/apps/details?id=com.karibu.transtu.prod",
    image: Wallet,
    role: "Collaborator",
  },
  {
    title: "Advanced Dart util",
    description:
      "The Dart Extensions package enriches the default Dart objects with powerful and flexible methods.",
    link: "https://dart-advanced-util.vercel.app",
    image: Wrench,
    role: "Owner",
  },
];

export const BodySection = () => (
  <Section className="isolate flex h-full gap-3 py-0 max-md:flex-col">
    <div
      className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tl
       from-[#2e1065] to-[#4c1d95] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      ></div>
    </div>
    <div className="flex flex-[2] flex-col gap-2">
      <Card>
        <ProjectsCard project={groupAndPersonalsProject} />
      </Card>
    </div>
    <div className="flex flex-col gap-3 max-md:m-auto max-md:w-full">
      <Card className="flex-[4]">
        <WorkingProject project={workingProjects} />
      </Card>
      <Card className="m-auto flex-1 space-y-3 p-2 max-md:w-full">
        <p className="text-sm text-muted-foreground">Contact</p>

        <div className="flex flex-col items-start gap-3">
          <ContactCart
            icon={<LinkInIcon color="#0A66C2" />}
            description="LinkIn"
            link={"https://www.linkedin.com/warren-rhodes-140970225"}
            title="Warren Rhodes"
          />
          <ContactCart
            icon={<GmailIcon color="#0A66C2" />}
            description="Gmail"
            link={"mailto:webanalyse237@gmail.com"}
            title="webanalyse237@gmail.com"
          />
        </div>
      </Card>
    </div>
    <div
      className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-10rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4c1d95] to-[#1e1b4b] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[30.1875rem]"
        style={{
          clipPath:
            "clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      ></div>
    </div>
  </Section>
);

const ProjectsCard = ({ project }: { project: Project[] }) => {
  return (
    <div className="m-auto space-y-3 p-3">
      <p className="text-sm text-muted-foreground">Side, fun projects</p>
      <div className="group flex flex-col items-start">
        {project.map((item) => (
          <Link
            href={item.link ?? "/"}
            className="m-2 inline-flex w-full items-center gap-3 p-2 transition duration-300 hover:!scale-100 hover:rounded-md
            hover:bg-primary/10 hover:!blur-none  group-hover:scale-95 group-hover:blur-[1px]"
            key={item.title}
          >
            <div
              className="h-auto 
             rounded-md border border-accent bg-primary/10 p-1"
            >
              {<item.image size={20} />}
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                {item.title}
                {item.role && (
                  <span
                    className={cn(
                      {
                        "border-green-400 bg-green-600/15 text-green-400 hover:bg-green-400/15":
                          item.role === "Owner",
                        "border-blue-400 bg-blue-600/15 text-blue-400 hover:bg-blue-600/15":
                          item.role === "Collaborator",
                      },
                      "border p-1 rounded-full text-[10px] font-medium ml-2"
                    )}
                  >
                    {item.role}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href={"https://github.com/warrenrhodes"}
        className="group inline-flex w-full items-center justify-end gap-2 text-sm text-primary"
      >
        View more <ArrowRight className=" group-hover:animate-slide-right" />
      </Link>
    </div>
  );
};

const WorkingProject = ({ project }: { project: Project[] }) => {
  return (
    <div className="m-auto space-y-3 p-2 max-md:w-full ">
      <div className="inline-flex gap-3">
        <BriefcaseBusiness size={20} />

        <p className="text-sm text-muted-foreground">Works</p>
      </div>

      <div className="group flex flex-col items-start">
        {project.map((item) => (
          <Link
            href={item.link ?? "/"}
            className=" inline-flex w-full items-start gap-2 p-3 transition duration-300 hover:!scale-100 hover:rounded-md hover:bg-primary/10
             hover:!blur-none  group-hover:scale-95 group-hover:blur-[1px]"
            key={item.title}
          >
            <div
              className=" size-8
             max-w-md"
            >
              {typeof item.image == "string" ? (
                <img src={item.image} alt={item.title} className="size-6" />
              ) : (
                <item.image size={15} />
              )}
            </div>

            <div className="mr-auto">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
            </div>
            {item.startDate && item.endDate && (
              <p className="ml-0 text-end text-[10px] text-muted-foreground">
                {item.startDate}-{item.endDate}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
