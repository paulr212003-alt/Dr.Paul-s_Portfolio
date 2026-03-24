"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const initialFormState = {
  email: "",
  message: "",
  name: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    tone: "idle"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({
      message: "",
      tone: "idle"
    });

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message right now.");
      }

      setFormData(initialFormState);
      setStatus({
        message: "Message sent successfully.",
        tone: "success"
      });
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message right now.",
        tone: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-muted">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="input-executive"
              required
            />
          </label>
          <label className="space-y-2 text-sm text-muted">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="input-executive"
              required
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-muted">
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write a short message"
            className="input-executive min-h-36 resize-y"
            required
          />
        </label>
        <div className="flex flex-col gap-3">
          <Button as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <p
            className={`text-sm ${
              status.tone === "error" ? "text-red-500" : "text-accent"
            } ${status.message ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            {status.message || "Status message"}
          </p>
        </div>
      </form>
    </Card>
  );
}
