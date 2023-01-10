import path from 'path';
import os from 'os';
import fs from 'fs';

export class manager {

  public nodes = []; 
	
	
	public constructor() {
		
	}

	private SaveNode(node: JSON) {

		const configFile = '../config/nodes.json';
		var data: string;
		

    if (fs.existsSync(configFile) == true) {
			fs.appendFile(configFile, data, (err) => {
				
			});
			
		} else {
			fs.writeFileSync(configFile, ' ');
		}
		
	  console.log("saving connection data");
	  return status;
	}

  private LoadNodes() {
		return status;
	}
}