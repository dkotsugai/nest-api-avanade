import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {

    async sendEmail(to: string, subject: string, msg: string, options: object) {
        const clientID = process.env.CLIENT_ID;
        const secretKey = process.env.SECRET_KEY;
        const refreshToken = process.env.REFRESH_TOKEN;
        const redirectURI = 'https://developers.google.com/oauthplayground';
        const OAuth2 = google.auth.OAuth2;

        const oauth2Client = new OAuth2(clientID, secretKey, redirectURI);

        oauth2Client.setCredentials({ refresh_token: refreshToken });

        const accessToken = oauth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            logger: false,
            debug: false,
            auth: {
                type: 'OAuth2',
                user: 'dkotsugai@gmail.com',
                clientId: clientID,
                clientSecret: secretKey,
                refreshToken: refreshToken,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: 'dkotsugai@gmail.com',
            to: to,
            subject: subject,
            html:`
            Enviando e-mail com Node.js + Gmail + NestJS + OAuth2
            <h1>${msg}</h1>
            `,
        };

        try {
            const result = await transport.sendMail(mailOptions);
            if (!result) {
                return { message: 'Mensagem enviado com sucesso' };
            }   else{
                return { message:  "Erro ao enviar e-mail" };
            }

        } catch (error) {
            return { message: error.message };
        }
    }
}
