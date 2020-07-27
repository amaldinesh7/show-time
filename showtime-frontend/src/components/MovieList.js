import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import StarRating from './StarRating';
import MoviesApi from '../api/MoviesApi';
import {deleteMovie} from "../redux/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 80,
        width: '75%',
        margin: '0 auto'
    },
    accordion: {
        backgroundColor: "#1a1a1a",
        padding: "0px 25px"

    },
    action_bar: {
        padding: "0px 8px 4px 8px",
        height: 34
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        color: 'rgba(255, 255, 255, 1)'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: 'rgba(255, 255, 255, 0.7)',
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'left',
    },
    column1: {
        flexBasis: '15%',
    },
    column2: {
        flexBasis: '45%',
    },
    column3: {
        flexBasis: '25%',
    },
    column4: {
        flexBasis: '15%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    buttonupdate: {
        color: 'rgba(255, 255, 255, 0.8)'
    },
    buttondelete: {
        color: '#e74c32'
    },

    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));


const MovieList = (props) => {

    const id = props.id;

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteMovieHandler = () => {
        console.log(id);
        props.deleteMovie(id);
        setOpen(false);
    }

    return (
        <React.Fragment>

            <Accordion className={classes.accordion}>
                <AccordionSummary
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column1}>
                        <Typography className={classes.secondaryHeading}>{props.number}</Typography>
                    </div>
                    <div className={classes.column2}>
                        <Typography className={classes.heading}>{props.title}</Typography>
                    </div>
                    <div className={classes.column3}>
                        <Typography className={classes.secondaryHeading}>{props.genre}</Typography>
                    </div>
                    <div className={classes.column4}>
                        <Typography className={classes.heading}>
                            <StarRating starCount={props.rating} id={props.id} />
                        </Typography>
                    </div>
                </AccordionSummary>

                <AccordionActions className={classes.action_bar}>
                    <Link to={`/${props.id}/updatemovie`} exact>
                        <Button size="small" variant="text" color="action" className={classes.buttonupdate} startIcon={<EditIcon />}>
                            Update
                    </Button>
                    </Link>
                    <Button size="small" variant="text" color="secondary" onClick={handleClickOpen} className={classes.buttondelete} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </AccordionActions>
            </Accordion>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete this movie?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this movie?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={deleteMovieHandler} color="primary" autoFocus>
                        Delete
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};


const mapStateToProps = (state) => ({
    movies: state.movies
  });


export default connect(mapStateToProps,{deleteMovie})(MovieList);

