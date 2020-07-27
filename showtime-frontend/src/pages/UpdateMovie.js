import React, { useState,useEffect } from 'react';
import { useHistory, useParams} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MoviesApi from '../api/MoviesApi';


const CssTextField = withStyles({
    root: {
        '& .MuiInputLabel-root':{
            color:'#e9ecef'
        },
        '& .MuiInputBase-input': {
            color: '#e9ecef'
        },
        '& label.Mui-focused': {
            color: '#e9ecef',
        },
        "& .MuiInputBase-input.Mui-disabled": {
            color: "'#e9ecef"
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#e9ecef',
            color: '#e9ecef'
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
                borderColor: '#e9ecef',
                color: '#e9ecef'
            },
            '&:hover fieldset': {
                borderColor: '#e9ecef',
                color: '#e9ecef'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#e9ecef',
                color: '#e9ecef'
            },
        }
    }
})(TextField);

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    form_container: {
        marginTop: '15rem',
        padding: '1rem 2rem',
        backgroundColor: '#2020206d',
        borderRadius: '4px',
        color: 'white'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: 'white'
    },
    heading: {
        fontWeight: 700,
        color: "#fff",
        fontSize: '1.7rem',
        paddingBottom: 5
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#a5230d',
        color: 'white',
        height: 40
    },
}));


const UpdateMovie = () => {

    const { id } = useParams();

    let history = useHistory();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        history.push('/')
    };

    const getMovies = async props=> {
        const response = await MoviesApi.get(`/moviedetails/${id}`);
        setTitle(response.data[0].title);
        setGenre(response.data[0].genre);
    }

    const onUserInput = e => {
        switch (e.target.id) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'genre':
                setGenre(e.target.value);
                break;
            default:
        }
        console.log(title, genre);
    }

    const movieSubmitHandler = async e => {
        e.preventDefault();
        await MoviesApi.put(`/updatemovie/${id}`, {
            title: title,
            genre: genre
        })
        setOpen(true);

    }

    useEffect(() => {
        getMovies();
    }, []);


    const classes = useStyles();

    return (
        <React.Fragment>
        <Container fixed>
            <Typography component="div" style={{ backgroundColor: '#121212', height: '75vh', margin: '0 auto' }} >
                <Container component="main" maxWidth="xs" className={classes.form_container} >
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className={classes.heading}>
                            Update Movie
                        </Typography>
                        <form className={classes.form} onSubmit={movieSubmitHandler} noValidate>
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                value={title}
                                autoFocus
                                onChange={onUserInput}
                            />
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="genre"
                                label="Genre"
                                value={genre}
                                type="text"
                                id="genre"
                                color="secondary"
                                onChange={onUserInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Save
                            </Button>
                        </form>
                    </div>
                </Container>
            </Typography>
        </Container>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Movie Updated Successfully!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>

    );
}

export default UpdateMovie;