#!/usr/bin/env python
import sqlite3
import time

db_filename = 'server/simple_server.db'

dbConn = sqlite3.connect(db_filename)
dbCursor = dbConn.cursor()

dbCursor.execute("CREATE TABLE IF NOT EXISTS simple ("+
    "`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, "+
    "`value` REAL DEFAULT 0,"+
    "`timestamp` INTEGER);")
dbConn.commit()
dbConn.close()

dbConn = sqlite3.connect(db_filename)
dbCursor = dbConn.cursor()

value = 0
while True:
    value = value + 1
    dt = int(time.time())
    values = [(value,dt)]
    dbCursor.executemany('INSERT INTO simple (value, timestamp) VALUES (?,?)', values)
    dbConn.commit()
    time.sleep(5)
