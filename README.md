# node-demo-charcounter-local

Character Counter Using Local Client-Server 

This is a simple Node.js demo of a client-server service that counts the number of characters (case-sensitive) in a user-input string. 

<ul>
<li>Start the server in a terminal, <code>node node-demo-charcounter-server.js</code></li>
<li>Run the client script with an arbitrary input string,<code>node node-demo-charcounter-client.js 'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.'</code></li>
<li>The server terminal window will then update with a character mapping of each character in the string, with the corresponding count of how many times each character occurred in the string.</li>
<li>Sending multiple strings to the server will aggregate a persistent count of characters.</li>
<li>Sending a reset command to the server will reset the character count, <code>node node-demo-charcounter-client.js 'RESET-CM'</code></li>
</ul>

![Alt text](screenshots/screenshot_node-charcounter-client.png?raw=true "Client")
![Alt text](screenshots/screenshot_node-charcounter-server.png?raw=true "Server")
