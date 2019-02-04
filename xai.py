import sys
import os
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash

app = Flask(__name__)

# Home Page
@app.route('/')
def show_home():
	return render_template('index.html')

@app.route('/results', methods=['GET', 'POST'])
def show_results():
	files = request.form['customFile']
	blackbox = request.form['blackbox_models_list']
	xai = request.form['xai_models_list']
	print(blackbox)
	print(xai)
	print(files)
	return render_template('results.html', files = files, blackbox = blackbox, xai = xai)

#def run_model():
