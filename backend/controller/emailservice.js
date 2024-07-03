// email.js
//for confirmation email
            import nodemailer from 'nodemailer';

            const transporter = nodemailer.createTransport({
                service: 'gmail', 
                auth: {
                    user: 'example@gmail.com',
                    pass: 'your password'
                }
            });

            export const sendEmail = async (to, subject, html) => {
                try {
                    await transporter.sendMail({
                        from: 'MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM <joeljohnson9873@gmail.com>',
                        to,
                        subject,
                        html
                    });
                    console.log('Email sent successfully');
                } catch (error) {
                    console.error('Error sending email:', error);
                }
            };

            export default transporter;
