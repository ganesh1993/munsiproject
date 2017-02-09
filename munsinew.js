/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('munsidb.db');
console.log(db);

var table_area = "CREATE TABLE IF NOT EXISTS AREA(" +
        " ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        " AREA_ID               TEXT, "+
        " AREA_NAME             TEXT, "+

        " CREATED_TS            TEXT, " +
        " UPDATED_TS            TEXT, " +
        " CREATED_BY            INTEGER," +
        " UPDATED_BY            INTEGER)";
       db.run(table_area);

 var table_combidetails = "CREATE TABLE IF NOT EXISTS COMBIDETAILS(" +
         " ID                   INTEGER PRIMARY KEY AUTOINCREMENT, " +
         " CP_ID                INTEGER, " +
         " COMBI_PROD_ID        INTEGER, "+
         " SR                   TEXT, " +                //TODO
         " PROD_ID              INTEGER, "+
         " PROD_DES             TEXT, "+            //TODO
         " QUANTITY             INTEGER, "+

         " CREATED_TS           TEXT, " +
         " UPDATED_TS           TEXT, " +
         " CREATED_BY           INTEGER," +
         " UPDATED_BY           INTEGER)";
      db.run(table_combidetails);

 var table_creategl = "CREATE TABLE IF NOT EXISTS CREATE_GL(" +
         " ID                   INTEGER PRIMARY KEY AUTOINCREMENT," +
         " C_DATE               TEXT," +
         " CUST_ID              INTEGER," +
         " SRC_ENT              TEXT," +                    //TODO
         " OP_QTY               INTEGER," +
         " SUP_QTY              INTEGER," +
         " RET_QTY              INTEGER," +

         " CREATED_TS           TEXT, " +
         " UPDATED_TS           TEXT, " +
         " CREATED_BY           INTEGER," +
         " UPDATED_BY           INTEGER)";
      db.run(table_creategl);

 var table_dc = "CREATE TABLE IF NOT EXISTS DC(" +
         " ID                   INTEGER PRIMARY KEY AUTOINCREMENT," +
         " DC_NO                INTEGER, " +
         " DC_DATE              TEXT, " +
         " CUST_CODE            INTEGER, " +
         " O_NO                 INTEGER, " +
         " O_DATE               TEXT, " +
         " AREA                 TEXT, " +
         " S_MAN                TEXT, " +
         " VAN                  TEXT, " +
         " GROSS_TOT            REAL, " +
         " SCHEME1_TOT          REAL, " +
         " SCHEME2_Tot          REAL, " +
         " DMG_TOT              REAL, " +
         " DISC                 REAL, " +
         " AD                   REAL, " +
         " LS                   REAL," +
         " R_Off                INTEGER," +
         " FINAL_AMT            REAL," +
         " REMARKS              TEXT," +
         " COLLECTION_TYPE      TEXT," +
         " COLLECTION_DATE      TEXT," +
         " COLLECTION_AMT1      REAL," +
         " COLLECTION_AMT2      REAL," +
         " DEP_IN               TEXT," +
         " CHQ_NO               INTEGER," +
         " CHQ_DATE             TEXT," +
         " DRAWEE_BANK          TEXT," +
         " BRANCH               TEXT," +
         " CLEARING_DATE        TEXT," +

         " CREATED_TS           TEXT, " +
         " UPDATED_TS           TEXT, " +
         " CREATED_BY           INTEGER," +
         " UPDATED_BY           INTEGER)";
     db.run(table_dc);

  var table_dcdetails = "CREATE TABLE IF NOT EXISTS DC_DETAILS(" +
              " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
              " DCD_            Id INTEGER," +
              " DC_NO           INTEGER," +
              " SR_NO           INTEGER," +
              " PROD_CODE       TEXT," +
              " PROD_DES        TEXT," +
              " PACKAGING       TEXT," +
              " RATE            REAL," +
              " QTY             INTEGER," +
              " BOX             INTEGER," +
              " FREE            INTEGER," +
              " SCH1            REAL," +
              " SCHEME1         REAL," +
              " SCH2            REAL," +
              " SCHEME2         REAL," +
              " REPL            INTEGER," +
              " DMG             INTEGER," +
              " DMG_MRP         REAL," +
              " DMG_AMT         REAL," +
              " AMOUNT          REAL," +
              " BATCH_NO        INTEGER," +
              " MRP             REAL," +
              " RET_QTY         INTEGER," +

              " CREATED_TS      TEXT, " +
              " UPDATED_TS      TEXT, " +
              " CREATED_BY      INTEGER," +
              " UPDATED_BY      INTEGER)";
          db.run(table_dcdetails);

     var table_dcpurdetails = "CREATE TABLE IF NOT EXISTS DCPUR_DETAILS(" +
                 " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
                 " PURD_ID         INTEGER," +
                 " PUR_ID          INTEGER," +
                 " SR_NO           INTEGER," +
                 " PROD_CODE       TEXT," +
                 " PROD_DES        TEXT," +
                 " RATE            REAL," +
                 " BOX             INTEGER," +
                 " QTY             INTEGER," +
                 " TAX             REAL, " +
                 " FREE            INTEGER," +
                 " SCH1            REAL," +
                 " SCHEME1         REAL," +
                 " SCH2            REAL," +
                 " SCHEME2         REAL," +
                 " AMOUNT          REAL," +
                 " TAX_AMT         REAL," +
                 " BATCH_NO        INTEGER," +

                 " CREATED_TS      TEXT, " +
                 " UPDATED_TS      TEXT, " +
                 " CREATED_BY      INTEGER," +
                 " UPDATED_BY      INTEGER)";
          db.run(table_dcpurdetails);


          var table_disp = "CREATE TABLE IF NOT EXISTS DISP(" +
                 " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
                 " DISP_ID         INTEGER, " +
                 " DISP_DETAILS    TEXT" +
                 " CREATED_TS      TEXT, " +
                 " UPDATED_TS      TEXT, " +
                 " CREATED_BY      INTEGER," +
                 " UPDATED_BY      INTEGER)";
          db.run(table_disp);

          var table_gl = "CREATE TABLE IF NOT EXISTS GL(" +
                   " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
                   " GL_ID           INTEGER, " +
                   " GL_DATE         TEXT, " +
                   " GL_TO           TEXT, " +     //TODO
                   " S_REF           INTEGER, " +
                   " P_REF           INTEGER, " +
                   " AMOUNT          REAL, " +
                   " SRC_ENT         TEXT, " +           //TODO
                   " CLEARING        TEXT, " +
                   " CHQ_DATE        TEXT, " +
                   " REMARKS1        TEXT," +
                   " REMARKS2        TEXT, " +
                   " SP_REF          INTEGER, " +
                   " NOS             INTEGER, " +
                   " CREATED_TS      TEXT, " +
                   " UPDATED_TS      TEXT, " +
                   " CREATED_BY      INTEGER," +
                   " UPDATED_BY      INTEGER)";
              db.run(table_gl);


           var table_dcpmdetails = "CREATE TABLE IF NOT EXISTS DCPM_DETAILS(" +
                   " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
                   " DCPMD_ID        INTEGER, " +
                   " PUR_ID          INTEGER, " +
                   " SR_NO           INTEGER, " +
                   " PROD_CODE       TEXT, " +
                   " SIZE            INTEGER, " +              //TODO
                   " RATE            REAL, " +
                   " Qty             INTEGER, " +
                   " Free            TEXT, " +              //TODO
                   " REPL            TEXT, " +              //TODO
                   " PUR_DATE        TEXT, " +
                   " SUP_NAME        TEXT, " +
                   " INV_NO          INTEGER, " +
                   " GROSS_TOT       REAL, " +
                   " SCHEME1         TEXT, " +
                   " SCHEME2         TEXT, " +
                   " OCT_FRGHT       INTEGER, " +
                   " APMC            TEXT, " +               //TODO
                   " CREDIT_AMT      REAL, " +
                   " DISC            REAL, " +
                   " TAX_AMT         REAL, " +
                   " AD_AMT          REAL, " +
                   " LS              REAL, " +
                   " R_OFF           INTEGER, " +
                   " FIN_AMT,         REAL, " +
                   " REMARKS          TEXT, " +
                   " TAX_AGAINST      TEXT, " +
                   " X1" +                                     //TODO
                   " X3" +                                      //TODO
                   " X4" +                                      //TODO
                   " X4" +                                      //TODO
                   " CREATED_TS      TEXT, " +
                   " UPDATED_TS      TEXT, " +
                   " CREATED_BY      INTEGER," +
                   " UPDATED_BY      INTEGER)";
               db.run(table_dcpmdetails);









db.close();
