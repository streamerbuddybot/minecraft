import WebSocket from "ws";
import { minecraftAPI } from "../classes/minecraft";
const WEBSOCKET_URL = "wss://panel.amrio.nl/api/servers/947aab94/ws";
const API_KEY = "ptlc_SLpPoygvtUV1rSKMGEAZHYjtp5YLD1Qm8n1ga4zi5RQ";

async function main() {
  //get websocket data
  const res = await minecraftAPI.websocket();

  const token = res.data.token;
  const socketUrl = res.data.socket;

  //create websocket connection
  const socket = new WebSocket(socketUrl);

  socket.on("open", () => {
    console.log("WebSocket connection established.");

    // Authenticate with the WebSocket server
    const authMessage = {
      event: "auth",
      args: [token],
    };
    socket.send(JSON.stringify(authMessage));
  });

  socket.on("message", (data) => {
    const message = JSON.parse(data.toString());

    // Handle different event types here
    switch (message.event) {
      case "auth success":
        console.log("Authenticated successfully.");
        // You can perform actions after successful authentication here
        break;
      case "status":
        console.log("Server status:", message.args[0]);
        break;
      case "console output":
        console.log("Console output:", message.args[0]);
        break;
      case "stats":
        // console.log("Server stats:", message.args[0]);
        break;
      case "token expiring":
        console.log("Token is expiring soon. Request a new one and send it to the WebSocket.");
        // Handle token refresh logic here
        break;
      case "token expired":
        console.log("Token has expired.");
        // Handle token refresh logic here
        break;
      default:
        console.log("Unknown event:", message.event);
    }
  });
}



main();