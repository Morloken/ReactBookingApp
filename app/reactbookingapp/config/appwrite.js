import {Client, Databases, Acount, Storage } from node-appwrite;

//Admin client
const createAdminClient = async () => {

    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)//My API endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.NEXT_APPWRITE_KEY);

    return{
        get acount(){
            return new Acount(client);
        }

        ,get databases(){
            return new Databases(client);
        }

        ,get storage(){
            return new Storage(client);
        },
         

    };

};

const createSessionClient = async (section) => {


    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)//My API endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

    if(session){
        client.setSession(session);
    }
    return{
        get acount(){
            return new Acount(client);
        }

        ,get databases(){
            return new Databases(client);
        }

        
         

    };
};

export {createAdminClient, createSessionClient};