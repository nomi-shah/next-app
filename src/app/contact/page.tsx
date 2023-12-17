import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div> Contact Us</div>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
            <ContactForm />
          </h2>
        </section>
      </div>
    </>
  );
}
