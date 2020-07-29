import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {sortMovieAction} from '../../redux/actions';

const SortOption = (props) => {

    const sortMovieClickHandler = (e,data) => {
        props.sortMovieAction(data.value)
    }

    return (
        <Dropdown
            icon='sort'
            floating
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header content='Sort By Title' />
                <Dropdown.Divider />
                <Dropdown.Item value='ASC' onClick={sortMovieClickHandler}>Ascending</Dropdown.Item>
                <Dropdown.Item value='DESC' onClick={sortMovieClickHandler}>Descending</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {sortMovieAction})(SortOption)
