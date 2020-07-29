import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {ratingFilterAction} from '../../redux/actions';

const FilterOption = (props) => {

    const ratingFilterClickHandler = (e,data) => {
        console.log("CLICKED")
        console.log("DATA --->",data);
        props.ratingFilterAction(data.value)
    }

    return (
        <Dropdown
            icon='filter'
            floating
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header icon='star' content='Rating' />
                <Dropdown.Divider />
                <Dropdown.Item value='1' onClick={ratingFilterClickHandler}>1 Star</Dropdown.Item>
                <Dropdown.Item value='2' onClick={ratingFilterClickHandler}>2 Star</Dropdown.Item>
                <Dropdown.Item value='3' onClick={ratingFilterClickHandler}>3 Star</Dropdown.Item>
                <Dropdown.Item value='4' onClick={ratingFilterClickHandler}>4 Star</Dropdown.Item>
                <Dropdown.Item value='5' onClick={ratingFilterClickHandler}>5 Star</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, {ratingFilterAction})(FilterOption)
