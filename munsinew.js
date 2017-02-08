/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('munsidb.db');
console.log(db);

var table_area = "CREATE TABLE IF NOT EXISTS AREA(" +
        " ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        " AREA_ID text, "+
        " AREA_NAME text, "+

        " CREATED_TS text, " +
        " UPDATED_TS text, " +
        " CREATED_BY INTEGER," +
        " UPDATED_BY INTEGER)";
       db.run(table_area);

 var table_combidetails = "CREATE TABLE IF NOT EXISTS COMBIDETAILS(" +
         " ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
         " CP_ID INTEGER, " +
         " COMBI_PROD_ID INTEGER, "+
         " SR text, " +                //TODO
         " PROD_ID INTEGER, "+
         " PROD_DES text, "+            //TODO
         " QUANTITY INTEGER, "+

         " CREATED_TS text, " +
         " UPDATED_TS text, " +
         " CREATED_BY INTEGER," +
         " UPDATED_BY INTEGER)";
      db.run(table_combidetails);

 var table_creategl = "CREATE TABLE IF NOT EXISTS CREATE_GL(" +
     " ID INTEGER PRIMARY KEY AUTOINCREMENT," +
     " C_DATE date," +
     " CUST_ID INTEGER," +
     " SRC_ENT text," +                    //TODO
     " OP_QTY INTEGER," +
     " SUP_QTY INTEGER," +
     " RET_QTY INTEGER," +

     " CREATED_TS text, " +
     " UPDATED_TS text, " +
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
        " AREA text, " +
        " S_MAN text, " +
        " VAN text, " +
        " GROSS_TOT real, " +
        " SCHEME1_TOT real, " +
        " SCHEME2_Tot real, " +
        " DMG_TOT real, " +
        " DISC real, " +
        " AD real, " +
        " LS real, " +

        " CREATED_TS text, " +
        " UPDATED_TS text, " +
        " CREATED_BY INTEGER," +
        " UPDATED_BY INTEGER)";
     db.run(table_dc);




db.close();
