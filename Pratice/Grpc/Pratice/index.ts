import path from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/a.js';

//import express from 'express';

// load the protobuf
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition)as unknown) as ProtoGrpcType;

// in memory db
const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
      name: "raman",
      age: 45
    },
];


// call -> res
//callback -> res.json()
// addPerson -> /addPerson
//@ts-ignore
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
}

//const app = express();
const server = new grpc.Server();


//app.use('/addPerson', addPerson);
server.addService((personProto.AddressBookService).service, { addPerson: addPerson });

//app.listen(50051, () => console.log('Server running on port 50051'));
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});