import { Component } from 'react'
import './movies-add-form.css'


class MovieAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            views: '',
        }
    }

    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addFormHendler = (e) => {
        e.preventDefault()
        this.props.addForm({
            name: this.state.name,
            viewers: this.state.views,
        })
        this.setState({
            name: '',
            views: ''
        })
    }

    render() {
        const { name, views } = this.state
        return (
            <div className='movie-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form className='add-form d-flex' onSubmit={this.addFormHendler}>
                    <input type="text"
                        className='form-control new-post-label'
                        placeholder="Qanday kino?"
                        onChange={this.changeHandlerInput}
                        name='name'
                        value={name}
                    />

                    <input type="number"
                        className='form-control new-post-label'
                        placeholder="Necha marotaba ko'rilgan?"
                        onChange={this.changeHandlerInput}
                        name='views'
                        value={views}
                    />
                    <button type='submit' className='btn btn-outline-dark'>
                        Qo'shish
                    </button>
                </form>
            </div>
        )
    }
}

export default MovieAddForm
