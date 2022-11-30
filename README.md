# Express API RESTFUL Builder

### Step 1: Clone the project ! 
>`git clone git@github.com:victorbusta/rest_api.git`<br>
`cd rest_api`

<br>

### Step 2: Run Docker Compose ! 
>`docker compose up`

<br>

### Step 3: Config ORM !

<br>

&emsp; To configure the orm, please modify the **orm.config.json** file to your needs

+ **orm.config.json** file structure :
> {<br>
&emsp;"tables": [<br>
&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;"name": string,<br>
&emsp;&emsp;&emsp;"parameters": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;"name": string,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;"type": string,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;"nullable": bool,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;"foreign_key": string<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;]<br>
&emsp;&emsp;},<br>
&emsp;]<br>
}

<br>

### Step 4: Build the API !

>`npm run init_orm  `