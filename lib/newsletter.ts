export type NewsletterResponse = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(email: string): Promise<NewsletterResponse> {
  if (!EMAIL_REGEX.test(email.trim())) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Integrate with email service (e.g., ConvertKit, Mailchimp) here.
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "You're on the list! Expect curated insights soon.",
  };
}
