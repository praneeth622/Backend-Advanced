# What I Learned Today: RPC, gRPC, and Protobuf (09-10-2025)

## 1. RPC (Remote Procedure Call)

- **Concept**: A way to call functions on another machine as if they were local.
- Used in distributed systems to simplify communication between services.
- Think of it like “function calls across the network.”

---

## 2. How RPC Differs from HTTP & JSON

| Concept | Role |
|--------|------|
| RPC    | A method of communication (function-based) |
| HTTP   | A protocol for sending data over the web    |
| JSON   | A data format (text-based, human-readable)  |

- RPC is a concept; HTTP and JSON are tools.
- RPC can use HTTP/JSON as a transport/data format, but it doesn't have to.

---

## 3. Alternatives to RPC

| Method           | Description |
|------------------|-------------|
| REST             | Resource-based (e.g., `GET /users/123`), uses HTTP & JSON |
| GraphQL          | Query-based, allows flexible responses |
| gRPC             | Function-based, uses HTTP/2 and Protobuf (modern RPC) |
| JSON-RPC / XML-RPC | Older RPC formats over HTTP using JSON/XML |

---

## 4. gRPC: A Modern RPC Framework

- Uses **HTTP/2** → faster, supports streaming and multiplexing.
- Uses **Protobuf** → compact, efficient binary serialization.
- Supports different types of RPCs:
  - **Unary** → one request, one response
  - **Server streaming** → one request, many responses
  - **Client streaming** → many requests, one response
  - **Bidirectional streaming** → both sides send data in real time

---

## 5. Protobuf (Protocol Buffers)

- A language-neutral binary serialization format.
- Smaller and faster than JSON.
- Used to define structured data via `.proto` files.

**Example message:**

```proto
message User {
  int32 id = 1;
  string name = 2;
}
```
## 6. Serialization

**Serialization** = converting data into a format for transmission (like packing a suitcase).

### Common Formats:
- JSON
- Protobuf
- XML

> **Note**: Protobuf is more compact but not human-readable.

---

## 7. Use Cases for gRPC

- Real-time apps: chat, video calls, gaming, IoT
- Backend services: microservices, low-latency APIs
- Situations needing **efficiency + streaming**

---

## 8. JS gRPC Example

You learned how to:

- Write a `.proto` file defining messages and services.
- Set up a gRPC server and client in Node.js.
- Use `@grpc/grpc-js` and `@grpc/proto-loader` for dynamic loading.
