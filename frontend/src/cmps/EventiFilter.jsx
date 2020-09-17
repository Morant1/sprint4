import React, { Component } from 'react'
import { Select, MenuItem, InputLabel,Button } from '@material-ui/core';


export class EventiFilter extends Component {
    state = {
        filter: {
            date: '',
            orderBy: '',
            sort: ''

        }
    }
    handleChange = ({ target }) => {
        const field = target.name;
        let value = target.value;

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }),
            () => this.props.onSetFilter(this.state.filter));

    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }

    render() {
        const { date, sort, orderBy } = this.state.filter
        return (
            // onSubmit={this.onFilter}
            <form className="main-filter-container flex">
                <InputLabel id="date">Date</InputLabel>
                <Select labelId="date" name="date" value={date} onChange={this.handleChange}>
                    <MenuItem value="">Any Time</MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="week">This week</MenuItem>
                    <MenuItem value="month">This month</MenuItem>
                    <MenuItem value="year">This year</MenuItem>
                </Select>
                    <InputLabel id="sort">Sort By</InputLabel>
                    <Select labelId="sort" name="sort" value={sort} onChange={this.handleChange}>
                        <MenuItem value="date">date</MenuItem>
                        <MenuItem value="rank">Rank</MenuItem>
                        <MenuItem value="participants">Nu. of participants</MenuItem>
                    </Select>
                    <InputLabel id="order">order By</InputLabel>
                    <Select labelId="order" name="orderBy" value={orderBy} onChange={this.handleChange}>
                        <MenuItem value="desc">Descending</MenuItem>
                        <MenuItem value="asc">Ascending</MenuItem>
                    </Select>
                
                <Button size="small" variant="contained">Apply</Button>
            </form>
        )
    }
}



