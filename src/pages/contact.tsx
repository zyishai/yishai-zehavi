import React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import SharedHead from "../components/SharedHead";
import DefaultLayout from "../components/DefaultLayout";
import Container from "@/components/Container";
import { Heading, Paragraph } from "@/components/Typography";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout title="Contact">
      <Container className="h-full w-full flex flex-col">
        <Heading level="h1">Contact Me</Heading>
        <Paragraph>
          Thank you for taking the time to contact me!I’m available for
          employment, work as a freelancer, or even cooperate with you on a cool
          project. Just drop me a message on this form!
          <br />
          You can also DM me on dev.to and Twitter.
        </Paragraph>

        <Separator className="mt-5 mb-10" />

        <form
          action="https://getform.io/f/e9e08790-440d-489c-bbea-9a6b2efe53d5"
          method="post"
        >
          <input type="hidden" name="_gotcha" className="!hidden" />
          <div className="grid justify-items-start gap-6">
            <div className="grid w-full max-w-sm items-center gap-2.5">
              <Label htmlFor="name">Full Name *</Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2.5">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Container>
    </DefaultLayout>
  );
};

export default ContactPage;

export const Head: HeadFC = SharedHead;
