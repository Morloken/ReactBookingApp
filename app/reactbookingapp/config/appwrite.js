import {Client, Databases, Account, Storage } from 'node-appwrite';

//Admin client
const createAdminClient = async () => {

    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)//My API endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

    return{
        get acount(){
            return new Account(client);
        }

        ,get databases(){
            return new Databases(client);
        }

        ,get storage(){
            return new Storage(client);
        },
         

    };

};

const createSessionClient = async (session) => {


    const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)//My API endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)

    if(session){
        client.setSession(session);
    }
    return{
        get acount(){
            return new Account(client);
        }

        ,get databases(){
            return new Databases(client);
        }

        
         

    };
};

export {createAdminClient, createSessionClient};