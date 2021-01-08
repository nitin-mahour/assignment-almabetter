from . import db


class Marks(db.Model):
    __tablename__ = 'marks'

    roll_no = db.Column(db.Integer, primary_key=True, autoincrement=False)
    name = db.Column(db.String(50))
    maths = db.Column(db.Float)
    physics = db.Column(db.Float)
    chemistry = db.Column(db.Float)
    total = db.Column(db.Float)
    percentage = db.Column(db.Float)

    def to_json(self):
        return {
            'roll_no': self.roll_no,
            'name': self.name,
            'maths': self.maths,
            'physics': self.physics,
            'chemistry': self.chemistry,
            'total': self.total,
            'percentage': self.percentage
        }

    def create_table():
        db.create_all()
