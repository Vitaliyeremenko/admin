import React, {Component}                           from 'react';
import {Content} from 'adminlte-2-react';
import WithdrawalTable                              from './WithdrawalTable';
import axios from '../../axios.instance';


class WaitingForPayment extends Component {

  componentDidMount() {
    // axios.get('api/v2/admin/transactions/get/withdraw?status=0')
    //   .then(result => {
    //     console.log(result);
    //   })
  }

  render() {
    const data = [
      {
        id: 1,
        username: 'Tolik',
        payment_system: 'payment1',
        sum: {last: '123.321PZM', now: '423.234PZM', percent: '43.43PZM'},
        requisite: {
          value: '3123-3123-3123-3141',
          key: 'dskalbgiuashbdoufhbaw483owhfw8urbeqlgwie4rg8hwe98ornwe8oriugwniuerwbgneiujkbrnluijkl',
        },
        balance: {last: '0.123123', now: '-123123,21'},
        ip: {number: '192.12.32.1', isVerify: true},
        created: '12.04.4281 df',
      },
      {
        id: 1,
        username: 'Tolik',
        payment_system: 'payment1',
        sum: {last: '123.321PZM', now: '423.234PZM', percent: '43.43PZM'},
        requisite: {
          value: '3123-3123-3123-3141',
          key: 'dskalbgiuashbdoufhbaw483owhfw8urbeqlgwie4rg8hwe98ornwe8oriugwniuerwbgneiujkbrnluijkl',
        },
        balance: {last: '0.123123', now: '-123123,21'},
        ip: {number: '192.12.32.1', isVerify: false},
        created: '12.04.4281 df',
      },
    ];
    return (
      <Content title="Ожидают оплаты" browserTitle="Ожидают оплаты">
        <WithdrawalTable data={data}/>
      </Content>
    )
  }
}

export default WaitingForPayment;