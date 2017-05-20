## CircleCIArtifactProvider
Allows to directly download artifacts from circle ci.

Accessible at [https://FelixGail.github.io/CircleCIArtifactProvider/index.html](https://FelixGail.github.io/CircleCIArtifactProvider/index.html)

### Usage
Add parameters to github.io url.

| Parameter 	| Value                                                                                             	| required? 	|
|-----------	|---------------------------------------------------------------------------------------------------	|-----------	|
| vcs-type  	| either github or bitbucket                                                                        	| yes       	|
| user      	| your username (e.g. FelixGail)                                                                    	| yes       	|
| project   	| your project name (e.g. CircleCIArtifactProvider)                                                 	| yes       	|
| build     	| circle-ci build number or latest                                                                  	| yes       	|
| token     	| a token with read permissions for artifacts.  **Project Settings -> API Permissions**             	| yes       	|
| branch    	| Provide a project branch                                                                          	| no        	|
| filter    	| Filter the build status ("completed", "successful", "failed")                                     	| no        	|
| path      	| Provide an artifact path (e.g. /tmp/artifacts.zip). Takes first artifact in array if non provided 	| no        	|

##### URL
```
https://FelixGail.github.io/CircleCIArtifactProvider/index.html?[PARAM1]=[VALUE1]&[PARAM2]=[VALUE2] (...)
```