// Singleton Pattern example
// ================================================================================================================
// mongoose implementation

interface IObjectType {
    [key: string]: any;
}
interface IInstanceType {
    connected: boolean;
    close: () => void;
}
class mongoose {
    models:IObjectType = {};
    private instance?: IInstanceType;
    
    constructor() {
        this.connect = this.connect.bind(this);
        this.model = this.model.bind(this);
    }

    connect() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = {
            connected: true,
            close: () => {
                this.instance!.connected = false;
            }
        };
        return this.instance;
    }

    model(name: string, schema: any) {
        if(this.models[name]) {
            return this.models[name];
        }
        this.models[name] = schema;
        return schema;
    };
}

// Application
const { connect, model, models } = new mongoose();
const connection = connect();
const userSchema = model('User', { name: String });
const User = models.User;
console.log(connection);
console.log(userSchema);
console.log(User);
connection.close();
console.log(connection);
