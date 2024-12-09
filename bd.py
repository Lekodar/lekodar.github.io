pip install sqlite3
import sqlite3

def save_links_to_db(links):
    conn = sqlite3.connect('links.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS backlinks (url TEXT, quality_score REAL)''')

    for link in links:
        cursor.execute('INSERT INTO backlinks (url, quality_score) VALUES (?, ?)', (link['url'], link['quality_score']))

    conn.commit()
    conn.close()
