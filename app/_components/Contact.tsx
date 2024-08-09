import { ContactCart } from "./_ContactCart";
import { GmailIcon } from "./icons/GmailIcon";
import { LinkInIcon } from "./icons/LinkInIcon";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col gap-5">
      <p className="text-sm text-muted-foreground">Contact me</p>
      <p className="text-2xl font-semibold tracking-tight">
        I will be happy to work with you.
      </p>
      <div className="flex items-center gap-5 max-md:inline-block max-md:space-y-3">
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
    </Section>
  );
};
