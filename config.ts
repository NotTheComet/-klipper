import config from 'node-config';
import * as fs from 'fs';
import * as path from 'path';


class config {

  public config = [];
	
	public constructor() {
		if (fs.existsSync('./config') == false ) { 
		  fs.mkdir('./config', (err) => {
			  if (err) {
				  console.log('could not make the dir directory');
			  }
		  });
	  } else {
			console.log('Config File loaded');
		}
	}

	public get(query: string) {
		return result 
	}
}