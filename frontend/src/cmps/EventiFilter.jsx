import React, { Component } from 'react'
import { FormControl,Select, MenuItem, InputLabel } from '@material-ui/core';
import {  BusService } from '../services/event-bus-service';
import { withRouter } from "react-router";


export class _EventiFilter extends Component {
    state = {
        filter: {
            date: 'all',
            order: 'desc',
            sort: 'date',
            title: ''

        }
    }
    unsubscribe;

    componentDidMount() {
        this.unsubscribe = BusService.on('searchUpdated',this.handleChange);
        // unsubscribe();
    }

    componentWillUnmount() {
        this.unsubscribe()
    }
    handleChange = ({ target }) => {
        const field = target.name;
        let value = target.value;
        console.log(value)

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }),
            () => {
                this.props.onSetFilter(this.state.filter)
            });

    }


    render() {
        const { date, sort, order , name } = this.state.filter
        return (
            <form className="main-filter-container">
                {/* <div className="serach">
                    <label className="title">By title</label>
                    <input type="text" name='title' value={name} onChange={this.handleChange} />
                </div> */}
                <div className="filter flex justify-space">
                <FormControl>
                <InputLabel id="date">Date</InputLabel>
                <Select labelId="date" id="date" name="date" value={date} onChange={this.handleChange}>
                    <MenuItem value="all">Any Time</MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                     <MenuItem value="week">This week</MenuItem>
                    <MenuItem value="month">This month</MenuItem>
                    <MenuItem value="year">This year</MenuItem>
                </Select>
                </FormControl>
                <FormControl>
                <InputLabel id="sort">Sort By</InputLabel>
                <Select labelId="sort" id="sortby" name="sort" value={sort} onChange={this.handleChange}>
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="rank">Rank</MenuItem>
                    <MenuItem value="participants">Nu. of participants</MenuItem>
                </Select>
                </FormControl>
                <FormControl>
                <InputLabel id="order">order By</InputLabel>
                <Select labelId="order" id="order" name="order" value={order} onChange={this.handleChange}>
                    <MenuItem value="desc">Descending</MenuItem>
                    <MenuItem value="asc">Ascending</MenuItem>
                </Select>
                </FormControl>
                </div>
            </form>
        )
    }
}

export const EventiFilter = withRouter(_EventiFilter)


