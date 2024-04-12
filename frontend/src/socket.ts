import io from "socket.io-client";

const URL = "http://localhost:3600/chat";

export const socket = io(URL);
