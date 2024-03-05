# NODE JS SERVER

## API ROUTES

> ROUTING TABLE
/*--------------------------------------------------------------------------------
  * WEB-PANEL ROUTES
  * /api/v1/ 
  *    SUBROUTES
  *      - DASHBOARD: 
  *        -WIDGETS
  *           -> dashboard/urlaub/widget/:typ/:ctoken
  *           -> dashboard/krank/widget/:typ/:ctoken
  *           -> dashboard/tage/widget/:typ/:ctoken
  *           -> dashboard/zeitkonto/widget/:typ/:ctoken -- TODO
  *        -TIMETRACKING
  *           -> dashboard/track/timetouch/:typ/:ctoken
  *      - ADMIN VERWALTUNG: 
  *        -STANDORTE
  *           -> controller/route/standort/:typ/:ctoken
  *           -> controller/route/standort/:typ/:stid/:ctoken
  *        -ABTEILUNGEN
  *           -> controller/route/abteilung/:typ/:stid/:ctoken
  *        -BEREICHE
  *           -> controller/route/bereiche/:typ/:stid/:ctoken
  *        -GRUPPEN
  *           -> controller/route/gruppen/:typ/:stid/:ctoken
  *        -TEAMS
  *           -> controller/route/teams/:typ/:stid/:ctoken
  *        -MITARBEITER
  *           -> controller/route/mitarbeiter/:typ/:stid/:ctoken
  *        -VETRÄGE
  *           -> controller/route/vertrag/:typ/:stid/:ctoken
  *        -TERMINAL
  *           -> controller/route/terminals/:typ/:stid/:ctoken
  *        -SETTINGS
  *           -> controller/route/einstellungen/:typ/:stid/:ctoken
  *      - PROFILE: 
  *           -> profile/route/header/:typ/:ctoken
  *      - WEBLOGIN: 
  *        -UNIT LOGIN 
  *           -> weblogin/route/unit/login/:uapi/:ltoken/:ctoken
  *           -> weblogin/route/unit/cryptlh/:ctoken 
  *      - UNIT ACTIVATION: 
  *        -ACTIVATE 
  *           -> start/route/activation/:token/:typ/:ctoken 
  *           -> start/route/verify/:token/:typ/:ctoken 
  *      - ENCRYPTION: 
  *        -JWTCHECK 
  *           -> keygen/route/check/:handshake/:token/:ctoken 
  *        -JWTCREATE 
  *           -> keygen/route/create/:token/:ctoken
  *        -RSA SHARED KEY 
  *           -> keygen/route/shared/:token/:ctoken 
  *      - ZEITERFASSUNG: -- TODO
  *      - URLAUBPLANNER: -- TODO
  *      - TICKETING: -- TODO
  *      - WIKI: -- TODO 
  *            
 *---------------------------------------------------------------------------------*/
| ---------------------------------------------------------------------------: |
|     WEB ROUTES
| ---------------------------------------------------------------------------: |
| ---------------------------------------------------------------------------: |
|     #ENCRYPTION
| ---------------------------------------------------------------------------------------------------------------: |
| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   GET  | /api/v1/keygen/route/check/:handshake/:token/:ctoken          | JWTCHECK                                |
|   GET  | /api/v1/keygen/route/create/:token/:ctoken                    | JWTCREATE                               |
|   GET  | /api/v1/keygen/route/shared/:token/:ctoken                    | RSA SHARED KEY                          |
| ---------------------------------------------------------------------------------------------------------------: |
|     #SIGNUP                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------: |
| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/signup/:ctoken                                        | SIGNUP                                  |
| ---------------------------------------------------------------------------------------------------------------: |
|     #UNIT ACTIVATION                                                                                             |
| ---------------------------------------------------------------------------------------------------------------: |
| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | /api/v1/start/route/activation/:token/:typ/:ctoken            | SIGNUP                                  |
|   POST | /api/v1/start/route/verify/:token/:typ/:ctoken                | Check Connector Token          |
|   POST | /api/v1/start/tage/widget/:typ/:ctoken | Check Connector Token          |
|   POST | /api/v1/dashboard/zeitkonto/widget/:typ/:ctoken | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
| ---------------------------------------------------------------------------: |
|     WEB ROUTES
| ---------------------------------------------------------------------------: |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST | /api/v1/ | Check Connector Token          |
|   POST |           /api/v1/ftcreate/:token | Create Connector Token         |
|   POST |              /api/v1/shKey/:token | Create Shared Encryption Token |
