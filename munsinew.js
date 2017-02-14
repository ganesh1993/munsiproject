/**
 * Created by lenovo on 08/02/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('munsidb.db');
console.log(db);

       /* var table_area = "CREATE TABLE IF NOT EXISTS AREA(" +
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


         var table_dcsmdetails = "CREATE TABLE IF NOT EXISTS DCSM_DETAILS(" +
                     " ID              INTEGER PRIMARY KEY AUTOINCREMENT," +
                     " DCSMD_ID        INTEGER, " +
                     " DC_NO           INTEGER, " +
                     " SR_NO           INTEGER, " +
                     " PROD_CODE       INTEGER, " +
                     " SIZE            INTEGER, " +
                     " RATE            REAL, " +
                     " QTY             INTEGER, " +
                     " FREE            TEXT, " +
                     " REPL            TEXT," +
                     " DMG             REAL, " +
                     " DMG_MRP         REAL, " +
                     " DMG_AMT         REAL," +
                     " RET_QTY         INTEGER, " +

                     " CREATED_TS      TEXT, " +
                     " UPDATED_TS      TEXT, " +
                     " CREATED_BY      INTEGER," +
                     " UPDATED_BY      INTEGER)";
               db.run(table_dcsmdetails);


          var table_invoice = "CREATE TABLE IF NOT EXISTS INVOICE(" +
                      " ID                  INTEGER PRIMARY KEY AUTOINCREMENT," +
                      " INV_NO              INTEGER, " +
                      " INV_DATE            TEXT, " +       //TODO
                      " CUST_CODE           TEXT, " +
                      " ORDER_NO            INTEGER, " +     //TODO
                      " ORDER_DATE          TEXT, " +          //TODO
                      " AREA                TEXT, " +
                      " SALESMAN            TEXT, " +         //TODO
                      " VAN                 TEXT, " +
                      " GROSS_TOT           REAL, " +
                      " SCHEME1_TOT         TEXT, " +
                      " SCHEME2_TOT         TEXT, " +
                      " TAX_TOT             REAL, " +
                      " DMG_TOT             REAL, " +
                      " DISC                REAL, " +
                      " DISC_AMT            REAL, " +
                      " AD_AMT              REAL, " +
                      " LS                  REAL, " +
                      " R_OFF               INTEGER, " +
                      " FIN_AMT,            REAL, " +
                      " REMARKS             TEXT, " +
                      " TAX_AGAINST         TEXT, " +
                      " X1" +                                     //TODO
                      " X3" +                                      //TODO
                      " X4" +                                      //TODO
                      " X4" +                                      //TODO
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
                    db.run(table_invoice);*/


            var table_invoice2 = "CREATE TABLE IF NOT EXISTS INVOICE2(" +
                        " ID              INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        " INVD_Id         INTEGER, " +
                        " INV_NO          INTEGER, " +
                        " SR_NO           INTEGER, " +
                        " PROD_CODE       TEXT,  " +
                        " PROD_DES        TEXT, " +
                        " PACKAGING       TEXT, " +
                        " RATE            REAL, " +
                        " QTY             INTEGER, " +
                        " BOX             INTEGER, " +
                        " FREE            INTEGER, " +
                        " SCH1            REAL, " +
                        " SCHEME1         REAL, " +
                        " SCH2            REAL, " +
                        " SCHEME2         REAL, " +
                        " REPL            INTEGER, " +
                        " DMG             INTEGER, " +
                        " DMG_MRP         REAL, " +
                        " DMG_AMT         REAL, " +
                        " AMOUNT          REAL, " +
                        " TAX             REAL, " +
                        " TAX_AMT         REAL, " +
                        " BATCH_NO        INTEGER, " +
                        " MRP             REAL, " +
                        " RET_QTY         INTEGER, " +

                        " CREATED_TS      TEXT, " +
                        " UPDATED_TS      TEXT, " +
                        " CREATED_BY      INTEGER, " +
                        " UPDATED_BY      INTEGER)";
                     db.run(table_invoice2);


                     var table_invdetails2 = "CREATE TABLE IF NOT EXISTS INV_DETAILS2(" +
                         " ID              INTEGER PRIMARY KEY AUTOINCREMENT, " +
                         " INV_DETAILS2    TEXT, " +
                         " INV_NO          INTEGER, " +
                         " INV_DATE        TEXT, " +
                         " DISP_CODE       INTEGER, " +
                         " DISP_AMT        REAL, " +

                         " CREATED_TS      TEXT, " +
                         " UPDATED_TS      TEXT, " +
                         " CREATED_BY      INTEGER, " +
                         " UPDATED_BY      INTEGER)";
                         db.run(table_invdetails2);


                           var table_invmdetails = "CREATE TABLE IF NOT EXISTS INVM_DETAILS(" +
                               " ID              INTEGER PRIMARY KEY AUTOINCREMENT , " +
                               " INVMD_ID        INTEGER, " +
                               " NV_NO           INTEGER, " +
                               " SR_NO           INTEGER, " +
                               " PROD_CODE       TEXT,  " +
                               " SIZE            INTEGER, " +
                               " RATE            REAL, " +
                               " QTY             INTEGER, " +
                               " FREE            INTEGER, " +
                               " REPL            INTEGER, " +
                               " DMG             INTEGER, " +
                               " DMG_MRP         REAL, " +
                               " DMG_AMT         REAL, " +
                               " AMOUNT          REAL, " +
                               " CREATED_TS      TEXT, " +
                               " UPDATED_TS      TEXT, " +
                               " CREATED_BY      INTEGER, " +
                               " UPDATED_BY      INTEGER)";
                         db.run(table_invmdetails);



                        var table_invNo = "CREATE TABLE IF NOT EXISTS INV_NO(" +
                              " ID               INTEGER PRIMARY KEY AUTOINCREMENT , " +
                              " INV_NO           INTEGER, "+
                              " InvMessage       TEXT, "+

                              " CREATED_TS       TEXT, " +
                              " UPDATED_TS       TEXT, " +
                              " CREATED_BY       INTEGER, " +
                              " UPDATED_BY       INTEGER)";
                          db.run(table_invNo);


                        var table_payC = "CREATE TABLE IF NOT EXISTS PAYC( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PAY_C               INTEGER, " +
                            "P_DATE              TEXT, " +
                            "PC_BY               TEXT, " +
                            "PC_TO               TEXT, " +
                            "AMT                 REAL, " +
                            "PAY_REF             TEXT, " +                     // TODO
                            "PAY_SLIP            TEXT, " +
                            "CHQ_NO               INTEGER, " +
                            "CHQ_DATE             INTEGER, " +
                            "BANK                 TEXT, " +
                            "BACH                TEXT, " +
                            "RMK1                TEXT, " +
                            "RMK2                TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_payC);


                        var table_po = "CREATE TABLE IF NOT EXISTS PUR_ORDER( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PO_NO               INTEGER, " +
                            "PO_DATE             TEXT, " +
                            "SUP_NAME              TEXT, " +
                            "INV_NO              TEXT, " +
                            "GROSS_TOT           REAL, " +
                            "SCHEME1             REAL, " +
                            "SCHEME2             REAL, " +
                            "OCT_FRGHT           TEXT, " +                     // TODO
                            "AP_MC               REAL, " +
                            "CR_AMT              REAL, " +
                            "DISC                REAL, " +
                            "TAX_AMT             REAL, " +
                            "AD                  REAL, " +
                            "LS                  REAL, " +
                            "R_OFF               INTEGER, " +
                            "FIN_AMT             REAL, " +
                            "REMARKS             TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_po);


                        var table_poDetail = "CREATE TABLE IF NOT EXISTS PO_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "POD_ID              INTEGER, " +
                            "PO_NO               INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROD_CODE           TEXT, " +                     // TODO
                            "PROD_DES            TEXT, " +
                            "RATE                REAL, " +
                            "BOX                 INTEGER, " +
                            "QTY                 INTEGER, " +
                            "TEX                 REAL, " +
                            "FREE                INTEGER, " +
                            "SCH1                REAL, " +
                            "SCHEME1             REAL, " +
                            "SCH2                REAL, " +
                            "SCHEME2             REAL, " +
                            "AMT                 REAL, " +
                            "TEX_AMT             REAL, " +
                            "BATCH_NO            TEXT, " +                     // TODO
                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_poDetail);


                        var table_pomDetail = "CREATE TABLE IF NOT EXISTS POM_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "POMD_ID             INTEGER, " +
                            "PO_NO               INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROD_CODE           TEXT, " +                     // TODO
                            "SIZE                TEXT, " +                     // TODO
                            "RATE                REAL, " +
                            "QTY                 INTEGER, " +
                            "FREE                INTEGER, " +
                            "REPL                INTEGER, " +                   // TODO
                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_pomDetail);


                        var table_prevRate = "CREATE TABLE IF NOT EXISTS PREV_RATE( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PR_ID               INTEGER, " +
                            "SAC_ID              TEXT, " +
                            "PROD_CODE           TEXT, " +                     // TODO
                            "BATCH_NO            INTEGER, " +                     // TODO
                            "MRP                 REAL, " +
                            "S_RATE              REAL, " +
                            "FREE                INTEGER, " +
                            "REPL                INTEGER, " +                   // TODO

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_prevRate);


                        var table_prod = "CREATE TABLE IF NOT EXISTS PROD( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PROD_ID             INTEGER, " +
                            "DESCRIPTION         TEXT, " +
                            "WEIGHT              REAL, " +                 //TODO
                            "PRODM_GROUP         TEXT, " +
                            "PRODS_GROUP         TEXT, " +
                            "SALE_UNIT           INTEGER, " +                 // TODO
                            "PUR_UNIT            INTEGER, " +                 // TODO
                            "PACK                INTEGER, " +
                            "OUTER               INTEGER, " +
                            "VAT_TYPE            REAL, " +
                            "APMC                REAL, " +
                            "PACKAGING           TEXT, " +                     // TODO
                            "OP_STOCK            REAL, " +                     // TODO
                            "BATCH_NO            INTEGER, " +
                            "MRP                 REAL, " +
                            "S_RATE              REAL, " +
                            "P_RATE              REAL, " +
                            "MARGIN              REAL, " +
                            "P_LOCK              TEXT, " +
                            "MIN_QTY             INTEGER, " +
                            "MFG_DATE            TEXT, " +
                            "EXP_DATE            TEAT, " +
                            "X1                  TEXT, " +
                            "X2                  TEXT, " +
                            "X3                  TEXT, " +
                            "X4                  TEXT, " +
                            "X5                  TEAT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_prod);


                        var table_prodLoc = "CREATE TABLE IF NOT EXISTS PROD_LOC( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PROD_LOC            TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_prodLoc);



                        var table_prodmGroup = "CREATE TABLE IF NOT EXISTS PRODM_GROUP( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PRODM_ID            INTEGER, " +
                            "MAIN_GROUP          TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_prodmGroup);


                        var table_prodsGroup = "CREATE TABLE IF NOT EXISTS PRODS_GROUP( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PRODS_ID            INTEGER, " +
                            "PRODS_GROUP         TEXT, " +
                            "PRODM_GROUP         TEXT, " +
                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_prodsGroup);


                        var table_pur = "CREATE TABLE IF NOT EXISTS PURCHASE( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PUR_ID              INTEGER, " +
                            "P_DATE              TEXT, " +
                            "S_NAME              TEXT, " +
                            "INV_NO              INTEGER, " +
                            "GROSS_TOT           REAL, " +
                            "SCHEME1             REAL, " +
                            "SCHEME2             REAL, " +
                            "OCT_FRGHT           TEXT, " +                  // TODO
                            "APMC                REAL, " +
                            "CR_AMT              REAL, " +
                            "DISC                REAL, " +
                            "TEX_AMT             REAL, " +
                            "AD                  REAL, " +
                            "LS                  REAL, " +
                            "R_OFF               INTEGER, " +
                            "FIN_AMT             REAL, " +
                            "REMARKS             TEXT, " +
                            "TEXT_AGAINST        REAL, " +
                            "X1                  TEXT, " +
                            "X2                  TEXT, " +
                            "X3                  TEXT, " +
                            "X4                  TEXT, " +
                            "X5                  TEXT, " +
                            "PAID_AMT            REAL, " +
                            "REF                 INTEGER, " +
                            "PAID_AMT1           REAL, " +
                            "PAY_TYPE            TEXT, " +
                            "PAY_DATE            TEXT, " +
                            "BANK_NAME           TEXT, " +
                            "CH_NO               INTEGER, " +
                            "CH_DATE             TEXT, " +
                            "PO_NO               INTEGER, " +
                            "PO_DATE             TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_pur);


                        var table_purDetail = "CREATE TABLE IF NOT EXISTS PUR_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PURD_ID             INTEGER, " +
                            "PUR_ID              INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROCODE             INTEGER, " +                // TODO
                            "PROD_DES            TEXT, " +
                            "RATE                REAL, " +
                            "BOX                 INTEGER, " +
                            "QTY                 REAL, " +                  // TODO
                            "TEX                 REAL, " +
                            "FREE                INTEGER, " +
                            "SCH1                REAL, " +
                            "SCHEME1             REAL, " +
                            "SCH2                REAL, " +
                            "SCHEME2             REAL, " +
                            "AMT                 REAL, " +
                            "TEX_AMT             REAL, " +
                            "BATCH_NO            INTEGER, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_purDetail);


                        var table_purmDetail = "CREATE TABLE IF NOT EXISTS PURM_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "PURMD_ID             INTEGER, " +
                            "PUR_ID              INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROD_CODE           TEXT, " +                // TODO
                            "SIZE                INTEGER, " +
                            "RATE                REAL, " +
                            "QTY                 REAL, " +                  // TODO
                            "FREE                INTEGER, " +              // TODO
                            "REPL                REAL, " +
                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_purmDetail);


                        var table_remarks = "CREATE TABLE IF NOT EXISTS REMARKS( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "REMARKS             TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_remarks);
                      var i_remark = "INSERT INTO REMARKS(ID,CREATED_BY,UPDATED_BY,CREATED_TS,UPDATED_TS) VALUES('Good Service',11,10,'CURRENT_TIMESTAMP','11' )";
                                    db.run(i_remark);

                        var table_sac = "CREATE TABLE IF NOT EXISTS SAC( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SAC_ID              INTEGER, " +
                            "MAC_ID              TEXT, " +
                            "S_NAME              TEXT, " +
                            "S_ADD1              TEXT, " +
                            "S_ADD2              TEXT, " +
                            "S_ADD3              TEXT, " +
                            "CITY                TEXT, " +
                            "PIN                 INTEGER, " +
                            "TEL1                INTEGER, " +
                            "TEL2                INTEGER, " +
                            "EMAIL               TEXT, " +
                            "CONTACT             TEXT, " +
                            "MRP                 REAL, " +
                            "KEY                 TEXT, " +                     //TODO
                            "AREA                TEXT, " +
                            "CATEGORY            TEXT, " +                    //TODO
                            "DISCOUNT            REAL, " +
                            "CREDIT_DAYS         INTEGER, " +
                            "CREDIT_LIMIT        REAL, " +
                            "VAT                 INTEGER, " +
                            "CST                 INTEGER, " +
                            "CESS                INTEGER, " +
                            "DL1                 INTEGER, " +
                            "DL2                 INTEGER, " +
                            "DL3                 INTEGER, " +
                            "FASSAI_NO           INTEGER, " +
                            "FL                  INTEGER, " +
                            "REMARK              TEXT, " +
                            "OP_BEL              REAL, " +
                            "DB_AMT              REAL, " +
                            "CR_AMT              REAL, " +
                            "BANK                TEXT, " +
                            "BRANCH              TEXT, " +
                            "X1                  TEXT, " +
                            "X2                  TEXT, " +
                            "X3                  TEXT, " +
                            "X4                  TEXT, " +
                            "X5                  TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_sac);


                        var table_sMan = "CREATE TABLE IF NOT EXISTS SMAN( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SM_ID               INTEGER, " +
                            "SALES_MAN           TEXT, " +
                            "SLSM_ID             TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_sMan);


                        var table_so = "CREATE TABLE IF NOT EXISTS SO( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SO_NO               INTEGER, " +
                            "SO_DATE             TEXT, " +
                            "CUST_CODE           INTEGER, " +
                            "O_NO                INTEGER, " +
                            "O_DARE              TEXT, " +
                            "AREA                TEXT, " +
                            "S_MAN               TEXT, " +
                            "VAN                 TEXT, " +
                            "GROSS_TOT           REAL, " +
                            "SCHEME1_TOT         REAL, " +
                            "SCHEME2_TOT         REAL, " +
                            "TEX_TOT             REAL, " +
                            "DMG_TOT             REAL, " +
                            "DISC                REAL, " +
                            "DISC_AMT            REAL, " +
                            "AD                  REAL, " +
                            "R_OFF               INTEGER, " +
                            "FIN_AMT             REAL, " +
                            "REMARKS             TEXT, " +
                            "X1                  TEXT, " +
                            "X2                  TEXT, " +
                            "X3                  TEXT, " +
                            "X4                  TEXT, " +
                            "X5                  TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_so);


                        var table_soDetail = "CREATE TABLE IF NOT EXISTS SO_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SOD_ID              INTEGER, " +
                            "SO_NO               INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROD_CODE           TEXT, " +                  //TODO
                            "PROD_DES            TEXT, " +
                            "PACKAGING           TEXT, " +                    //TODO
                            "RATE                REAL, " +
                            "QTY                 INTEGER, " +
                            "BOX                 INTEGER, " +
                            "FREE                REAL, " +
                            "SCH1                REAL, " +
                            "SCHEME1             REAL, " +
                            "SCH2                REAL, " +
                            "SCHEME2             REAL, " +
                            "REPL                INTEGER, " +
                            "DMG                 INTEGER, " +
                            "DMG_MRP             REAL, " +
                            "DMG_AMT             REAL, " +
                            "AMT                 REAL, " +
                            "TAX                 REAL, " +
                            "TAX_AMT             REAL, " +
                            "BATCH_NO            INTEGER, " +
                            "MRP                 REAL, " +
                            "RET_QTY             INTEGER, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_soDetail);


                        var table_soDetail2 = "CREATE TABLE IF NOT EXISTS SO_DETAIL2( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SODET_ID            INTEGER, " +
                            "SO_NO               INTEGER, " +
                            "SO_DATE             TEXT, " +
                            "DISP_CODE           INTEGER, " +                // TODO
                            "DISP_AMT            REAL, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_soDetail2);


                        var table_somDetail = "CREATE TABLE IF NOT EXISTS SOM_DETAIL( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "SOMD_ID             INTEGER, " +
                            "SO_NO               INTEGER, " +
                            "SR_NO               INTEGER, " +
                            "PROD_CODE           TEXT, " +                  //TODO
                            "SIZE                INTEGER, " +
                            "RATE                REAL, " +
                            "QTY                 INTEGER, " +
                            "FREE                REAL, " +
                            "REPL                INTEGER, " +
                            "DMG                 INTEGER, " +
                            "DMG_MRP             REAL, " +
                            "DMG_AMT             REAL, " +
                            "RET_QTY             INTEGER, " +
                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_somDetail);


                        var table_stk = "CREATE TABLE IF NOT EXISTS STK( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "STK_ID              INTEGER, " +
                            "PROD_ID             INTEGER, " +
                            "PROD_NAME           TEXT, " +
                            "BATCH               INTEGER, " +
                            "OP_STK              REAL, " +
                            "MRP                 REAL, " +
                            "SALE_RATE           REAL, " +
                            "PUR_RATE            REAL, " +
                            "LOCK                INTEGER, " +
                            "PACK                INTEGER, " +
                            "P_QTY               INTEGER, " +
                            "S_QTY               INTEGER, " +
                            "MFG_DATE            TEXT, " +
                            "EXP_DATE            TEXT, " +
                            "X1                  TEXT, " +
                            "X2                  TEXT, " +
                            "X3                  TEXT, " +
                            "X4                  TEXT, " +
                            "X5                  TEXT, " +
                            "RET_QTY             INTEGER, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_stk);


                        var table_van = "CREATE TABLE IF NOT EXISTS VAN( " +
                            "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
                            "VAN_ID              INTEGER, " +
                            "VAN_DETAIL          TEXT, " +

                            "CREATED_BY          INTEGER, " +
                            "UPDATED_BY          INTEGER, " +
                            "CREATED_TS          TEXT, " +
                            "UPDATED_TS          TEXT)";
                        db.run(table_van);












db.close();
