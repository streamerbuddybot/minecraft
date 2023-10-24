import * as grpc from "@grpc/grpc-js";
import {
minecraftResponse,
minecraftRequest,
minecraftServiceClient
} from "../proto/minecraft";
import * as config from "../config.json";
import handleEvent from "../functions/handleEvent";
// import { eventsub } from "../functions/handleEventsub";

const server = new grpc.Server();
const port = config.minecraft.port;
const host = config.minecraft.host;

async function grpcServer() {
  const serviceImpl = {
    SendEvent: async (call: grpc.ServerUnaryCall<minecraftRequest, minecraftResponse>, callback: grpc.sendUnaryData<minecraftResponse>) => {
      let data: any = call.request.toObject();
      if (!data) return callback(null, new minecraftResponse({ status: 401, responseMessage: "Missing channelID or songrequest data" }));      

      const message: string = await handleEvent(data);

      console.log(message);

      callback(null, new minecraftResponse({responseMessage: message, status: 200, statusMessage: "OK"}));
    },

  };
  server.addService(minecraftServiceClient.service, serviceImpl);
  server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start();
    console.log("server running on port", `${host}:${port}`);
  });
}

export default grpcServer;
