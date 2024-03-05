# NODE JS SERVER

## API ROUTES

> ROUTING TABLE 

/ *
* /api/v1/keygen/route/shared/:token/:ctoken 
* 

|     WEB ROUTES
| ---------------------------------------------------------------------------: | 

|     #ENCRYPTION 

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   GET  | /api/v1/keygen/route/check/:handshake/:token/:ctoken          | JWTCHECK                                |
|   GET  | /api/v1/keygen/route/create/:token/:ctoken                    | JWTCREATE                               |
|   GET  | /api/v1/keygen/route/shared/:token/:ctoken                    | RSA SHARED KEY                          |

|     #SIGNUP                                                                                                      

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/signup/:ctoken                                        | SIGNUP                                  |

|     #UNIT ACTIVATION                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   GET  | /api/v1/start/route/activation/:token/:typ/:ctoken            | ACTIVATE                                |
|   POST | /api/v1/start/route/verify/:token/:typ/:ctoken                | SET ROOT PASS                           |

|     #WEBLOGIN                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/weblogin/route/unit/login/:uapi/:ltoken/:ctoken       | CREDENTIAL CHECK                        |
|   POST | /api/v1/weblogin/route/unit/cryptlh/:ctoken                   | LINKHASH CHECK                          |

|     #PROFILE                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/profile/route/header/:typ/:ctoken                     | PROFILEHEADER                           | 

|     #DASHBOARD                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/dashboard/urlaub/widget/:typ/:ctoken                  | WIDGET URLAUB                           | 
|   POST | /api/v1/krank/widget/:typ/:ctoken                             | WIDGET JAHRESANSICHT                    | 
|   POST | /api/v1/dashboard/tage/widget/:typ/:ctoken                    | WIDGET MONATSANSICHT                    | 
|   POST | /api/v1/dashboard/zeitkonto/widget/:typ/:ctoken               | WIDGET ZEITKONTO (TODO)                 | 
|   POST | /api/v1/dashboard/track/timetouch/:typ/:ctoken                | TIMETRACKING INTERFACE                  | 

|     #ADMIN VERWALTUNG                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/controller/route/standort/:typ/:ctoken                | STANDORTE                               | 
|   POST | /api/v1/controller/route/standort/:typ/:stid/:ctoken          | STANDORTE                               | 
|   POST | /api/v1/controller/route/abteilung/:typ/:stid/:ctoken         | ABTEILUNGEN                             | 
|   POST | /api/v1/controller/route/bereiche/:typ/:stid/:ctoken          | BEREICHE                                | 
|   POST | /api/v1/controller/route/gruppen/:typ/:stid/:ctoken           | GRUPPEN                                 | 
|   POST | /api/v1/controller/route/teams/:typ/:stid/:ctoken             | TEAMS                                   | 
|   POST | /api/v1/controller/route/mitarbeiter/:typ/:stid/:ctoken       | MITARBEITER                             | 
|   POST | /api/v1/controller/route/vertrag/:typ/:stid/:ctoken           | VETRÄGE                                 | 
|   POST | /api/v1/controller/route/terminals/:typ/:stid/:ctoken         | TERMINAL                                | 
|   POST | /api/v1/controller/route/einstellungen/:typ/:stid/:ctoken     | SETTINGS                                | 

|     APP ROUTES
| ---------------------------------------------------------------------------: | 

|     #APP NORMAL TERMINAL                                                                                            

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/app/normal/terminal/login/:typ/:ctoken                | ACTIVATE,IMPORT,VERIFY                  | 
|   POST | /api/v1/app/normal/terminal/pin/:typ/:ctoken                  | PIN LOGIN                               |  

