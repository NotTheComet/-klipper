import express from "express";
import path from "path";

const port = 3666;

const app = express();

app.get('/', (req, res) => {
	res.send("<h3>yay</h3>")
});

app.get('/api/:apikey/:apiquery', (req, res) => {
	req.params.apiquery
	req.params.apikey
	

});

app.listen(port, () => {
  console.log("Started the Service");
});