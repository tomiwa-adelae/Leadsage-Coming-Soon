import {
	email,
	instagramURL,
	linkedinURL,
	twitterURL,
	websiteURL,
} from "@/constants";
import { formatDate } from "@/lib/utils";
import { Inknut_Antiqua } from "next/font/google";

const inknut = Inknut_Antiqua({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const emailTemplate = (name: string) => `
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
      <p>Hi ${name},</p>
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

export const generateUserContactTemplate = (name: string) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Leadsage Africa Waitlist</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 3px solid #59B778;
    }
    .logo {
      font-weight: bold;
      font-size: 28px;
      color: #59B778;
    }
    .content {
      padding: 30px 20px;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #666666;
      border-top: 1px solid #eeeeee;
    }
    .button {
      display: inline-block;
      background-color: #59B778;
      color: white;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 4px;
      margin: 20px 0;
      font-weight: bold;
    }
    .social {
      margin-top: 20px;
    }
    .social a {
      margin: 0 10px;
      color: #59B778;
      text-decoration: none;
    }
    .highlight {
      color: #59B778;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">LEADSAGE AFRICA</div>
    </div>
    <div class="content">
      <h2>Thank You for Joining Our Waitlist!</h2>
      
      <p>Hello ${name},</p>
      
      <p>Thank you for your interest in <span class="highlight">Leadsage Africa</span> – we're excited to have you join our waitlist!</p>
      
      <p>We're building a revolutionary platform that will transform the housing market in Africa by connecting landlords and tenants in a seamless digital experience.</p>
      
      <p>As a waitlist member, you'll enjoy:</p>
      <ul>
        <li>Early access to our platform before the public launch</li>
        <li>Exclusive features and benefits reserved for our first users</li>
        <li>Regular updates on our progress and upcoming features</li>
        <li>The opportunity to provide feedback that shapes our platform</li>
      </ul>
      
      <p>We'll keep you informed about our development milestones and notify you as soon as Leadsage Africa is ready for you to explore.</p>
      
      <center><a href="${websiteURL}" class="button">LEARN MORE</a></center>
      
      <p>If you have any questions in the meantime, please don't hesitate to contact us at <a href="mailto:${email}">${email}</a>.</p>
      
      <p>Thank you for being part of our journey!</p>
      
      <p>Warm regards,<br>
      The Leadsage Africa Team</p>
    </div>
    <div class="footer">
      <div class="social">
        <a href="#">Twitter</a> | 
        <a href="#">Facebook</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">LinkedIn</a>
      </div>
      <p>© 2025 Leadsage Africa. All rights reserved.</p>
      <p>You're receiving this email because you signed up for updates on Leadsage Africa.<br>
      If you'd like to unsubscribe, <a href="#">click here</a>.</p>
    </div>
  </div>
</body>
</html>
`;

export const generateAdminContactTemplate = (
	name: string,
	email: string,
	createdDate: string
) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Registration - Leadsage Africa</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      text-align: center;
      padding: 15px 0;
      border-bottom: 3px solid #59B778;
    }
    .logo {
      font-weight: bold;
      font-size: 24px;
      color: #59B778;
    }
    .content {
      padding: 20px;
      line-height: 1.5;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #666666;
      border-top: 1px solid #eeeeee;
    }
    .user-details {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      margin: 15px 0;
    }
    .detail-row {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid #eeeeee;
    }
    .detail-label {
      font-weight: bold;
      width: 120px;
    }
    .button {
      display: inline-block;
      background-color: #59B778;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 4px;
      margin: 15px 0;
      font-weight: bold;
    }
    .stats {
      background-color: #e8f5e9;
      padding: 15px;
      border-radius: 4px;
      margin: 15px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">LEADSAGE AFRICA - ADMIN</div>
    </div>
    <div class="content">
      <h2>New Waitlist Registration</h2>
      
      <p>A new user has joined the Leadsage Africa waitlist.</p>
      
      <div class="user-details">
        <div class="detail-row">
          <div class="detail-label">Name:</div>
          <div>${name}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">Email:</div>
          <div>${email}</div>
        </div>
        <div class="detail-row">
          <div class="detail-label">Date/Time:</div>
          <div>${formatDate(createdDate)}</div>
        </div>
      </div>
      
      
      <p>You can respond directly to this user by replying to this email or through the admin dashboard.</p>
    </div>
    <div class="footer">
      <p>© 2025 Leadsage Africa. Internal notification - do not forward.</p>
      <p>To adjust your notification settings, visit the admin dashboard.</p>
    </div>
  </div>
</body>
</html>
`;
