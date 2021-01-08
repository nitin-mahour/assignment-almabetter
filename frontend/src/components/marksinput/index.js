import React, { Component } from 'react'
import './style.css'
import { API_URL } from '../../config'
import { Link } from 'react-router-dom'

let total = 0
let percent = 0

class MarksInput extends Component {

    state = {
        roll: null,
        name: '',
        math: 0,
        phys: 0,
        chem: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.name === 'name' ? e.target.value : Number(e.target.value),
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // send the data
        fetch(`${API_URL}/add`, {
            method: 'POST',
            body: JSON.stringify({
                'roll': this.state.roll,
                'name': this.state.name,
                'math': this.state.math,
                'phys': this.state.phys,
                'chem': this.state.chem,
                'total': total,
                'percent': percent
            })
        }
        ).then(res => res.json()
        ).then(data => {
            if ('error' in data) {
                alert(data.error)
            }
            else {
                this.setState({
                    roll: null,
                    name: '',
                    math: 0,
                    phys: 0,
                    chem: 0,
                    error: null
                })

                // clear all input fields
                document.querySelectorAll('input').forEach(el => el.value = '')
                alert('Added Successfully!')
            }
        }).catch(err => {
            alert(String(err))
        })
    }

    render() {
        total = this.state.math + this.state.phys + this.state.chem
        percent = total / 3

        return (
            <div id="marksinput">

                <header>ENTER MARKS</header>

                <section>

                    <div id="show">
                        <div className="small">
                            <div className="big">{total.toFixed(1)}</div>
                            Total Marks
                        </div>

                        <div className="small">
                            <div className="big">{percent.toFixed(2)}%</div>
                            Percentage
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        {/* Roll No [upto 10 digits long] */ }
                        <input type="number" name="roll" onChange={this.handleChange} placeholder="Roll No" min="0" max="9999999999" required/>

                        {/* Name [upto 30 chars] */}
                        <input type="text" name="name" onChange={this.handleChange} maxLength="30" placeholder="Name" required/>

                        {/* Marks in Maths */}
                        <input type="number" name="math" onChange={this.handleChange} min="0" max="100" placeholder="Marks in Maths" required/>

                        {/* Marks in Physics */}
                        <input type="number" name="phys" onChange={this.handleChange} min="0" max="100" placeholder="Marks in Physics" required/>

                        {/* Marks in Chemistry */}
                        <input type="number" name="chem" onChange={this.handleChange} min="0" max="100" placeholder="Marks in Chemistry" required/>

                        <button type="submit">Submit</button>
                    </form>

                </section>
                
                <Link to="/" id='backbutton'>
                    Back to Homepage
                </Link>
            </div>
        )
    }
}

export default MarksInput