import os
import webbrowser
import threading
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

# Fungsi untuk menjalankan server
def run_server():
    PORT = 174
    handler = SimpleHTTPRequestHandler
    os.chdir('..')
    with TCPServer(("", PORT), handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

# Fungsi untuk membuka browser secara otomatis
def open_browser(url):
    webbrowser.open(url)

#Fungsi VSC
def open_vsc():
    os.system('code .')


# Jalankan server di thread terpisah
server_thread = threading.Thread(target=run_server)
server_thread.daemon = True
server_thread.start()

#buka visual studio code
open_vsc()

# Membuka browser secara otomatis
open_browser('http://localhost:174')
open_browser('https://chatgpt.com')

# Tetap menjalankan server
server_thread.join()