# from api import app, db
# from api.models import Marks
from . import app, db
from .models import Marks
from flask import request, send_from_directory, jsonify
import json

# Serve the frontend
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


# to create table
@app.route('/init')     
def init_db():
    Marks.create_table()
    return jsonify('INITIALIZED')


# READ
@app.route('/get')      
def get_marks():
    res = {
        'marks': []
    }
    
    # returns all records at once
    for x in Marks.query.all():
        res['marks'].append(x.to_json())

    return jsonify(res)


# CREATE
@app.route('/add', methods=['POST'])
def post_marks():
    # get all data from POST body
    data = json.loads(request.data)

    if Marks.query.get(int(data['roll'])):
        return jsonify({
            'error': 'ROLL_NO_ALREADY_PRESENT'
        })

    try:
        marks = Marks(
            roll_no=int(data['roll']),
            name=data['name'],
            maths=float(data['math']),
            physics=float(data['phys']),
            chemistry=float(data['chem']),
            total=(float(data['total'])),
            percentage=(float(data['percent']))
        )
        db.session.add(marks)
        db.session.commit()
        return jsonify({
            'message': 'ADDED'
        })

    except Exception as e:
        return jsonify({
            'error': str(e)
        })


# UPDATE
@app.route('/update', methods=['POST'])
def update_marks():
    # get all data from POST body
    data = json.loads(request.data)

    # get record
    marks = Marks.query.get(data['roll'])

    if not marks:
        return jsonify({
            'error': 'NOT_FOUND'
        })

    # update values if provided in POST body
    if 'name' in data:
        marks.name = data['name']
    if 'math' in data:
        marks.maths = data['math']
    if 'phys' in data:
        marks.physics = data['phys']
    if 'chem' in data:
        marks.chemistry = data['chem']
    if 'total' in data:
        marks.total = data['total']
    if 'percent' in data:
        marks.percentage = data['percent']

    db.session.commit()
    return jsonify({
        'message': 'UPDATED'
    })


# DELETE
@app.route('/delete/<roll>')
def delete_marks(roll):
    res = Marks.query.filter_by(roll_no=roll).delete()
    db.session.commit()
    if res:
        return jsonify({
            'message': 'DELETED'
        })
    else:
        return jsonify({
            'error': 'NOT_FOUND'
        })
