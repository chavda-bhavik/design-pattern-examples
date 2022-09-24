// Command pattern example
// ========================================================
// The Command pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

// Services from external sources/packages
class EmailService1 {
    constructor() {}
    sendEmail(email: string, message: string): void {
        console.log(`Sending email to ${email} with message: ${message}`);
    }
}
class SMSService1 {
    constructor() {}
    sendSMS(phone: string, message: string): void {
        console.log(`Sending SMS to ${phone} with message: ${message}`);
    }
}

// Commands
abstract class BaseCommand {
    abstract execute(): void;
}
class EmailCommand extends BaseCommand {
    emailService: EmailService;
    email: string;
    message: string;
    constructor(email: string, message: string) {
        super();
        this.emailService = new EmailService();
        this.email = email;
        this.message = message;
    }
    execute(): void {
        this.emailService.sendEmail(this.email, this.message);
    }
}
class SMSCommand extends BaseCommand {
    smsService: SMSService;
    phone: string;
    message: string;
    constructor(phone: string, message: string) {
        super();
        this.smsService = new SMSService();
        this.phone = phone;
        this.message = message;
    }
    execute(): void {
        this.smsService.sendSMS(this.phone, this.message);
    }
}

// Invoker
class NotificationService1 {
    commands: BaseCommand[] = [];
    constructor() {}
    addCommand(command: BaseCommand): void {
        this.commands.push(command);
    }
    notify(): void {
        this.commands.forEach(command => {
            command.execute();
        });
    }
}

// Application
const notificationService1 = new NotificationService1();
notificationService1.addCommand(new EmailCommand('abc@gmail.com', 'Hello'));
notificationService1.addCommand(new SMSCommand('1234567890', 'Hello'));
notificationService1.notify();