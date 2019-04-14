import React from 'react';
import { Component } from 'react';

class PreparePromotion extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div className="edit-Event">
                        <form onSubmit={this.props.onClick}>
                            <div class="form-group">
                                <input type="number" class="form-control" id="czasTrwania" name="nazwaPojazdu" placeholder="Czas trwania promocji (w s)" />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" id="wysokoscRabatu" name="typPojazdu" placeholder="Wysokosc rabatu podczas promocji ( w % )" />
                            </div>
                            <center>
                                <div class="form-group">
                                    <input type="submit" value="Dodaj" />
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        );
    }

}

export default PreparePromotion;