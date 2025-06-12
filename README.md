Install docker, then run `docker compose up --watch`. Initial build is a bit slow 
but generally you should be able to keep compose running in the background without
trouble.

## Networking
you can access the backend/frontend from within the network by referring to their
service name. However, if you're interacting with the database directly from the
client, you need to call the hostname *from the client's perspective* (localhost,
since it's not in the container network):

```ts
try {
    const response = await fetch("http://localhost:3000/");
    if (!response.ok) {
        // ... error handling ...
    }

    const text = response.text();
    // ... do things with the text ...

} catch (error) {
    console.error(error.message);
}
```
For more on docker compose networking, check out [Networking in Compose](https://docs.docker.com/compose/how-tos/networking/). 

## "local" db
this seems interesting as a way to get to semi-offline functionality:
```html
<script src="jswasm/sqlite3.js"></script>
```