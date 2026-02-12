import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
    try {
        // Log the incoming request
        console.log("Processing contact form submission...");
        console.log("Email configuration:", {
            hasUser: !!process.env.NEXT_PUBLIC_EMAIL_USER,
            hasPass: !!process.env.NEXT_PUBLIC_APP_PASSWORD,
            userLength: process.env.NEXT_PUBLIC_EMAIL_USER?.length,
            passLength: process.env.NEXT_PUBLIC_APP_PASSWORD?.length,
        });
        
        const { name, email, message } = await req.json();
        console.log("Received data:", { name, email, messageLength: message?.length });
        
        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter with error handling
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
            },
        });

        // Verify transporter connection
        try {
            await transporter.verify();
            console.log("SMTP connection verified");
        } catch (error) {
            console.error("SMTP verification failed:", error);
            return NextResponse.json(
                { error: "Email service configuration error" },
                { status: 500 }
            );
        }

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
            replyTo: email,
            to: "arunabh.nd@gmail.com",
            subject: `Someone is contacting you: ${name}`,
            html: `
                        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                            <div style="padding: 20px; background-color: #3B3D65; color: #ffffff; text-align: center;">
                                <h1>New Contact Form Submission</h1>
                            </div>
                            <div style="padding: 30px; background-color: #ffffff;">
                                <p>Hello,</p>
                                <p>You have received a new contact form submission from your portfolio website.</p>
                                
                                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                                    <h2>Contact Details</h2>
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="font-weight: bold; color: #4B4D65;">Name:</td>
                                            <td>${name}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: bold; color: #4B4D65;">Email:</td>
                                            <td>${email}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: bold; color: #4B4D65;">Date:</td>
                                            <td>${new Date().toLocaleDateString()}</td>
                                        </tr>
                                    </table>
                                </div>
                                
                                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                                    <h2>Message</h2>
                                    <div style="background-color: #f5f5f5; padding: 30px; margin: 20px 0;">
                                        ${message.replace(/\n/g, '<br>')}
                                    </div>
                                </div>
                                
                                <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #6175F8; color: #ffffff; text-decoration: none; border-radius: 4px; margin-top: 15px;">Reply Now</a>
                                
                                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                                    <p>This is an automated notification from your portfolio website.</p>
                                </div>
                            </div>
                            <div style="padding: 15px; background-color: #1B1D35; color: #ffffff; text-align: center; font-size: 14px;">
                                <p>&copy; ${new Date().getFullYear()} Arunabh Bhattacharya. All rights reserved.</p>
                            </div>
                        </div>
            `,
        };

        // Send email with error handling
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", info.messageId);
            
            return NextResponse.json(
                { 
                    message: "Email sent successfully!",
                    messageId: info.messageId 
                },
                { status: 200 }
            );
        } catch (error) {
            console.error("Error sending email:", error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Request processing error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 