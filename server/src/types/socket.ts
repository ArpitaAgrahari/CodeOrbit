import { Socket } from "socket.io"

type SocketId = string

enum SocketEvent {
	JOIN_REQUEST = "join-request",
	JOIN_ACCEPTED = "join-accepted",
	USER_JOINED = "user-joined",
	USER_DISCONNECTED = "user-disconnected",
	SYNC_FILE_STRUCTURE = "Syncing-file-structure",
	DIRECTORY_CREATED = "Created your directory",
	DIRECTORY_UPDATED = "Updated your directory",
	DIRECTORY_RENAMED = "Renamed your directory",
	DIRECTORY_DELETED = "Deleted your directory",
	FILE_CREATED = "Created File",
	FILE_UPDATED = "Updated File",
	FILE_RENAMED = "Renamed File",
	FILE_DELETED = "Deleted File",
	USER_OFFLINE = "Offline",
	USER_ONLINE = "Online",
	SEND_MESSAGE = "Send Message",
	RECEIVE_MESSAGE = "Receive Message",
	TYPING_START = "typing-start",
	TYPING_PAUSE = "typing-pause",
	USERNAME_EXISTS = "username-exists",
	REQUEST_DRAWING = "Request to start drawing",
	SYNC_DRAWING = "syncing your drawing",
	DRAWING_UPDATE = "Drawing has been updated",
}

interface SocketContext {
	socket: Socket
}

export { SocketEvent, SocketContext, SocketId }
