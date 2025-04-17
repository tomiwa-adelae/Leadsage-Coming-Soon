import { instagramURL, linkedinURL, twitterURL, websiteURL } from "@/constants";
import { Inknut_Antiqua } from "next/font/google";

const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const emailTemplate = () => `
    <!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Leadsage</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333333;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff;
        padding: 40px 30px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      }
      .logo {
        text-align: center;
        margin-bottom: 20px;
      }
      .logo img {
        max-width: 120px;
      }
      h1 {
        color: #204b41;
      }
      .btn {
        display: inline-block;
        background-color: #204b41;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #888888;
        margin-top: 30px;
      }
      .socials a {
        margin: 0 8px;
        text-decoration: none;
        color: #204b41;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <h3 className={'uppercase font-semibold text-2xl lg:text-3xl text-primary hover:text-primary/90 transition ease-out ${inknut.className}}>
            <Link href={"/"}>Leadsage</Link>
        </h3>
      </div>
      <h1>You're on the waitlist</h1>
      <p>Hi there,</p>
      <p>
        Thank you for joining the <strong>Leadsage</strong> waitlist — we're thrilled to have you on board!
      </p>
      <p>
        Leadsage is a smarter way to find, book, and manage rental properties. Whether you're a renter or a landlord, we’re building something exciting just for you.
      </p>
      <ul>
        <li>✅ Early access to our platform</li>
        <li>✅ Be the first to test new features</li>
        <li>✅ Behind-the-scenes updates on our launch</li>
      </ul>

      <p>
        We’ll keep you posted as we get closer to launch. Until then, feel free to reply to this email — we’d love to know what brought you here.
      </p>

      <a class="btn" href="${websiteURL}" target="_blank">Visit Website</a>

      <div class="footer">
        <p>Stay connected:</p>
        <div class="socials">
          <a href="${twitterURL}" target="_blank">Twitter</a> |
          <a href="${instagramURL}" target="_blank">Instagram</a> |
          <a href="${linkedinURL}" target="_blank">LinkedIn</a>
        </div>
        <p style="margin-top: 20px;">&copy; 2025 Leadsage. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`;
