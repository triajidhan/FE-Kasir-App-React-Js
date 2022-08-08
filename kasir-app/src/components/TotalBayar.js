import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import { numberWithCommas } from '../utils/utils';

export default class TotalBayar extends Component {
    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL + "pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })
    }

    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <div>
                {/* web */}
                <div className='fixed-bottom d-none d-md-block'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className='px-4'>
                            <h4>Total Harga : <strong className='float-end me-2'>Rp. {numberWithCommas(totalBayar)}</strong></h4>
                            <Button variant='primary' className='mb-2 mt-4 me-2 d-block w-100' size='lg' onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to='/sukses'>
                                <FontAwesomeIcon icon={faShoppingCart} /> <strong className='ms-2'>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>
                </div>

                {/* handphone */}
                <div className='d-d-sm-block d-md-none'>
                    <Row>
                        <Col md={{ span: 3, offset: 9 }} className='px-4'>
                            <h4>Total Harga : <strong className='float-end me-2'>Rp. {numberWithCommas(totalBayar)}</strong></h4>
                            <Button variant='primary' className='mb-2 mt-4 me-2 d-block w-100' size='lg' onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to='/sukses'>
                                <FontAwesomeIcon icon={faShoppingCart} /> <strong className='ms-2'>BAYAR</strong>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

