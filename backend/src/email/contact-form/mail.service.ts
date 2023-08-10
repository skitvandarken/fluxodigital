import { Injectable } from '@nestjs/common';
import { MailService } from '@nestjs/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mail: MailService) {}

  async sendEmail(to: string, subject: string, message: string) {
    const email = await this.mail.send({
      to,
      from: 'noreply@example.com',
      subject,
      message,
    });

    if (email.success) {
      console.log('Email sent successfully');
    } else {
      console.log('Error sending email');
    }
  }
}
