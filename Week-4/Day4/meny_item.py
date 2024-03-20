class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price
        
    def save(self):
        






# except psycopg2.Error as e:
#     print('Error conecting', e)
# finally:
#     if conn:
#         cursor.close()
#         conn.close()