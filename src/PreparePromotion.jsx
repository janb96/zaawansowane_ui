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
            <div className="panelPromocji">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <br />
                        <br />
                        <center><h1 class="display-3">Dodaj promocje</h1></center>
                        <br/>
                        <div className="edit-Event">
                            <form onSubmit={this.props.onClick}>
                                <div class="form-group">
                                    <center><h1>Czas trwania promocji</h1></center>
                                    <input type="number" class="form-control" id="czasTrwania" placeholder="Czas trwania promocji (w s)" />
                                </div>
                                <div class="form-group">
                                    <center><h1>Wysokosc rabatu</h1></center>
                                    <select class="form-control" id="wysokoscRabatu">
                                        <option value="5">5%</option>
                                        <option value="10">10%</option>
                                        <option value="15">15%</option>
                                        <option value="20">20%</option>
                                        <option value="30">30%</option>
                                        <option value="40">40%</option>
                                    </select>
                                </div>
                                <center>
                                    <div class="form-group">
                                        <button type="submit" class="form-control btn btn-success" value="Dodaj" onClick={this.props.handler}>Rozpocznij promocje</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
                <br/>
            </div>
        );
    }

}

export default PreparePromotion;