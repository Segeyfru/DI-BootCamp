import psycopg2
import config


try:
    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME,
        password = config.PASSWORD,
        host = config.HOSTNAME,
        port = config.PORT
    )
    
    cursor = conn.cursor()
    
    
    
    #  two methods to fetch the date:
    # fetchall() or fetchone()
    
    
    # cursor.execute('''
    #                INSERT INTO actors(first_name, last_name, age,number_oscars)
    #                VALUES 
    #                ('John','Robins','02/02/1685',5),
    #                ('Tony','Gilberg','06/08/1968',3);
    #                ''')
    
    # conn.commit()
    
    
    
    cursor.execute('SELECT * FROM actors')
    all_rows = cursor.fetchall()
    for row in all_rows:
        print(row)
    
    # print(cursor.fetchone())

except psycopg2.Error as e:
    print('Error conecting', e)
finally:
    if conn:
        cursor.close()
        conn.close()