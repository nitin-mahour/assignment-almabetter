import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { API_URL } from '../../config'
import { SortDSC, SortASC, SearchIcon } from './icons'
import {
    sortByRollNo,
    sortByName,
    sortByMaths,
    sortByPhysics,
    sortByChemistry,
    sortByTotal,
    sortByPercentage
} from './sort'

export default class index extends Component {

    state = {
        marks: [],
        loading: true,
        error: null,

        // *_icon variables to keep record of lastest sorting and icon changes
        roll_icon: null,
        name_icon: null,
        math_icon: null,
        phys_icon: null,
        chem_icon: null,
        total_icon: null,
        prcnt_icon: null,

        // ables to change state outise this class
        changeIcon: (icon, value) => {
            this.resetIcon()
            this.setState({
                [icon]: value
            })
        },

        // to implement search functionality
        search: []
    }

    // prevents multiple icons rendering
    resetIcon() {
        this.setState({
            roll_icon: null,
            name_icon: null,
            math_icon: null,
            phys_icon: null,
            chem_icon: null,
            total_icon: null,
            prcnt_icon: null
        })
    }

    // so that fetch is called only once
    componentDidMount() {
        fetch(
            `${API_URL}/get`
        ).then(res => res.json()
        ).then(data => {
            this.setState({
                marks: [...data.marks],
                loading: false
            })

            // to sort by percentage by default
            sortByPercentage(this.state)

        }).catch(err => this.setState({
            error: err
        }))
    }

    search(e) {
        if ((e.target.value).length > 0) {
            // to remove case sensitivity
            let value = e.target.value.toUpperCase()

            let res = this.state.search.filter((a) => {
                // to remove case sensitivity
                let b = a.name.toUpperCase()

                // so that includes() can be used
                let c = String(a.roll_no)

                // search name
                if (b.includes(value)) {
                    return true
                }

                // search roll no
                if (c.includes(value)) {
                    return true
                }

                return false
            })

            // put the results in state
            this.setState({
                marks: [...res]
            })
        }

        // if search input is empty show all results
        else {
            this.setState({
                marks: [...this.state.search]
            })
        }
    }

    // make a copy of marks
    initSearch() {
        this.setState({
            search: [...this.state.marks]
        })
    }

    render() {
        return (
            <div id="leaderboard">
                <header>LEADERBOARD</header>

                <section>

                    <div id="search">
                        <div id="icon-container">{SearchIcon}</div>
                        <input type="text" placeholder="Seach Name or RollNo" onChange={(e) => this.search(e)} onFocus={(e) => this.initSearch(e)} />
                    </div>


                    {
                        this.state.loading
                            ? (<div className="loading">LOADING...</div>)
                            : (
                                <table>
                                    <thead>
                                        <tr id="headings">
                                            <th onClick={() => sortByRollNo(this.state)}>Roll No</th>
                                            <th onClick={() => sortByName(this.state)}>Name</th>
                                            <th onClick={() => sortByMaths(this.state)}>Maths</th>
                                            <th onClick={() => sortByPhysics(this.state)}>Physics</th>
                                            <th onClick={() => sortByChemistry(this.state)}>Chemistry</th>
                                            <th onClick={() => sortByTotal(this.state)}>Total</th>
                                            <th onClick={() => sortByPercentage(this.state)}>Percentage</th>
                                        </tr>

                                        {/* for displaying icons (describes the sorting order of column) */}
                                        <tr id="icons">
                                            <th>{this.state.roll_icon && (this.state.roll_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.name_icon && (this.state.name_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.math_icon && (this.state.math_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.phys_icon && (this.state.phys_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.chem_icon && (this.state.chem_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.total_icon && (this.state.total_icon === 'ASC' ? SortASC : SortDSC)}</th>
                                            <th>{this.state.prcnt_icon && (this.state.prcnt_icon === 'DSC' ? SortDSC : SortASC)}</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.marks.map(x => (
                                                <tr key={x.roll_no}>
                                                    <td>{x.roll_no}</td>
                                                    <td>{x.name}</td>
                                                    <td>{x.maths.toFixed(1)}</td>
                                                    <td>{x.physics.toFixed(1)}</td>
                                                    <td>{x.chemistry.toFixed(1)}</td>
                                                    <td>{x.total.toFixed(1)}</td>
                                                    <td>{x.percentage.toFixed(2)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            )
                    }
                </section>

                <Link to="/">Back to Homepage</Link>

                <div className="error">
                    {this.state.error && String(this.state.error)}
                </div>
            </div >
        )
    }
}

