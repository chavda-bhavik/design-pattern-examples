// Facade pattern example
// ========================================================
// The Facade pattern provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

// Services from external sources/packages
class EmailService {
    constructor() {}
    sendEmail(email: string, message: string): void {
        console.log(`Sending email to ${email} with message: ${message}`);
    }
}
class SMSService {
    constructor() {}
    sendSMS(phone: string, message: string): void {
        console.log(`Sending SMS to ${phone} with message: ${message}`);
    }
}

// Facade
abstract class BaseProvider {
    abstract sendNotification(to:string, message: string): void;
}
class EmailProvider extends BaseProvider {
    emailService: EmailService;
    constructor() {
        super();
        this.emailService = new EmailService();
    }
    sendNotification(email: string, message: string): void {
        this.emailService.sendEmail(email, message);
    }
}
class SMSProvider extends BaseProvider {
    smsService: SMSService;
    constructor() {
        super();
        this.smsService = new SMSService();
    }
    sendNotification(to: string, message: string): void {
        this.smsService.sendSMS(to, message);
    }
}

// Application
class NotificationService {
    emailProvider: EmailProvider;
    smsProvider: SMSProvider;
    constructor() {
        this.emailProvider = new EmailProvider();
        this.smsProvider = new SMSProvider();
    }
    notify(type: 'email' | 'sms', to: string, message: string): void {
        if(type === 'email') {
            this.emailProvider.sendNotification(to, message);
        } else {
            this.smsProvider.sendNotification(to, message);
        }
    }
}

// Client
const notificationService = new NotificationService();
notificationService.notify('email', 'johndoe@gmail.com', 'Hello world!');
