import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import StarRating from '../components/StarRating';
import MoviesApi from '../api/MoviesApi';


const CssTextField = withStyles({
    root: {
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


const AddMovie = () => {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const onUserInput = e => {
        switch(e.target.id){
            case 'title' :
                setTitle(e.target.value);
                break;
            case 'genre':
                setGenre(e.target.value);
                break;
            case 'rating':
                setRating(e.target.value);
                break;
            default:
        }
        console.log(title,genre,rating);
    }

    const movieSubmitHandler = e => {
        e.preventDefault();

        MoviesApi.post('/addmovie', {
            title: title,
            genre: genre,
            rating: rating
        })
            .then((response) => {
                console.log({ message: "User Created Successfully!", headerMessage: "Success!" });
            })
            .catch((error) => {
                console.log({ message: "User Creation Failed! Please Try Again", headerMessage: "Failed!" });
            });

    }

    const classes = useStyles();

    return (
        
        <Container fixed>
            <Typography component="div" style={{ backgroundColor: '#121212', height: '75vh', margin: '0 auto' }} >
                <Container component="main" maxWidth="xs" className={classes.form_container} >
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className={classes.heading}>
                            Add Movie
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
                            <CssTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="rating"
                                label="Rating (Out of 5)"
                                value={rating}
                                type="text"
                                id="rating"
                                color="secondary"
                                onChange={onUserInput}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Add Movie
                            </Button>
                            {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
                        </form>
                    </div>
                </Container>
            </Typography>
        </Container>

    );
}

export default AddMovie;