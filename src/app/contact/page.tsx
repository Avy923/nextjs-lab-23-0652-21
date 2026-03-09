import { revalidatePath } from "next/cache";

export default function ContactPage() {
  async function submitContact(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    revalidatePath("/contact");
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      <form action={submitContact} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}