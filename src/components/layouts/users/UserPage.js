/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../spinner.gif';
import Repos from '../users/repos/Repos'


class UserPage extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,

    }
    render() {
        const { 
            name,
            repos,
            avatar_url,
            location,
            bio,
            blog,
            loging,
            html_url,
            company,
            followers,
            following,
            public_repos,
            public_gist,
            hirable
            } = this.props.user;

            const { loading } = this.props;

            if(loading) return <Spinner/>;

        return ( <Fragment>
            
            <Link to='/' className='btn btn-light'>
                Back To Search
            </Link>
            Hirable: {''}
            {hirable ? (
            <i className='fas fa -check text-success'/>
            ) : (
                <i className='fas fa-times-circle text-danger' />
            )}  
            <div className='card grid-2'>
                <div className='all-center'>
                    <img 
                    src={avatar_url} 
                    className='round-img'
                    alt='profile image'
                    style={{ width: '150px' }} />

                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                {bio && (
                    <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    </Fragment>
                )}
                <a href={html_url} className='btnbtn-dark my-1'>Visit GitHub Profile</a>

                <ul>
                    <li>
                        {loging && <Fragment>
                            <strong> Username: </strong>{loging}
                            </Fragment>}
                    </li>
                    <li>
                        {company && <Fragment>
                            <strong> Company: </strong>{company}
                            </Fragment>}
                    </li>
                    <li>
                        {blog && <Fragment>
                            <strong> Website/Blog: </strong>{blog}
                            </Fragment>}
                    </li>
                </ul>
                </div>
            </div>

            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-light'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gist}</div>
            </div>

        <Repos repos={ repos } />
        </Fragment>
            
        );
    }
}


export default UserPage;