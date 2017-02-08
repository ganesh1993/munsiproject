/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('munsidb.db');
console.log(db);

var table_area = "CREATE TABLE IF NOT EXISTS AREA(" +
        " ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        " AREA_ID TEXT, "+
        " AREA_NAME TEXT, "+

        " CREATED_TS TEXT, " +
        " UPDATED_TS TEXT, " +
        " CREATED_BY INTEGER," +
        " UPDATED_BY INTEGER)";
       db.run(table_area);

 var table_combidetails = "CREATE TABLE IF NOT EXISTS COMBIDETAILS(" +
         " ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
         " CP_ID INTEGER, " +
         " COMBI_PROD_ID INTEGER, "+
         " SR TEXT, " +                //TODO
         " PROD_ID INTEGER, "+
         " PROD_DES TEXT, "+            //TODO
         " QUANTITY INTEGER, "+

         " CREATED_TS TEXT, " +
         " UPDATED_TS TEXT, " +
         " CREATED_BY INTEGER," +
         " UPDATED_BY INTEGER)";
      db.run(table_combidetails);

 var table_creategl = "CREATE TABLE IF NOT EXISTS CREATE_GL(" +
     " ID INTEGER PRIMARY KEY AUTOINCREMENT," +
     " C_DATE date," +
     " CUST_ID INTEGER," +
     " SRC_ENT TEXT," +                    //TODO
     " OP_QTY INTEGER," +
     " SUP_QTY INTEGER," +
     " RET_QTY INTEGER," +

     " CREATED_TS TEXT, " +
     " UPDATED_TS TEXT, " +
     " CREATED_BY INTEGER," +
     " UPDATED_BY INTEGER)";
      db.run(table_creategl);

 var table_dc = "CREATE TABLE IF NOT EXISTS DC(" +
        " ID INTEGER PRIMARY KEY AUTOINCREMENT," +
        " DC_NO INTEGER, " +
        " DC_DATE date, " +
        " CUST_CODE INTEGER, " +
        " O_NO INTEGER, " +
        " O_DATE, " +
        " AREA TEXT, " +
        " S_MAN TEXT, " +
        " VAN TEXT, " +
        " GROSS_TOT REAL, " +
        " SCHEME1_TOT REAL, " +
        " SCHEME2_Tot REAL, " +
        " DMG_TOT REAL, " +
        " DISC REAL, " +
        " AD REAL, " +
        " LS REAL," +
         "R_Off INTEGER," +
         "FINAL_AMT REAL," +
         "REMARKS TEXT," +
         "COLLECTION_TYPE TEXT," +
         "COLLECTION_DATE DATE," +
         "COLLECTION_AMT1 REAL," +
         "COLLECTION_AMT2 REAL," +
         "DEP_IN TEXT," +
         "CHQ_NO INTEGER," +
         "CHQ_DATE DATE," +
         "DRAWEE_BANK TEXT," +
         "BRANCH TEXT," +
         "CLEARING_DATE DATE," +

        " CREATED_TS TEXT, " +
        " UPDATED_TS TEXT, " +
        " CREATED_BY INTEGER," +
        " UPDATED_BY INTEGER)";
     db.run(table_dc);






db.close();
