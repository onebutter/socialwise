#### fuzzy-enigma

##### Debugging
vscode debugger setting
```
{
  "name": "Attach",
  "type": "node",
  "protocol": "inspector",
  "request": "attach",
  "port": 5858,
  "address": "192.168.99.100",
  "restart": false,
  "sourceMaps": true,
  "smartStep": true,
  "localRoot": "${workspaceRoot}/reachaf_api/",
  "remoteRoot": "/app/"
}
```