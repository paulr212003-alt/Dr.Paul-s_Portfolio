"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-mist/80">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input-executive"
            />
          </label>
          <label className="space-y-2 text-sm text-mist/80">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="input-executive"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-mist/80">
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            placeholder="Write a short message"
            className="input-executive min-h-36 resize-y"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button as="button" type="submit">
            Send Message
          </Button>
          <p
            className={`text-sm text-gold/85 transition duration-300 ${
              submitted ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
            Demo form submitted. Backend can be connected later.
          </p>
        </div>
      </form>
    </Card>
  );
}
